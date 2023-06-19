/* eslint-disable no-console */
const app = require('./app');

const server = app.listen(app.get('port'), () => {
  console.log(`server is listening on port ${app.get('port')},${process.env.NODE_ENV} mode`);
});

module.exports = server;
require('./socket');
