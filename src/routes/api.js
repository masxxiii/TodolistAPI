//Modules
const Todo = require('../controllers/ToDo');
const express = require("express");
const router = express.Router();

//Get request for checking the database when the website loads
router.get("/home", async function (req, res) {

    let data = await new Todo().getItems();
    res.json(data);
});

router.get("/progress", async function(req,res) {

    let count = await new Todo().getProgress();
    res.json(count);
});

//A post request for adding items
router.post("/", function(req, res) {

     new Todo().addItem(req.body.newItem);
     res.redirect("/home");
});

//A put request for updating items
router.put("/",function(req, res) {

    new Todo().updateItem(req.body.idOld,req.body.newItem);
    res.redirect("/home");
});

//A delete request for deleting items
router.delete("/", function(req, res) {

    new Todo().deleteItem(req.body.itemID);
    res.redirect("/home");
});

module.exports = router;