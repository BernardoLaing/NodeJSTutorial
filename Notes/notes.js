console.log('Starting notes.js');

const fs =  require('fs');

var readNotes = () => {
  try{
    var read = fs.readFileSync('notes-data.json');
    return JSON.parse(read);
  }catch (e){
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title: title,
    body: body
  };
  notes = readNotes();
  var duplicates = notes.filter((note) => note.title === title);
  if(duplicates.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
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
