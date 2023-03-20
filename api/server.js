const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let notesapp = [];

app.get('/notesapp', (req, res) => res.send(notesapp));

app.post('/notesapp', (req, res) => {
  const note = { id: nanoid(), title: req.body.title, note: req.body.note, color:req.body.color };
  notesapp.push(note);
  return res.send(note);
});

app.patch('/notesapp/:id', (req, res) => {
  const id = req.params.id;
  const {title, note, color} = req.body;
  const index = notesapp.findIndex((note) => note.id ==   id);
  if (index > -1) {
    notesapp[index].title = title;
    notesapp[index].note = note;
    notesapp[index].color = color;
    return res.send(notesapp[index]);
  }

 

  return res.send({type: false, message: 'Gönderdiğiniz id bulunamadı.'})
});

app.delete('/notesapp/:id', (req, res) => {
  const id = req.params.id;
  const index = notesapp.findIndex((note) => note.id === id);
  if (index > -1) {
    notesapp.splice(index, 1);
  }

  res.send(notesapp);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));