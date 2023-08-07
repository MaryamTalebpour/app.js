let userInfo = {
  userId : 10,
  userName : 'Maryam Talebpour',
  role : 'Admin'
}

console.log(`user role is: ${userInfo.role}`)


let userInfoOne = {
  userId : 20,
  userName : 'Maryam Talebpour',
  role : 'admin'
}

let userInfoTwo = {
  userId : 10,
  userName : 'Hamed Talebpour',
  role : 'User'
}

let fechUserData = function(user) {
  console.log(`Username is: ${user.userName}`)
}

fechUserData(userInfoOne)