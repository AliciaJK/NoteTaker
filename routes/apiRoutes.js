// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const tableData = require('../db/db');
// const waitListData = require('../data/waitinglistData');

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
}


