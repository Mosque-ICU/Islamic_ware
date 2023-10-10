import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { uuid } from "uuidv4";
// import { DB } from "@/app/_helpers/api/configs";
import mysql from "mysql2/promise";

import { addServerCacheValue } from "@/app/_helpers/api/servercache";
//@ts-expect-error
const connection = mysql.createConnection(process.env.DATABASE_URL);

const argon2 = require("argon2");

export const POST = async (req: Request, res: Response) => {
  try {
    const { email, password } = await req.json();

    const [userRows] = (await (
      await connection
    ).execute("SELECT privateId, hashedPassword, id, firstName, lastName , isDisabled FROM User WHERE email = ?", [email])) as any;
    if (!userRows || userRows.length === 0) return NextResponse.json({ message: "Invalid credentails", errors: true }, { status: 400 });
    else if (userRows[0].disabled) return NextResponse.json({ message: "Account disabled", errors: true }, { status: 400 });

    //check if password is correct
    if (!(await argon2.verify(userRows[0].hashedPassword, password))) {
      return NextResponse.json({ message: "Invalid creds", errors: true }, { status: 400 });
    }

    //Check any orgs the user is a part of
    const [OrgUsers] = (await (
      await connection
    ).execute("SELECT id, establishmentId, establishmentName, role FROM OrgUser WHERE userId = ?", [userRows[0].id])) as any;

    //create session data
    const sessionToken = uuid();
    const data = JSON.stringify({
      userId: userRows[0].id,
      establishmentId: OrgUsers.length === 1 ? OrgUsers[0].establishmentId : null,
      establishmentName: OrgUsers.length === 1 ? OrgUsers[0].establishmentName : null,
      role: OrgUsers.length === 1 ? OrgUsers[0].role : null,
      email: email,
      firstName: userRows[0].firstName,
      lastName: userRows[0].lastName,
    });
    const date = new Date() as any;

    //Set session in db TODO: replace with redis
    await (
      await connection
    ).execute("INSERT INTO SessionStorage (token, userId, data, updatedAt) VALUES (?, ?, ?, ?)", [sessionToken, userRows[0].id, data, date]);

    //set session cookie
    cookies().set("session", sessionToken, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: "lax",
      secure: false,
      // domain: ".mosque.icu",
    });

    if (OrgUsers.length !== 0) {
      addServerCacheValue(OrgUsers, "orgs" + userRows[0].id);
      delete OrgUsers[0].establishmentId;
    }

    return NextResponse.json({
      email: email,
      id: userRows[0].id,
      firstName: userRows[0].firstName,
      lastName: userRows[0].lastName,
      orgs: OrgUsers,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "There was an error", errors: true }, { status: 500 });
  }
};
