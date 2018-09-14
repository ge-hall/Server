exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("login", table => {
      table.uuid("id").unique();
      table.string("username");
      table.string("passwordHash");
      table.string("passwordSalt");

      //Username, password salt and hash, and any 3rd-party auth tokens
      //Name, email address, phone, avatar, Twitter handle
    }),
    knex.schema.createTable("user", table => {
      table.string("firstName");
      table.string("lastName");
      table.string("email");
      table.string("mobile");
    }),
    knex.schema.createTable("membership", table => {
        table.string("firstName");
        table.string("lastName");
        table.string("email");
        table.string("mobile");
      }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("login"),
    knex.schema.dropTable("user"),
    knex.schema.dropTable("membership")

    ]);
};
