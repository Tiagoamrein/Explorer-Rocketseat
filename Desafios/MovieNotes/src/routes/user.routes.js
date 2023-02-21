const {Router, response} = require("express")

const usersController = require("../controllers/UsersController")
const usersRoutes = Router()

const UserAvatarController = require("../controllers/UserAvatarController")
const uploadConfig = require("../configs/upload")
const multer = require("multer");
const ensureAuthenticated = require("../middleware/ensureAuthenticated")


const upload = multer(uploadConfig.MULTER)
const userAvatarController = new UserAvatarController()
const UsersController = new usersController()

usersRoutes.post("/", UsersController.create)
usersRoutes.put("/",ensureAuthenticated, UsersController.update)
usersRoutes.delete("/:id", UsersController.delete)
usersRoutes.patch("/avatar",  upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes
