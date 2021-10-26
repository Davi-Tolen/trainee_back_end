
exports.up = function(knex) {
  return knex.schema.createTable("doctor", function(table) {
    table.string("doctor_id").primary().notNullable();
    table.string("name").notNullable();
    table.string("descript").notNullable();
    table.int("coust").notNullable();
  })
  

};

exports.down = function(knex) {
  return knex.schema.dropTable("doctor");
};
