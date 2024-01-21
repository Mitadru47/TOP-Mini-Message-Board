const express = require("express");

const router = express.Router();

router.get("/", function (req, res){
    
    res.write("This is Express");
    res.end();
});

module.exports = router;