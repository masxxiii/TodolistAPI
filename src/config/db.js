//Modules
const mongoose = require("mongoose");

//Connecting database and creating our schema
mongoose.connect("mongodb://localhost:27017/listDB");

//Items schema
const newItemsSchema = {
    name: String
};

//Creating a new mongoose collection based on schema
const ItemCollection = mongoose.model("Item", newItemsSchema);

module.exports = ItemCollection;
