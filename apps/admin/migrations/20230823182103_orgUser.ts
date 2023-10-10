import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("OrgUser", (table) => {
    table.increments("id").primary();
    table.integer("userId").notNullable().index();
    table.string("establishmentName", 150);
    table.string("establishmentId", 100).notNullable();
    table.string("role", 20).notNullable();
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
  return knex.schema.dropTable("OrgUser");
}
