let message = function() {
  console.log('Welcome')
}

message()

let Id = function(id) {
  console.log(id)
}

Id(6)

let userId = function(id) {
  let res = 'user id is :' + id
  return res
}

let showResult = userId(10)

console.log(showResult)