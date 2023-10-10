import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("GlobalSetting", (table) => {
    table.increments("id").primary();
    table.string("establishmentId", 50).index();
    table.json("articles");
    table.json("prayerTimes");
    table.json("events");
    table.json("charitableCauses");
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
  return knex.schema.dropTable("GlobalSetting");
}
