const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//FILES
const studentsList = require('./data/students.js')
const teachers = require('./data/teachers.js').teachers

const logger = []


//FUNCTIONS
function findGrade(teacherName){
  for (var i = 0; i < teachers.length; i++){
    if (teacherName === teachers[i].name){
      return teachers[i].grades
    }
  }
}

function findTeacher(gradeLevel){
  for (var i = 0; i < teachers.length; i++){
    for (var k = 0; k < teachers[i].grades.length; k++){
      if (gradeLevel.toString() === teachers[i].grades[k]){
        return teachers[i].name
      }
    }
  }
}

function findStudentsFromGrade(grade){
  switch(grade.toString()){
    case "kindergarten":
      return studentsList.kinders
      break
    case "first":
      console.log("1");
      return studentsList.firsters
      break
    case "second":
      return studentsList.seconders
      break
    case "third":
      return studentsList.thirders
      break
    case "fourth":
      return studentsList.fourthers
      break
    case "fifth":
      return studentsList.fifthers
      break
    case "sixth":
      return studentsList.sixers
      break
    case "seventh":
      return studentsList.seveners
      break
    case "eighth":
      return studentsList.eighters
      break
    default:
      return "Not within scope"
      break
  }
}

function dataMash(teachers, students){
  let fullDataSet = []
  for (var i = 0; i < teachers.length; i++){
    fullDataSet.push(teachers[i])
    findGrade(teachers[i])
  }
}


//SERVER CODE
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/students', function(request, response){
  response.json(studentsList)
})

app.get('/teachers', function(request, response){
  response.json(teachers)
})

app.post('/teacherboard', function(request, response){
  let newDate = new Date()
  request.body.date = newDate
  logger.push(request.body)
  response.json({message: "Your report has been submitted"})
})

app.get('/teacherboard', function(request, response){
  response.json(logger)
})


app.listen(3000)



//EXPORTS
module.exports = {
  findGrade,
  findTeacher,
  findStudentsFromGrade
}
