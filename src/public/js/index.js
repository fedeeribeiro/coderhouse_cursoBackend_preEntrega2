// const socketClient = io();

// const productsContainer = document.getElementById('real-time-products-list');
// const addProductForm = document.getElementById('add-product-form');
// const deleteProductForm = document.getElementById('delete-product-form');

// const addProduct = async (formDataObj) => {
//     return await fetch('/api/products', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json; charset=UTF-8'},
//             body: JSON.stringify(formDataObj)
//         })
//     .then(response => response.json())
// }

// addProductForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const formData = new FormData(addProductForm);
//     formData.append('status', true)
//     const formDataObj = {};
//     for (const pair of formData) {
//         formDataObj[pair[0]] = pair[1]
//     }
//     await addProduct(formDataObj)
//     socketClient.emit('updateProducts')
// });

// deleteProductForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(deleteProductForm);
//     const productId = formData.get('id');

//     fetch(`/api/products/${productId.toString()}`, {
//         method: 'DELETE',
//     })
//     .then(response => response.json())
//     socketClient.emit('updateProducts')
// });

// socketClient.on('fetchProducts', () => {
//     fetch('/api/products', {
//         method: 'GET'
//     })
//     .then(response => response.json())
//     .then(products => {
//         let productList = products.map(product => {
//             return `<p>ID: ${product.id} - TITLE: ${product.title} - DESCRIPTION: ${product.description} - PRICE: ${product.price} - STATUS: ${product.status} - CODE: ${product.code} - STOCK: ${product.stock}</p>`
//         }).join(' ');
//         productsContainer.innerHTML = productList;
//     })
// })