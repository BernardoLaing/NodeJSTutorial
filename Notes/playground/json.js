// var obj = {
//   name: 'Bernardo'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personS = '{"name": "Bernardo", "age":21}';
// var person = JSON.parse(personS);
// console.log(typeof person);
// console.log(person);

const fs =  require('fs');

var originalNote = {
  title: 'some title',
  body: 'some body'
};

var noteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', noteString);

var readNotes = fs.readFileSync('notes.json');

var note = JSON.parse(readNotes);
console.log(typeof note);
console.log(note.title);
console.log(note.body);
