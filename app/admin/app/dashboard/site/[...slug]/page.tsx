import { getSession } from "@/app/_helpers/api/helpers";
import { getServerCacheValue, addServerCacheValue } from "@/app/_helpers/api/servercache";
import { headers } from "next/headers";

import React from "react";
import SiteEditorPage from "./SiteEditorPage";
import { Toaster } from "react-hot-toast";

import mysql from "mysql2/promise";
import { NextRequest, NextResponse } from "next/server";
//@ts-expect-error

const conn = mysql.createConnection(process.env.DATABASE_URL);
//This function is server side only.
async function getData(siteName: string) {
  try {
    const session = await getSession(conn);
    if (!session?.establishmentId) return NextResponse.redirect("/login?unauthorised=true");

    const siteName = headers().get("referer")?.split("?label=")[1];

    const cachedData = await getServerCacheValue("site" + siteName);
    if (cachedData) return cachedData;

    const [site] = (await (
      await conn
    ).query("SELECT id, description, label, permissions, adminIds, userId, thumbnail, createdAt, updatedAt , siteData FROM Site WHERE label = ?", [
      siteName,
    ])) as any;

    if (!site || site.length === 0) return NextResponse.json({ message: "Site not found", errors: true }, { status: 404 });

    const [SitesPage] = await (await conn).query("SELECT id, description, content, label FROM SitePage WHERE siteName = ? AND label = ?", [siteName, "home"]);

    let currentSite = site[0] as any;
    currentSite.SitePages = SitesPage as any;

    addServerCacheValue(currentSite, "site" + siteName);

    return currentSite;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function Page() {
  const headersList = headers();

  const siteName = headersList.get("referer")?.split("?label=")[1];

  let data = null;
  //   if (siteName) { //Commented out for now, as it's not working with the site name passed in the url.
  //     data = await getData(siteName);
  //   }

  return (
    <>
      <Toaster />
      <SiteEditorPage currentSite={data} />
    </>
  );
}
