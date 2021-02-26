const express = require("express");
const axios = require("axios");
const sequelize = require("sequelize");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// static files and resources
app.use(express.static("public"));
// reqiure our abstracted route folders
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Start the server on the port 
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));