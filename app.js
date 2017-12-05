const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//FILES
const students = require('./data/students.js').students

const testing = [{
  testing: "one",
  one: "two one two"
}]

const app = express()
app.use(cors())

app.get('/', function(req, res){
  console.log("response is working")
  res.json(students)
})

app.get('/a', function(request, response){
  console.log("this route works too")
  response.json(testing)
})

app.get('/b', function(req, resp){
  console.log('require file route connected')
  resp.json()
})


app.listen(3000)
