import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("Site", (table) => {
    table.increments("id").primary();
    table.string("label", 90).notNullable().unique().index();
    table.string("domain", 255).unique().index();
    table.string("description", 500);
    table.string("establishmentId", 50).index();
    table.string("establishmentPublicId", 100);
    table.string("thumbnail", 500);
    table.integer("userId");
    table.json("permissions");
    table.json("adminIds");
    table.json("siteData");
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
  return knex.schema.dropTable("Site");
}
