import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("File", (table) => {
    table.increments("id").primary();
    table.string("name", 500).notNullable();
    table.string("key", 500).notNullable();
    table.string("establishmentId", 50).index();
    table.integer("folderId").index();
    table.integer("size");
    table.string("type", 100);
    table.integer("userId").index();
    table.boolean("public").defaultTo(false);
    table
      .timestamp("createdAt")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table
      .timestamp("updatedAt")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("lastViewed");
    table.json("favouriteIds");
    table.timestamp("deletedAt");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("File");
}
