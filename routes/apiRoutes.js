// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

// const notesData = require('../db/db.json');
//connecting router to express
const router = require('express').Router();
const fs = require("fs");
// const noteList = JSON.parse(fs.readFileSync("./db/db.json"));


// // pushing to the DB-----------------------
// function writeToDB(notes){

//   notes = JSON.stringify(notes);
//   console.log (notes);

//   fs.writeFileSync("./db/db.json", notes, function(err){
//       if (err) {
//           return console.log(err);
//       }
//   // });
//   writeToDB(notesData);
// });

// }
 


//get notes list 

// router.get('/api/notes', (req, res) => {
//   res.noteList = JSON.parse(fs.readFileSync("./db/db.json"));
//   return res.json(noteList);
// });
router.get('/api/notes', (req, res) => {
  const noteList = JSON.parse(fs.readFileSync("db/db.json"));
  return res.json(noteList);
});


// ROUTING

// module.exports = (app) => {
router.post('/api/notes', (req, res) => {
  // res.json(tableData));
  const noteList = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNote = {
    id: noteList[noteList.length - 1].id + 1,
    title: req.body.title,
    text: req.body.text,
  };

  console.log(newNote);
  noteList.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(noteList));

  return res.json(noteList);
});


// module.exports = router;
router.delete('/api/notes/:id', (req, res) => {
  console.log(req.params)
  const noteId = parseInt(req.params.id)
  const noteList = JSON.parse(fs.readFileSync("./db/db.json"));
  const newArray = noteList.filter(note => note.id !== noteId);

  fs.writeFileSync("./db/db.json", JSON.stringify(newArray));
// console.log(newArray);
   res.json(newArray);
});
//exports the  crud actions to the server 
module.exports = router;


