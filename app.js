
let getUserInfo = function(name = 'test', id = 10) {
  let res = 'name:' + name + ' ' + 'id:' +id 
  return res
}

let showResult = getUserInfo('Maryam' , 30)

console.log(showResult)