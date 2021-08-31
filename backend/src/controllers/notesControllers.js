const notesCtrl = {};
const Note = require('../models/Note');

//Obtiene las notas desde la bd y las envía al front
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();//devuelve las notas que esta en la base de datos y las devolvera al front.
    res.json (notes);//como ya es un arreglo lo envio en formato json.
};

//Crea las notas
notesCtrl.createNote = async (req, res) => {
    const { title, content, author, date } = req.body;//toma del cuerpo de la petición los items
    const newNote = new Note({
        title,
        content,
        author,
        date
    })// y que cree una nueva nota con los datos que recibe del cuerpo
    await newNote.save()//salva la note, es un método de moongoose para hacer consultasa la mongodb
    res.json({ message: 'Note Created' })
};

//Obtiene la nota
notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);//query que obtiene el parametro id desde la url y lo busca en la bd
    res.json(note);
};

//Actualiza la nota
notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body//desde el bodu quiero extraer los sgts datos.
    await Note.findOneAndUpdate(req.params.id, {//query que actuliza los datos de ese id
        title,
        content,
        author
    })//Se pone así, para que sea menos verboso ya que
    res.json({ message: 'Note Update' })
};

//Borra la nota
notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)//query que borra la nota con el id obtenido desde los parametros
    res.json({ message: 'Note Deleted' })
};

module.exports = notesCtrl;
