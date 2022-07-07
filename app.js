const express = require("express");
const app = express();
const router = express.Router();
constollerUser = require('./controller/controller')
const MySql = require ('./config/config')

//**Les route**//
app.use("/",constollerUser); 
  
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
