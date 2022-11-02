const knex = require('../database')
const { hash, compare } = require('bcryptjs')
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
  const id = request.user.id;

  const user = await knex("users").where({ id }).first();

  if(!user){
    throw new AppError('Usuário não encontrado')
  }

  const userWithUpdatedEmail = await knex("users").where({ email }).first();
  if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
    throw new Error("E-mail já cadastrado!");
  }
  
  if (password && !old_password) {
    throw new AppError(
      'Você precisa informar a senha antiga para definir a nova senha'
    )
  }
  if (password && old_password) {
    const checkOldPassword = await compare(old_password, user.password)

    if (!checkOldPassword) {
      throw new AppError('A senha antiga não confere.')
    }

    user.password = await hash(password, 8)
  }
  await knex("users")
        .update({
          name,
          email,
          password: hashedPassword,
          updated_at: knex.fn.now(),
        })
        .where({ id });

      return response.status(201).json();
    }

}
 

module.exports = UsersController;