//Create a new application

import { getSession } from "@/app/_helpers/api/helpers";
import { deleteFromServerCache } from "@/app/_helpers/api/servercache";
import { NextResponse } from "next/server";
import { uuid } from "uuidv4";
import mysql from "mysql2/promise";

//@ts-expect-error
const conn = mysql.createConnection(process.env.DATABASE_URL);

export const POST = async (req: Request, res: Response) => {
  try {
    const session = await getSession(conn);
    if (!session) return NextResponse.json({ message: "unauthorised", errors: true }, { status: 401 });
    deleteFromServerCache("applications" + session.userId);

    const { name, type, geoString, zip } = await req.json();

    const establishmentId = uuid();
    try {
      await (await conn).query("START TRANSACTION");

      //Create new establishment
      await (
        await conn
      ).query("INSERT INTO Establishment (userId, name, type, geoString, zip, publicId,id) VALUES (?, ?, ?, ?, ?, ?, ?)", [
        session.userId,
        name,
        type,
        geoString,
        zip,
        name + "_" + zip,
        establishmentId,
      ]);

      //Create new orgUser
      await (
        await conn
      ).query("INSERT INTO OrgUser (userId, establishmentName, establishmentId, role) VALUES (?, ?, ?, ?)", [session.userId, name, establishmentId, "owner"]);

      await (await conn).query("COMMIT");
    } catch (err) {
      await (await conn).query("ROLLBACK");
      throw err;
    }

    deleteFromServerCache("applications" + session.userId);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    //check if unique constraint was violated mysql
    if (err.code === "ER_DUP_ENTRY") {
      return NextResponse.json({ message: "Establishment name is already taken", errors: true }, { status: 400 });
    }

    console.log(err);
    return NextResponse.json({ message: "There was an error", errors: true }, { status: 500 });
  }
};
