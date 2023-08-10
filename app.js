for (let count = 0; count <=5; count = count +1) {
    console.log(count)
}

//count++  count= count+1

const cartItem = ['book1', 'book2' , 'book3', 'book4']

for (let count =0 ; count < cartItem.length ; count++) {
    console.log(cartItem[count])
}

const cartItems = ['book1', 'book2' , 'book3' , 'book4']

for (let count = 0; count < cartItems.length; count++){
    const num = count +1
    const productName = cartItems[count]
    console.log(`${num} - product Name : ${productName}`)
}