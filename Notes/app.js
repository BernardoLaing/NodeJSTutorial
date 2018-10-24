const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleR = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyR = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
            .command('add', 'Add a new note', {
              title: titleR,
              body: bodyR
            })
            .command('list', 'List all notes')
            .command('read', 'Read a note', {
              title: titleR
            })
            .command('remove', 'Remove a note', {
              title: titleR
            })
            .help()
            .argv;
var command = argv._[0];

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    notes.logNote(note);
  }else{
    console.log("Title is already in use");
  }
}else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
}else if (command === 'read'){
  var note = notes.getNote(argv.title);
  if (note){
    notes.logNote(note);
  }else{
    console.log("Note not found");
  }
  console.log(message);
}else if (command === 'remove'){
  var success = notes.removeNote(argv.title);
  var message = success ? 'Note was removed' : 'Note doesnt exist';
  console.log(message);
}else{
  console.log('Command not recognized');
}
