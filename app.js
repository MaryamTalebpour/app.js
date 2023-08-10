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

const indexValue = cartItems.findIndex( function(item, index){
    return item.title === 'book3'
})

console.log(indexValue)