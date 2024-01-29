const express = require("express");
const router = express.Router();

router.get("/", function (req, res){

    res.render("form", { title: "Mini Messageboard", heading: "Add New Message:" });
    res.end();
});

module.exports = router;