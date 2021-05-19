// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const notesData = require('../db/db.json');
//connecting router to express
// const router = require('express').Router();
const fs = require("fs");
const noteList = JSON.parse(fs.readFileSync("db/db.json"));




app.get('/notes', (req, res) => {
  const noteList = JSON.parse(fs.readFileSync("db/db.json"));
  return res.json(noteList);


});



// ROUTING

// module.exports = (app) => {
app.post('/api/notes', (req, res) => {
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
  router.delete('/api/notes/:id', (req, res) => {
  //finds note by id, then converts the string into a JSON object with the id parameters of the request made
  let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));
  // const noteId = parseInt(req.params.id)
  const noteList = JSON.parse(fs.readFileSync("db/db.json"));
  const newArray = noteList.filter(note => note.id !== noteId);
  
  
  noteList.splice(noteList.indexOf(findNote), 1);
  fs.writeFileSync("db/db.json", JSON.stringify(newArray));

   res.json({ok: true});
  //Delete object matching the index of the note ID

  res.end("Note was deleted");
});





// pushing to the DB-----------------------
function writeToDB(notes){
  // Converts new JSON Array back to string
  notes = JSON.stringify(notes);
  console.log (notes);
  // Writes String back to db.json
  fs.writeFileSync("./db/db.json", notes, function(err){
      if (err) {
          return console.log(err);
      }
  // });

});
}
  writeToDB(notesData);

