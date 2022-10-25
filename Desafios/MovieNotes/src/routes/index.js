const {Router} = require("express")

const usersRoutes =  require("./user.routes")

const routes = Router()
routes.use("/",usersRoutes)
routes.use("/movies",usersRoutes)



module.exports = routes