const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport")
const session = require("session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require('method-override');
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("")


//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, for now...💋");
  });
  