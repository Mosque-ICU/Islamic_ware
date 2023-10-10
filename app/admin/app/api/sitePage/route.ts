import { getSession } from "@/app/_helpers/api/helpers";
import { deleteFromServerCache } from "@/app/_helpers/api/servercache";
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

//@ts-expect-error
const conn = mysql.createConnection(process.env.DATABASE_URL);
//Update Site Page
export const PUT = async (req: Request, res: Response) => {
  try {
    const session = await getSession(conn);
    if (!session?.establishmentId) return NextResponse.json({ message: "unauthorised", errors: true }, { status: 401 });

    const body = await req.json();
    const date = new Date() as any;

    //Update Site Page
    // const SiteQuery =
    //   await sql`UPDATE "SitePage" SET "content" = ${body.content}, "updatedAt" = ${date} WHERE "id" = ${body.id} AND "establishmentId" = ${session.establishmentId} RETURNING "id"`;

    await (
      await conn
    ).execute("UPDATE SitePage SET content = ?, updatedAt = ? WHERE id = ? AND establishmentId = ?", [body.content, date, body.id, session.establishmentId]);

    deleteFromServerCache("site" + body.siteName);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "There was an error", errors: true }, { status: 500 });
  }
};
