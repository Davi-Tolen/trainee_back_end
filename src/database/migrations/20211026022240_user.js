
exports.up = function(knex) {
  return knex.schema.createTable("user", function(table) {
    table.string("user_id").primary().notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.int("phone").notNullable();
    table.string("adress").notNullable();
    table.int("birthdate").notNullable();
    table.string("password").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
