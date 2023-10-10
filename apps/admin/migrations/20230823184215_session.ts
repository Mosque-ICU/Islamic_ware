import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("SessionStorage", (table) => {
    table.string("token", 100).notNullable().primary();
    table.json("data").notNullable();
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
  return knex.schema.dropTable("SessionStorage");
}
