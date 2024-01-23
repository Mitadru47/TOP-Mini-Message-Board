const messages = [
    
    {
      text: "Hi there!",
      user: "Amando",

      added: new Date()
    },

    {
      text: "Hello World!",
      user: "Charles",

      added: new Date()
    }
 ];

const express = require("express");
const router = express.Router();

router.get("/", function (req, res){
    
    // res.write("This is Express");

    res.render('index', { title: "Mini Messageboard", messages: messages });
    res.end();
});

module.exports = router;