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
  return readNotes();
};

var getNote = (title) => {
  var allNotes = readNotes();
  var note = allNotes.filter((note) => note.title === title)[0];
  return note;
};

var removeNote = (title) => {
  var allNotes = readNotes();
  var newNotes = allNotes.filter((note) => note.title !== title);
  saveNotes(newNotes);
  return allNotes.length > newNotes.length
};

var logNote = (note) => {
  console.log("---------------------------------");
  console.log("Note: " + note.title);
  console.log(note.body);
  console.log("---------------------------------");
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
