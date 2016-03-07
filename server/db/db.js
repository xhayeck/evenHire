//Uses dotenv to get process.env variables
require('dotenv').config();
var connectStr = process.env.DATABASE_URL;

var pg = require('pg');

pg.defaults.ssl = true;
pg.connect(connectStr, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT * FROM jobs;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});
