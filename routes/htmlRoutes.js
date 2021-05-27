// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');
const router = require('express').Router();
const fs = require("fs");

// ROUTING
  // joining router to index html
  router.get("/", (req, res) => 
  res.sendFile(path.join(__dirname, "../public/index.html")));


  //joining router to notes html
  router.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/notes.html')));


// }

module.exports = router; 