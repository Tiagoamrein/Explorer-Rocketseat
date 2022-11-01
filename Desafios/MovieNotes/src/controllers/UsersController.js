const knex = require('../database')
const pkg = require('bcryptjs')
const { hash, compare } = pkg;
const AppError = require('../utils/AppError')
class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const userExists = await knex("users").where({ email }).first();

    if (userExists) {
      throw new  AppError("E-mail já cadastrado!");
      
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    });

    response.status(201).json();
  }
async update (request, response){
  const {name, email, password, old_password} = request.body
  const user_id = request.user.id

  const user = await knex.select('users', user_id)

  if(!user){
    throw new AppError
  }


}
 
}
module.exports = UsersController;