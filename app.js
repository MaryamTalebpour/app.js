const numbers = [ 9, 10, 4, 22, 15]

const filteredNumber = numbers.filter(function(item){
    return item >= 10
})

console.log(filteredNumber)


const productItems =[ {
    title :'book1',
     exist : true
} , {
    title :'book2',
    exist : false
} , {
    title :'book3',
    exist : true
} , {
    title :'book4',
    exist : false
}]

const productNotExist = function(product){
    return product.filter(function(item){
        //return item.exist === false
        return !item.exist  
    })
}

let result = productNotExist(productItems)

console.log(result)