import { getSession } from "@/app/_helpers/api/helpers";
import { addServerCacheValue, deleteFromServerCache, getServerCacheValue } from "@/app/_helpers/api/servercache";
import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

//@ts-expect-error
const conn = mysql.createConnection(process.env.DATABASE_URL);

//Get current article
export const GET = async (req: NextRequest, res: Response) => {
  try {
    const session = await getSession(conn);
    if (!session?.establishmentId) return NextResponse.redirect("/login?unauthorised=true");

    const id = req.nextUrl.searchParams.get("id");

    const cachedData = await getServerCacheValue("article" + id);
    if (cachedData) return NextResponse.json(cachedData);

    const [article] = (await (
      await conn
    ).query(
      "SELECT id, title, description, content, establishmentId, userId, likes, attachments, allowComments, showAuthor, showDate, showLikes, thumbnail, createdAt, updatedAt, deletedAt, commentKey, categoryIds FROM Article WHERE id = ?",
      [id]
    )) as any;

    addServerCacheValue(article, "article" + id);

    return NextResponse.json(article[0]);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "There was an error", errors: true }, { status: 500 });
  }
};
