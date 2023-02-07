const {Router} = require("express")

const usersRoutes =  require("./user.routes")
const moviesRoutes = require("./movie.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router()
routes.use("/users",usersRoutes)
routes.use("/movies",moviesRoutes )
routes.use("/sessions", sessionsRoutes)


module.exports = routes