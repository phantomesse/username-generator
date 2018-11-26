'use strict';

const fs = require('fs');
const path = require('path');

const _dataDirectoryPath = '../data/';
const _adjectivesFilePath = 'adjectives.txt';
const _animalsFilePath = 'animals.txt';

// Library class for generating usernames.
//
// Usernames are each a concatenation of an adjective and an animal.
// e.g. "trashy-panda", "cuddly-turkey"
class UsernameGenerator {
  constructor() {
    this._adjectives = UsernameGenerator._getWords(_adjectivesFilePath);
    this._animals = UsernameGenerator._getWords(_animalsFilePath);
  }

  // Returns one random username.
  get username() {
    const adjective = UsernameGenerator._getRandomWord(this._adjectives);
    const animal = UsernameGenerator._getRandomWord(this._animals);
    return adjective + '-' + animal;
  }

  // Returns a number of unique usernames.
  getUsernames(usernameCount) {
    const usernames = new Set();

    while (usernames.size < usernameCount) {
      usernames.add(this.username);
    }

    return Array.from(usernames);
  }

  static _getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  static _getWords(fileName) {
    const filePath = UsernameGenerator._getFilePath(fileName);
    const contents = fs.readFileSync(filePath, 'utf8');
    return contents.split('\n');
  }

  static _getFilePath(fileName) {
    return path.join(__dirname, _dataDirectoryPath + fileName);
  }
}

module.exports = new UsernameGenerator();
