const knex = require('../database')

class MoviesController {
  async create(request, response) {
    const { title, description,rating, tags} = request.body;
    const {user_id} = request.params;

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

  
}

module.exports = MoviesController