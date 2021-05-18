// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');
const router = require('express').Router();
const fs = require("fs");
const noteList = JSON.parse(fs.readFileSync("db/db.json"));
// ROUTING

// module.exports = (app) => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content


  // joining router to index html
  router.get("/", (req, res) => 
  res.sendFile(path.join(__dirname, "../public/index.html")));


  //joining router to notes html
  router.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/notes.html')));


// }

module.exports = router; 