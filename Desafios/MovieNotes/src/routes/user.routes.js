const {Router, response} = require("express")

const usersController = require("../controllers/UsersController")
const usersRoutes = Router()

const uploadConfig = require("../configs/upload")
const multer = require("multer");
const ensureAuthenticated = require("../middleware/ensureAuthenticated")


const upload = multer(uploadConfig.MULTER)
const UsersController = new usersController()

usersRoutes.post("/", UsersController.create)
usersRoutes.put("/:id",ensureAuthenticated, UsersController.update)
usersRoutes.delete("/:id", UsersController.delete)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (req, res) => {
  response.json()
})

module.exports = usersRoutes
