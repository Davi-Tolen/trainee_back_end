
exports.up = function(knex) {
  return knex.schema.createTable("consultation", function(table) {
    table.string("consultation_id").primary().notNullable();
    table.string("user_id").notNullable();
    table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
    table.int("date").notNullable();
    table.string("hour").notNullable();
    table.string("doctor_id").notNullable();
    table.foreign("doctor_id").references("doctor_id").inTable("doctor").onDelete("cascade");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("consultation");
};
