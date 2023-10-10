import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("User", (table) => {
    table.increments("id").primary();
    table.string("privateId", 50).notNullable();
    table.string("email", 255).notNullable().unique().index();
    table.string("hashedPassword", 150).notNullable();
    table.string("firstName", 50);
    table.string("lastName", 50);
    table.string("resetToken", 150);
    table.string("salt", 150);
    table.dateTime("resetTokenExpiresAt");
    table.string("mobile", 14);
    table.boolean("isEmailVerified").defaultTo(false);
    table.boolean("isMobileVerified").defaultTo(false);
    table.boolean("isDisabled").defaultTo(false);
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
  return knex.schema.dropTable("User");
}
