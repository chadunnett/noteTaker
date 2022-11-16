const router = require('express').Router();
// const { getNotes, saveNote, deleteNote, renderActiveNote,handleNoteSave, handleNoteDelete, handleNoteView, handleNewNoteView, handleRenderSaveBtn, renderNoteList, createLi,  getAndRenderNotes } = require('../../public/assets/js/index')
const  notes  = require('../../db/db.json')
const fs = require('fs')



router.get('/notes', (req, res) => {
//  console.log(res)
//     fs.readFile('../../db/db.json', "utf8", function(err, result){
// res.json(result)
//       console.log(result)
      
//     })
return res.json(notes)

  });

  router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
    fs.readFile('/db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
         const parsedData = JSON.parse(data);
         console.log(parsedData)
        // parsedData.push(content);
        // writeToFile(notes, parsedData);
      }
    })
    // const { title, text, id } = req.body;
  
    // if (req.body) {
    //   const newNote = {
    //     title,
    //     text,
    //     id
       
    //   };
  
    //   readAndAppend(newNote, '../../db/db.json');
    //   res.json(`Note added successfully 🚀`);
    // } else {
    //   res.error('Error in adding note');
    // }
  });


  module.exports = router;