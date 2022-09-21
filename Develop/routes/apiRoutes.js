// Dependencies 

const fs = require("fs");
const router = require("express").Router();
const db = require("../db/db.json"); // path?
const uniqid = require("uniqid");

// GET API notes

router.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});


// POST API notes

router.post("/api/notes", (req, res) => {
  req.body.id = createUniqueID();
  const note = createNewNote(req.body, note);
  res.json(note);
});


// Creating a DELETE function

app.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;

  const deleteNote = notes.findIndex((note) => note.id == id);

  notes.splice(deleteNote, 1);
  return res.send();
});
