// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
  });

  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../index.html'));
  // });


  // Retrieves a note with specific id
  app.get("/api/notes/:id", function (req, res) {
    // display json for the notes array indices of the provided id
    res.json(notes[req.params.id]);
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
};
