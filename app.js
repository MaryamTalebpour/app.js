let isValidPassword = function(password) {
    if (password.length > 8 && !password.includes('12345')) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('manjdowldf'))
console.log(isValidPassword('12345'))
console.log(isValidPassword('maryfj'))