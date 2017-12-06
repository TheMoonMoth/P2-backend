// const mocha = require('mocha')
// const expect = require('chai').expect
// const funk = require('../app.js')
//
// const students = require('../data/students.js')
// const teachers = require('../data/teachers.js')
//
// describe("#mashPeople", function(){
//   it('takes a teacher and a student and returns a new object with both', function(){
//     expect(funk.mashPeople(students[3][0], teachers[2]).to.deep.equal({student: "Mac Nally", teacher: "Billy Burch"}))
//   })
// })


const assert = require('assert')
const funk = require('../app.js')

describe("#test", function(){
  it("asdf", function(){
    assert.equal(funk.test(), "test")
  })
})
