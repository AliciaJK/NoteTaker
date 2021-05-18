// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const tableData = require('../db/db.json');


// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(tableData));


  app.post('/api/notes', (req, res) => {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  //delete note
  app.delete('/api/notes/:id', (req, res) => {
    //finds note by id, then converts the string into a JSON object with the id parameters of the request made
    let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));

    //Delete object matching the index of the note ID
    noteList.splice(noteList.indexOf(findNote), 1);
    res.end("Note was deleted");
});
}

