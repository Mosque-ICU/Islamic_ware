import { getSession } from "@/app/_helpers/api/helpers";
import { getServerCacheValue, addServerCacheValue } from "@/app/_helpers/api/servercache";
import React from "react";
import SitesPage from "./sites";
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

//@ts-expect-error
const conn = mysql.createConnection(process.env.DATABASE_URL);

//This function is server side only.
async function getData() {
  try {
    const session = await getSession(conn);
    if (!session?.establishmentId) return NextResponse.redirect(process.env.NEXT_PUBLIC_APP_URL + "/login?unathorised=true");

    const cachedData = await getServerCacheValue("sites" + session.establishmentId);
    if (cachedData) return cachedData;

    //The sql func automatically parametrizes your query to avoid SQL injection attacks. LIMIT 30 , order by id desc
    // const sites =
    //   await sql`SELECT "id", "description", "label", "userId", "thumbnail", "createdAt", "updatedAt" FROM "Site" WHERE "establishmentId" = ${session.establishmentId} ORDER BY "id" DESC LIMIT 30`;

    const [sites] = await (
      await conn
    ).execute(
      " SELECT `id`, `description`, `label`, `userId`, `thumbnail`, `createdAt`, `updatedAt` FROM `Site` WHERE `establishmentId` = ? ORDER BY `id` DESC LIMIT 30 ",
      [session.establishmentId]
    );

    addServerCacheValue(sites, "sites" + session.establishmentId);
    return sites;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function Page() {
  const data = await getData();

  return <SitesPage data={data} />;
}
