/**
 * Imports Next.js API routes for headers and responses, React, MySQL client,
 * and application components.
 * 
 * Defines a default site data constant.
 * 
 * Exports a default async function that:
 * 
 * - Checks the subdomain and determines if it's an admin or site request
 * - For admin, checks for valid session and redirects
 * - For site, fetches site data from DB
 * - Renders HomePage or ServerSidePage component based on site data
 * 
 * Includes revalidation setting for incremental static regeneration.
 * 
 * Provides server-side rendering for sites by fetching data directly from DB.
 */
import { cookies ,headers} from "next/headers";
import { NextResponse } from "next/server";
import { getSession } from "./_helpers/api/helpers";
import { HomePage } from "./Home";
import React, { cache } from "react";

import mysql from "mysql2/promise";
import SiteEditorPage from "./dashboard/site/[...slug]/SiteEditorPage";
import ServerSidePage from "./build/QuikBuilder/area/ServerSidePage";


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
  // Get the subdomain from the URL
  const url = headers().get("host");
  const subdomain = url?.split(".")[0];
  const path = url?.split("/")[1];

  console.log(subdomain);

  // Check if the subdomain is "admin"
  if (subdomain === "admin") {
    // Check for a session cookie
    const sessionCookie = cookies().get("session");
    if (sessionCookie) {
      const conn = mysql.createConnection(process.env.DATABASE_URL);

      // Check if the session cookie is valid
      const session = await getSession(conn);
      
      // Redirect if the session has establishmentName
      if (session?.establishmentName) {
        NextResponse.redirect(process.env.NEXT_PUBLIC_APP_URL + "/dashboard/home");
      }

      return session?.establishmentName;
    }
  } else {
    // Fetch the site from the database
    const [site] = await (
      await conn
    ).query("SELECT id, description, label, permissions, adminIds, userId, thumbnail, createdAt, updatedAt , siteData FROM Site WHERE label = ?", [subdomain]) as any;

    if (!site || site.length === 0) return null;

    // Fetch the SitePage
    const [SitesPage] = await (
      await conn
    ).query("SELECT id, description, content, label FROM SitePage WHERE siteName = ? AND label = ?", [subdomain, path || "home"]);

    // Create a data structure for the site
    let currentSite = site[0] as any;
    currentSite.SitePages = SitesPage as any;
    currentSite.siteData = { ...defaultSiteData, ...(site.siteData || []) };

    // Parse the sitePage content as JSON
    currentSite.SitePages[0].content = JSON.parse(currentSite.SitePages[0].content) as any;

    return currentSite;
  }
};

export default async function Home() {
  // Get the name or site data from checkRootProcess
  const nameOrSite = await checkRootProcess();

  // If SitePages exist, render the ServerSidePage
  if (nameOrSite?.SitePages) {
    return <ServerSidePage site={nameOrSite} />;
  }

  // Otherwise, render the HomePage with a name
  return <HomePage name={nameOrSite} />;
}

