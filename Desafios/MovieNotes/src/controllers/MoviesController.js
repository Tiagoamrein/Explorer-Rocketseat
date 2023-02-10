const knex = require('../database')

class MoviesController {
  async create(request, response) {
    const { title, description,rating, tags} = request.body;
    const user_id = request.user.id;

    const note_id = await knex("movie notes").insert({
      title,
      description,
      rating,
      user_id
    });

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex("movie tags").insert(tagsInsert);

    return response.json();

  }

  async show(request, response){
    const {id} = request.params

    const note = await knex("movie notes").where({id}).first()
    const tags = await knex("movie tags").where({id}).orderBy("name")



    return response.json({
      ...note,
        tags
    })
  }
  async delete (request, response){
    const {id} = request.params

    await knex("movie notes").where({id}).delete()

    return response.json()
  }
  async index(request, response){
    const user_id = request.user.id;

    const notes = await knex("movie notes").where({user_id}).orderBy("title")

    return response.json(notes)
  }
}

module.exports = MoviesController