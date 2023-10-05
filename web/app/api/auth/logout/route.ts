import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

//@ts-expect-error
const conn = mysql.createConnection(process.env.DATABASE_URL);

export const POST = async (req: Request, res: Response) => {
  try {
    const sessionCookie = cookies().get("session");

    if (!sessionCookie) return NextResponse.json({ message: "unauthorised", errors: true }, { status: 401 });

    //Delete session from db
    await (await conn).execute("DELETE FROM SessionStorage WHERE token = ?", [sessionCookie.value]);

    //Delete session cookie
    cookies().set("session", "", {
      path: "/",
      maxAge: 0,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "There was an error", errors: true }, { status: 500 });
  }
};
