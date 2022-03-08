const fs = require("fs");
// const { stringify } = require("querystring");
// const { create } = require("yallist");
const [command, title, content] = process.argv.slice(2);
// console.log("hello");
switch (command) {
  case "list":
    list();
    break;
  case "view":
    view(title);
    break;
  case "create":
    create(title, content);
    break;
  case "remove":
    remove(title);
    break;
  default:
    console.log("Unknown command");
}

function init() {
  fs.writeFile("notes.json", "[]", (error) => {
    if (error) return console.error(error.message);
  });
}

function create(title, content) {
  fs.access("notes.json", fs.constants.F_OK, (err) => {
    if (err) init();

    fs.readFile("notes.json", (error, data) => {
      if (error) return console.error(error.message);
      const notes = JSON.parse(data);
      notes.push({ title, content });
      const json = JSON.stringify(notes);

      fs.writeFile("notes.json", json, (error) => {
        if (error) return console.error(error.message);
        console.log("New comment done");
      });
    });
  });
}

function list() {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.forEach((note, index) => console.log(`${index + 1} ${note.title}`));
  });
}

function view(title) {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    const note = notes.find((note) => note.title === title);
    if (!note) {
      console.log("Comment not find!");
    } else {
      console.log(note.content);
    }
  });
}

function remove(title) {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    let notes = JSON.parse(data);
    notes = notes.filter((note) => note.title !== title);
    const json = JSON.stringify(notes);
    fs.writeFile("notes.json", json, (error) => {
      if (error) return console.error(error.message);
      console.log("Comment was deleted");
    });
  });
}
