const { Router } = require('express');
const router = Router();
const { getNotes, createNote, getNote, updateNote, deleteNote } = require ('../controllers/notesControllers')

router.route('/')
    .get(getNotes)
    .get(createNote)
    

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;