
exports.seed = async function(knex) {
 await knex("project").truncate()
 await knex("resource").truncate()
 await knex("tasks").truncate()
};
