const router = require('express').Router();
// const { getNotes, saveNote, deleteNote, renderActiveNote,handleNoteSave, handleNoteDelete, handleNoteView, handleNewNoteView, handleRenderSaveBtn, renderNoteList, createLi,  getAndRenderNotes } = require('../../public/assets/js/index')
const  notes  = require('../../db/db.json')
const fs = require('fs')


router.get('/api/notes', (req, res) => {
 
    fs.readFile('../../db/db.json', "utf8", function(err, results){
      console.log(results)
    })
  });

  router.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { title, text, id } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id
       
      };
  
      readAndAppend(newNote, '../../db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });


  module.exports = router;