document.querySelector('#Add-product').addEventListener('submit', function(e){
   e.preventDefault()
   console.log(e.target.elements.product.value)
   e.target.elements.product.value = ''
})