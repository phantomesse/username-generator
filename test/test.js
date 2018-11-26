'use strict';

const fs = require('fs');
const assert = require('assert');
const usernameGenerator = require('../app/username-generator.js');

describe('UsernameGenerator tests', function() {
  const _adjectives = _getWords('adjectives.txt');
  const _animals = _getWords('animals.txt');

  it('#username returns a random username', function() {
    _assertUsername(usernameGenerator.username);
  });

  it('#getUsernames returns the correct number of usernames', function() {
    const usernameCount = 5;
    const usernames = usernameGenerator.getUsernames(usernameCount);

    assert.equal(usernames.length, usernameCount);
  });

  it('#getUsernames follows the username convention', function() {
    const usernameCount = 3;
    const usernames = usernameGenerator.getUsernames(usernameCount);

    for (const username of usernames) {
      _assertUsername(username);
    }
  });

  it('#getUsernames returns all unique usernames', function() {
    const usernameCount = 10;
    const usernames = usernameGenerator.getUsernames(usernameCount);

    assert.equal(new Set(usernames).size, usernameCount);
  });

  function _assertUsername(username) {
    assert(username.includes('-'));

    const usernameParts = username.split('-');
    const adjective = usernameParts[0];
    const animal = usernameParts[1];

    assert(_adjectives.includes(adjective));
    assert(_animals.includes(animal));
  }
});

function _getWords(fileName) {
  return fs.readFileSync(`data/${fileName}`, 'utf8').split('\n');
}
