import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("PrayerTimesScreen", (table) => {
    table.increments("id").primary();
    table.string("title", 90).notNullable();
    table.string("description", 150).notNullable();
    table.string("establishmentId", 100).notNullable().index();
    table.string("topMessage", 500);
    table.string("bottomMessage", 700);
    table.json("images");
    table.integer("prayerId").index();
    table.json("theme");
    table.integer("userId").notNullable().index();
    table
      .timestamp("createdAt")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table
      .timestamp("updatedAt")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("deletedAt");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("PrayerTimesScreen");
}
