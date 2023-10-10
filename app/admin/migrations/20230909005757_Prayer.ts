import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("Prayer", (table) => {
    table.increments("id").primary();
    table.string("title", 90).notNullable();
    table.string("description", 150).notNullable();
    table.string("establishmentId", 100).notNullable().index();
    table.json("timesData");
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
  return knex.schema.dropTable("Prayer");
}
