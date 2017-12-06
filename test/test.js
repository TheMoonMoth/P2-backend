const assert = require('assert')
const funk = require('../app.js')

const students = require('../data/students.js')
const teachers = require('../data/teachers.js')

describe("#findGrade", function(){
  it('takes a teacher name and prints array of their grade levels', function(){
    assert.deepEqual(funk.findGrade("Billy Burch"), (["2", "3"]))
  })
})

describe('#findTeacher', function(){
  it("takes a grade level and prints that grade's teacher", function(){
    assert.equal(funk.findTeacher(6), ("Roxanne"))
  })
})

describe("#findStudentsFromGrade", function(){
  it("takes a grade level and returns all students in that grade", function(){
    assert.deepEqual(funk.findStudentsFromGrade(8),
      [{
        name: "Damn Daniel"
      },{
        name: "Edger Ebert"
      },{
        name: "Frank Froink"
      }]
    )
  })
})
