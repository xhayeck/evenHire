var pg = require('pg');
var connectStr = process.env.DATABASE_URL || 'postgres://rlwkbkrcdmqqee:y6KjHbwAdp-nTnDtPy1JJYaJ_5@ec2-54-227-250-148.compute-1.amazonaws.com:5432/d52ojdh8d3rv76';

pg.defaults.ssl = true;
pg.connect(connectStr, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});
