const cartItems = ['book1', 'book2', 'book3', 'book4']

cartItems.shift()
cartItems.splice(1,1)
cartItems.push('book5')

cartItems.forEach(function(item, index){
    const num = index +1
    console.log(`${num} - product name : ${item}`)
})
