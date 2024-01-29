const express = require("express");
const router = express.Router();

router.get("/", function (req, res){

    res.render("form", { title: "New", heading: "Add New:" });
    res.end();
});

module.exports = router;