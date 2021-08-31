const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
}, {
    timestamps: true //crea un estampado de la fecha en la que se manipula o crea.
})

module.exports = model('User', userSchema)