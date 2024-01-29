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

router.post("/new", function (req, res){

  const author = req.body.authorName;
  const message = req.body.messageText;

  messages.push({ text: message, user: author, added: new Date()});  
  res.redirect("/");
});

module.exports = router;