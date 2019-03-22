"use strict";

//routes is the filename where you write your app.method...endpoints
const routes = require('./routes');
const port = 3000;

routes.listen(port, () => {
  console.log('Server running on port %d', port);
});