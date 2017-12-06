const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//FILES
const studentsList = require('./data/students.js')
const teachers = require('./data/teachers.js').teachers

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
    case "K":
      return studentsList.kinders
      break
    case "1":
      console.log("1");
      return studentsList.firsters
      break
    case "2":
      return studentsList.seconders
      break
    case "3":
      return studentsList.thirders
      break
    case "4":
      return studentsList.fourthers
      break
    case "5":
      return studentsList.fifthers
      break
    case "6":
      return studentsList.sixers
      break
    case "7":
      return studentsList.seveners
      break
    case "8":
      return studentsList.eighters
    default:
      console.log("switch is working")
  }
}

//SERVER CODE
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



//EXPORTS
module.exports = {
  findGrade,
  findTeacher,
  findStudentsFromGrade
}
