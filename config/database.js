const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      conectionString: env('DATABASE_URL')
    },
  },
});
