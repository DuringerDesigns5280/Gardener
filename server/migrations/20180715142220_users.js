exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) =>{
    table.increments('id')
    table.text('name')
    table.text('description')
    table.text('careOfPlant')
    table.text('imgUrl')
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };