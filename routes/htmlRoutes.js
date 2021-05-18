// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');
const router = require('express').Router();
const fs = require("fs");
const noteList = JSON.parse(fs.readFileSync("db/db.json"));
// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content


  // Retrieves a note with specific id
  router.get("/notes/:id", function (req, res) {
    // display json for the notes array indices of the provided id
    res.json(notes[req.params.id]);
  });

  router.get("/notes/", function (req, res) {
    // display json for the notes array indices of the provided id
    res.json(notes[req.params.id]);
  });

  // If no matching route is found default to home
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
};
