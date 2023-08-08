let course = {
  name : 'advanced js',
  studentLimit : 30,
  studentCount : 0,
  checkAvailability : function(courseSize) {
    let leftCount = this.studentLimit - this.studentCount
    return courseSize <= leftCount
  }
}

let status = course.checkAvailability(30)
console.log(status)