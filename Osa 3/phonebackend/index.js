const http = require('http')
const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
var bodyParser = require('body-parser');

app.use(cors())
app.use(morgan('tiny'))
app.use(express.static('build'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let persons = [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
    ]
  

  const generateId = () => {
    return Math.floor(Math.random()*999999)
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
    const prm = request.params
    console.log(body)
    console.log(prm)
    if (!body.content) {
      return response.status(400).json({ 
        error: 'Name or phone is missing' 
      })
    } 
    const check = persons.find(person => person.name === body.name)
    if(check) {
      return response.status(400).json({error : "Name must be unique"})
    }
    
  
    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })

  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
  const info = () => {
    date = new Date()

    const html = `
    <div>
      <p>
        Phonebook has info for ${persons.length} people
      </p>
      <p>
       ${date.toString()}
      </p>
    </div>
  `
    return html

  } 

  app.get('/info', (req, res) => {
    res.send(info())
  })

  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
 
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)
  
    response.status(204).end()
  })
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })