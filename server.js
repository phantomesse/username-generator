'use strict';

const express = require('express');
const port = process.env.PORT || 1337;
const server = express();

const usernameGenerator = require('./app/username-generator.js');

server.get('/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');

  if ('count' in request.query) {
    const count = parseInt(request.query.count);

    if (isNaN(count)) {
      response.send(JSON.stringify({}));
      return;
    }

    response.send(JSON.stringify(usernameGenerator.getUsernames(count)));
    return;
  }

  response.send(JSON.stringify(usernameGenerator.username));
});

server.listen(port, function() {
  console.log(`listening on http://localhost:${port}`);
});
