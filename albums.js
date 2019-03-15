'use strict';

const fs = require('fs');

const file = fs.readFileSync('./songs.csv', 'utf-8');
const lines = file.split('\n');

const albums = new Set();

lines.forEach(function(line) {
  const re = /(?<song>.+)\|(?<artist>.+)\|(?<album>.+)/;
  const result = re.exec(line);

  if (!result) {
    console.warn(line);
    return;
  }

  const {artist, album} = result.groups;

  albums.add(`${album} - ${artist}`);
});

console.log(Array.from(albums).sort());
console.log(albums.size);
