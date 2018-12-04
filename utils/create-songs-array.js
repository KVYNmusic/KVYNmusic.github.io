/*
  This script takes a filename (located in ./export/file-name.json) which is the export of the all the songs, and maps it to an array with only relevant items to a file 'songs-array-export.json'. This array can then be selectively included into the final '_data/songs_array.json' from where it's left off.
*/

var fs = require('fs');
var util = require('util');

var rawArg = process.argv[2];
var rawFile = fs.readFileSync('./export/'+rawArg, 'utf8');//assume file name is located in /export
var jsonData = JSON.parse(rawFile); //If you get errors parsing, make sure the JSON doesn't end with an ';'

var songs = jsonData.songs;

var arr = [];

for(var id in songs){
  var cur = songs[id];
  var ret = {
    "artist": cur.artist,
    "title": cur.title,
    "tags": cur.tags.replace("christmas","holiday") //The tag on the website is 'holiday'
  }
  arr.push(ret);
}

var file = fs.createWriteStream(__dirname + '/songs-array-export.json');
file.write(JSON.stringify(arr, null, 2));

file.end();
