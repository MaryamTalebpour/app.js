
let getUserInfo = function(name, id) {
  let res = `name: ${name} - id: ${id}` 
  return res
}

let showResult = getUserInfo('Maryam' , 30)

console.log(showResult)