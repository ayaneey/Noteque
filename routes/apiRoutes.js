// Dependencies
const express = require("express");
const app = express();
const fs = require("fs");
const router = require("express").Router();
const db = require("../db/db.json"); // path?

// GET API notes

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db.json"));
});

// POST API notes

router.post("/notes", function (req, res) {
  uniqueId = data.length.toString();
  let newNote = req.body;
  console.log(uniqueId);
  newNote.id = uniqueId;
  data.push(newNote);

  db = fs.writeFileSync("../db.json", JSON.stringify(data), function (err) {
    if (err) throw err;
  });

  res.json(data);
});

// Creating a DELETE function

router.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  const deleteNote = notes.findIndex((note) => note.id == id);

  notes.splice(deleteNote, 1);
  return res.send();
});

module.exports = router;
