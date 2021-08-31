const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true //crea un estampado de la fecha en la que se manipula o crea.
})

//crea una colección llamada Note con el esquema definido en note
module.exports = model ('Note', noteSchema)