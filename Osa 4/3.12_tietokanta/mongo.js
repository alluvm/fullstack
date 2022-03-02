const mongoose = require('mongoose')

if(process.argv.length < 3 || process.argv.length > 5 ) {
    console.log('Check argument length')
    process.exit(1)
}

const pass = process.argv[2]
const url = 
`mongodb+srv://fullstack:${pass}@cluster0.hatul.mongodb.net/testeri?retryWrites=true&w=majority`

mongoose
.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
.catch(err => console.log(err))

const schema = new mongoose.Schema({
    name: String,
    phone: String,
})

const Person = mongoose.model("Person", schema)

if(process.argv[3] && process.argv[4]) {
    const name = process.argv[3]
    const phone = process.argv[4]

    const person = new Person(
        {
            name: name, 
            phone: phone
        })

    person.save().then(resp => {
        console.log(`added ${name} to the phonebook`)
        mongoose.connection.close()
    }).catch(err => console.log(err))
} else {
    Person.find({}).then(res => {
        res.forEach(person => {console.log(person)})
        mongoose.connection.close()
    })
}
