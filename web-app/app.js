const products = [{
   title : 'Node.js Design Patterns'
}, {
   title : 'you dont no js '
}, {
   title : 'Functional React'
}, {
   title: 'you dont know js'
}]

const filters = {
   searchItems : ''
}

const renderProducts = function(products, filters){
   const filterProducts = products.filter(function(item){
      return item.title.toLowerCase().includes(filters.searchItems.toLowerCase())
   })
   console.log(filterProducts)
}

renderProducts(products, filters)

document.querySelector('#search-products').addEventListener('input', function(e){
   filters.searchItems = e.target.value
   renderProducts(products, filters)
})