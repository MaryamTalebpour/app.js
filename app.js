let course = {
  name : 'advanced js',
  studentLimit : 30,
  studentCount :0,
  checkAvailability : function(courseSize)  {
    console.log(this.name)
    return true
  }
}

//course.checkAvailability(30)

let status = course.checkAvailability(30)

console.log(status)
