//Modules
const express = require("express");
const app = express();
const routes = require('./routes/api');

//The middleware for parsing and configuring
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

const PORT = process.env.port || 3000;

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT +".");
});
