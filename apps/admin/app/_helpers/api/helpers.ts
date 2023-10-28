import "server-only";

import { Knex } from "knex";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const getSession = async (connection: any) => {
  const sessionCookie = cookies().get("session");
  if (!sessionCookie) return null;

  const [rows] = (await (await connection).execute("SELECT data, userId FROM SessionStorage WHERE token = ?", [sessionCookie.value])) as any;

  if (!rows || rows.length === 0) return null;

  const data = typeof rows[0].data === "string" ? JSON.parse(rows[0].data) : rows[0].data;
  return { ...data, userId: rows[0].userId };
};

export const CheckErrors = async (body: any, schema: any, session?: any, db?: Knex) => {
  if (!body) {
    // Error(res, "Invalid Request", "400");
    return "Invalid Request";
  }
  for (const [key, value] of Object.entries(schema)) {
    //@ts-ignore
    for (const option of value.split("|")) {
      if (option === "required" && !body.hasOwnProperty(key)) {
        // Ckecks if the value was passed in the bod
        return `${key} is required`;
      } else if (body.hasOwnProperty(key)) {
        if (option.startsWith("max") && (typeof body[key] === "number" ? body[key] : body[key].length) > parseInt(option.split(":")[1])) {
          // Checks if the value is less than the max length
          return `${key} is too long`;
        } else if (option.startsWith("min") && (typeof body[key] === "number" ? body[key] : body[key].length) < parseInt(option.split(":")[1])) {
          // Checks if the value is more than the min length
          return `${key} is too short`;
        } else if (option === "email" && !body[key].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
          // Checks if the value is a valid email
          return `${key} is not a valid email`;
        } else if (option.startsWith("type") && typeof body[key] !== option.split(":")[1]) {
          // Checks if the value is a string type
          return `${key} is not a valid ${option.split(":")[1]}`;
        } else if (option === "phone" && !body[key].match(/^[0-9]+$/g)) {
          // Checks if the value is a valid phone number
          return `${key} is not a valid phone number`;
        } else if (option === "url" && !body[key].match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/g)) {
          // Checks if the value is a valid url
          return `${key} is not a valid url`;
          return `${key} is not a valid url`;
        } else if (option.startsWith("regex") && !body[key].match(new RegExp(option.split(":")[1]))) {
          // Checks if the value matches the regex
          NextResponse.json({ message: `${key} is not valid` }, { status: 400 });
          return false;
        } else if (option.startsWith("unique") && session && db) {
          // Checks if the value is unique, the unique option must be passed with the table name and will only be unique to the specific org, hence the org_id in the where clause
          const values = option.split(":");
          const result = await db(values[1])
            .where({ [key]: body[key], org_id: session.orgId })
            .first();
          if (result) {
            return `${key} is already taken`;
          } else {
            continue;
          }
        }
      } else {
        return null;
      }
    }
  }
  return null;
};
