const cartItems =[ {
    title :'book1',
     price : 20
} , {
    title :'book2',
    price :30
} , {
    title :'book3',
    price : 40
} , {
    title :'book4',
    price :50
}]

const findProduct = function(cart, productTitle) {
    return cart.find(function(item,index){
        return item.title.toLowerCase() === productTitle.toLowerCase()
    })
}

const result = findProduct(cartItems, 'book3')

console.log(result)