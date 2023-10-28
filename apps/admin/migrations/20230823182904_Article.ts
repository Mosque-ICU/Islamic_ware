import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("Article", (table) => {
    table.increments("id").primary();
    table.string("title", 90).notNullable();
    table.string("description", 500);
    table.text("content", "mediumtext");
    table.string("establishmentId", 50).index();
    table.integer("userId");
    table.integer("likes").defaultTo(0);
    table.json("attachments");
    table.boolean("allowComments").defaultTo(true);
    table.boolean("showAuthor").defaultTo(true);
    table.boolean("showDate").defaultTo(true);
    table.boolean("showLikes").defaultTo(true);
    table.string("thumbnail", 500);
    table
      .timestamp("createdAt")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table
      .timestamp("updatedAt")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("deletedAt");
    table.string("commentKey", 2).defaultTo("A");
    table.json("categoryIds");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("Article");
}
