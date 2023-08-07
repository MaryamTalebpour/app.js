let validEmail = true
let validPassword = false

if (validEmail && validPassword) {
    console.log('logged in')
} else if (validEmail || validPassword) {
    console.log('is correct')
}

let isUser = false
let roleUser = 'Admin'

if (isUser) {
    console.log('welcome User')
} else if (roleUser === 'Admin') {
    console.log('welcome admin')
} else {
    console.log('welcome')
}