// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const tableData = require('../db/db.json');
//connecting router to express
const router = require('express').Router();
const fs = require("fs");
const noteList = JSON.parse(fs.readFileSync("db/db.json"));




router.get('/notes', (req, res) => {
  const noteList = JSON.parse(fs.readFileSync("db/db.json"));
  return res.json(noteList);


});



// ROUTING

// module.exports = (app) => {
routes.post('/api/notes', (req, res) => {
  // res.json(tableData));

  const newNote = {
    id: noteList[noteList.length - 1].id + 1,
    title: req.body.title,
    text: req.body.text,
  };

  console.log(newNote);
  noteList.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(noteList));

  return res.json(noteList);
});



  //delete note-------------------------
  routes.delete('/api/notes/:id', (req, res) => {
  //finds note by id, then converts the string into a JSON object with the id parameters of the request made
  let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));

  //Delete object matching the index of the note ID
  noteList.splice(noteList.indexOf(findNote), 1);
  res.end("Note was deleted");
});


