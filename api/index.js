const server = require('./src/app.js');
const conn = require('./src/db.js');

// Syncing all the models at once.
conn.once('open', () => {
  console.log('Database is connected to localhost:27017');
  server.listen(3001, () => {
    console.log('API listening at 3001'); // eslint-disable-line no-console
  });
});
