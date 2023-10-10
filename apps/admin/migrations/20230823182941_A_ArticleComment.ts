import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("A_ArticleComment", (table) => {
    table.increments("id").primary();
    table.string("title", 90).notNullable();
    table.string("comment", 2000).notNullable();
    table.integer("likes").defaultTo(0);
    table.integer("parentCommentId");
    table.string("establishmentId", 50);
    table.string("establishmentPublicId", 100).notNullable();
    table.integer("userId");
    table.integer("articleId").index();
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
  return knex.schema.dropTable("A_ArticleComment");
}
