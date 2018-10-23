console.log('Starting notes.js');

const fs =  require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title: title,
    body: body
  };

  try{
    notes = JSON.parse(fs.readFileSync('notes-data.json'));
  }catch (e){

  }

  var duplicates = notes.filter((note) => note.title === title);
  if(duplicates.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Deleting note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
