const {Router} = require("express")
const usersController = require("../controllers/UsersController")
const usersRoutes = Router()




const UsersController = new usersController()

usersRoutes.post("/", UsersController.create)
usersRoutes.put("/:id", UsersController.update)
usersRoutes.delete("/:id", UsersController.delete)


module.exports = usersRoutes
