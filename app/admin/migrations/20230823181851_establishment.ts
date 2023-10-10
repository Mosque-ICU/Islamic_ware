import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("Establishment", (table) => {
    table.string("id", 36).primary();
    table.string("publicId", 100).notNullable().unique();
    table.string("name", 150).notNullable().unique();
    table.integer("userId").notNullable().index();
    table.string("type", 30).notNullable();
    table.integer("dbId").defaultTo(1);
    table.string("geoString", 150);
    table.string("zip", 10);
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
  return knex.schema.dropTable("Establishment");
}
