
exports.up = function(knex) {
  return knex.schema.createTable("accounts", tbl => {
      tbl.increments("id")
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password",128).notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("accounts");
};
