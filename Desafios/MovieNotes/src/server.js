require ("express-async-errors")
const express = require ("express")
const routes = require("./routes")
const AppError = require("./utils/AppError")
const bodyParser = require('body-parser')
const uploadConfig = require("./configs/upload");
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(routes)




app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));



app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json ({
      status: "error",
      message: error.message
    })

  }
  console.log(error)
  return response.status(500).json({
    status: "error",
    message: "Voce estragou tudo"
  })
})

const PORT = process.env.PORT || 3000;


app.listen (PORT ,() => console.log (`servir is runnig on PORT ${PORT}`))