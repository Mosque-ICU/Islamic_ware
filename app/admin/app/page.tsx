import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import React from "react";
import { getSession } from "./_helpers/api/helpers";
import { HomePage } from "./Home";
import { cache } from "react";

import mysql from "mysql2/promise";
import SiteEditorPage from "./dashboard/site/[...slug]/SiteEditorPage";
import ServerSidePage from "./components/Craftjs/area/ServerSidePage";
export const revalidate = 10; // revalidate the data at most every hour

//@ts-expect-error
const conn = mysql.createConnection(process.env.DATABASE_URL);

const defaultSiteData = {
  siteColors: ["#FFFFFF", "#D8DAD3", "#4F46E5", "A3A0D8", "#000000"],
  defaultColorIndexes: {
    sectionBackground: 0,
    textColor: 4,
    buttonBackground: 4,
    buttonTextColor: 0,
    buttonHoverBackground: 2,
    buttonHoverTextColor: 0,
    buttonBorder: 0,
  },
};

const checkRootProcess = async () => {
  //ckeck what the subdomain is

  const url = headers().get("host");
  const subdomain = url.split(".")[0];

  const path = url.split("/")[1];

  console.log(subdomain);
  //check if subdomain is admin

  if (subdomain === "admin") {
    //check if user has a session cookie
    const sessionCookie = cookies().get("session");
    if (sessionCookie) {
      const conn = mysql.createConnection(process.env.DATABASE_URL);

      //check if session cookie is valid
      const session = await getSession(conn);
      if (session?.establishmentName) NextResponse.redirect(process.env.NEXT_PUBLIC_APP_URL + "/dashboard/home");
      return session?.establishmentName;
    }
  } else {
    //try to fetch site from database

    const [site] = (await (
      await conn
    ).query("SELECT id, description, label, permissions, adminIds, userId, thumbnail, createdAt, updatedAt , siteData FROM Site WHERE label = ?", [
      subdomain,
    ])) as any;

    if (!site || site.length === 0) return null;

    const [SitesPage] = await (
      await conn
    ).query("SELECT id, description, content, label FROM SitePage WHERE siteName = ? AND label = ?", [subdomain, path || "home"]);

    let currentSite = site[0] as any;
    currentSite.SitePages = SitesPage as any;
    currentSite.siteData = { ...defaultSiteData, ...(site.siteData || []) };

    //parse sitePage content
    currentSite.SitePages[0].content = JSON.parse(currentSite.SitePages[0].content) as any;
    return currentSite;
  }
};

export default async function Home() {
  const nameOrSite = await checkRootProcess();

  if (nameOrSite?.SitePages) return <ServerSidePage site={nameOrSite} />;

  return <HomePage name={nameOrSite} />;
}
