console.log('Starting app.js');

const fs    = require('fs');
const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Yargs: ' + argv);

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log("Note was created");
  }else{
    console.log("Title is already in use");
  }
}else if (command === 'list'){
  notes.getAll();
}else if (command === 'read'){
  var note = notes.getNote(argv.title);
  var message = note ? note.body : 'Note doesnt exist';
  console.log(message);
}else if (command === 'remove'){
  var success = notes.removeNote(argv.title);
  var message = success ? 'Note was removed' : 'Note doesnt exist';
  console.log(message);
}else{
  console.log('Command not recognized');
}
