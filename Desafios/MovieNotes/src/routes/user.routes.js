const {Router} = require("express")
const usersController = require("../controllers/UsersController")
const usersRoutes = Router()




const UsersController = new usersController()

usersRoutes.post("/movies", UsersController.create)

module.exports = usersRoutes
