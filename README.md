[![Build Status](https://travis-ci.com/phantomesse/username-generator.svg?branch=master)](https://travis-ci.com/phantomesse/username-generator)

# Username Generator
A simple API for generating usernames.

## Usage
To generate one username, do not add any url parameters:
```
https://animal-username.herokuapp.com
```

To generate multiple usernames, add the `count` url parameter:
```
https://animal-username.herokuapp.com?count=10
```

## Development
* Install all NodeJS dependencies: `npm install`
* Start local server: `npm run dev`

## Testing
* To test, run: `npm test`