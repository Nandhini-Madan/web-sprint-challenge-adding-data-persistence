
exports.up = async function(knex) {
  await knex.schema.createTable("project",(table)=>{
      table.increments("id")
      table.text("name").notNull().unique()
      table.text("description")
      table.text("completed").defaultTo("false")
  })

  await knex.schema.createTable("resource",(table)=>{
    table.increments("id")
    table.text("name").notNull().unique()
    table.text("description")
  })

  await knex.schema.createTable("tasks",(table)=>{
    table.increments("id")
    table.text("description")
    table.text("completed").defaultTo("false")
    table
          .integer("project_id")
          .references("id")
          .inTable("project")
          .onDelete("SET NULL")
          .onUpdate("CASCADE")    

  })
  await knex.schema.createTable("projectDetails",(table)=>{
  //  table.increments("id")
    table.text("resourceDetails")
    table
          .integer("project_id")
          .references("id")
          .inTable("project")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
    table
          .integer("resource_id")
          .references("id")
          .inTable("resource")
          .onDelete("SET NULL")
          .onUpdate("CASCADE")

    table.primary(["project_id","resource_id"])
  })


};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project")
  await knex.schema.dropTableIfExists("resource")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("projectDetails")
};
