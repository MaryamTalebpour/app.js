let userAccount = {
  fullName :'Maryam Talebpour',
  income : 0,
  outgo :0,
}

let addIncome = function(account, income) {
  account.income = account.income + income
}

let addOutgo = function(account, amount) {
   account.outgo = account.outgo + amount
}

let getAccountData = function(account) {
  let balance = account.income - account.outgo
  return `account name: ${userAccount.fullName} - balance: ${balance} `
}

addIncome(userAccount, 2000)
addOutgo(userAccount, 300)
addOutgo(userAccount, 1400)

console.log(getAccountData(userAccount))