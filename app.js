const productItems =[ {
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

const deleteProduct = function(products, productItem) {
    const indexValue = products.findIndex(function(item, index){
        return item.title.toLowerCase() === productItem.toLowerCase()
    })
    if (indexValue >-1) {
        productItems.splice(indexValue, 1)
    } else {
        console.log('product not found')
    }
    }
    
    deleteProduct(productItems, 'book2')
    console.log(productItems)