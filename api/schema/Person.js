const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name : {type: String, requried: true}
})

module.exports = mongoose.model("Person", personSchema);