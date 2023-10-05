//Create a new application

import { getSession } from "@/app/_helpers/api/helpers";
import { addServerCacheValue, deleteFromServerCache, getServerCacheValue } from "@/app/_helpers/api/servercache";
import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

//@ts-expect-error
const conn = mysql.createConnection(process.env.DATABASE_URL);

//Get current site
export const GET = async (req: NextRequest, res: Response) => {
  try {
    const path = req.nextUrl.searchParams.get("path");
    console.log("p", path);
    const session = await getSession(conn);
    if (!session?.establishmentId) return NextResponse.redirect("/login?unauthorised=true");

    const siteName = req.nextUrl.searchParams.get("siteName");

    const cachedData = await getServerCacheValue("site" + siteName);
    if (cachedData) return NextResponse.json(cachedData);

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

    return NextResponse.json(currentSite);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "There was an error", errors: true }, { status: 500 });
  }
};

//Add a new site
export const POST = async (req: Request, res: Response) => {
  try {
    const session = await getSession(conn);
    if (!session?.establishmentId) return NextResponse.redirect("/login?unauthorised=true");

    const body = await req.json();

    body.label = body.label.replace(/\s+/g, "-").toLowerCase();

    const date = new Date() as any;

    let siteid = null;
    try {
      //start transaction
      await (await conn).query("START TRANSACTION");

      //Create new Site
      const [SiteQuery] = await (
        await conn
      ).query("INSERT INTO Site (label, description, userId, establishmentId, establishmentPublicId, thumbnail, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)", [
        body.label,
        body.description,
        session.userId,
        session.establishmentId,
        body.establishmentPublicId,
        body.thumbnail,
        date,
      ]);

      //last insert id
      const [lastInsertId] = (await (await conn).query("SELECT LAST_INSERT_ID() as id")) as any;

      //Add site page to the site
      await (
        await conn
      ).query("INSERT INTO SitePage (label, userId, establishmentId, siteName, content, updatedAt) VALUES (?, ?, ?, ?, ?, ?)", [
        "home",
        session.userId,
        session.establishmentId,
        body.label,
        '[{"id":1,"data":[]}]',
        date,
      ]);

      await (await conn).query("COMMIT");
      siteid = lastInsertId[0].id;
    } catch (err) {
      await (await conn).query("ROLLBACK");
      throw err;
    }

    deleteFromServerCache("sites" + session.establishmentId);

    return NextResponse.json({ success: true, id: siteid });
  } catch (err: any) {
    console.log(err);
    //check if unique constraint was violated
    if (err.code === "ER_DUP_ENTRY") {
      return NextResponse.json({ message: "Site name is already taken", errors: true }, { status: 400 });
    }

    console.log(err);
    return NextResponse.json({ message: "There was an error", errors: true }, { status: 500 });
  }
};
