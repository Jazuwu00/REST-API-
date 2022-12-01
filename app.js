const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const keepaliveController = require("./controller/keepalive");
const entryController = require("./controller/entry");
const loginController = require("./controller/login");
const fabricaController = require("./controller/fabrica");

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);
app.use(middleware.processToken);


app.use("/login", loginController); 

app.use("/keepalive", keepaliveController);
app.use("/auto", entryController); 
app.use("/fabrica", fabricaController); 


app.use(middleware.unknownEndpoint);
module.exports = app;
