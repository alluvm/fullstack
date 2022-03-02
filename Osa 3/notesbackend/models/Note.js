const mongoose = require("mongoose")
console.log(process.env.PORT)
const url = 'mongodb+srv://fullstack:1234@cluster0.hatul.mongodb.net/testeri?retryWrites=true&w=majority'

console.log("connecting to", url)

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> {
    console.log("Connected to MongoDB")
})
.catch(err =>{
    console.log("error connecting to MongoDB", err.message)
})

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

noteSchema.set("toJson", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v
    }
})

module.exports = mongoose.model("Note", noteSchema)