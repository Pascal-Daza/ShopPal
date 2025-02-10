
products = [
            {
            image:'static/photos/products/product1.jpg',
            date: 'Posted on: February 5, 2025',
            price: 299900*100
        },
        {
            image:'static/photos/products/product2.jpg',
            date: 'Posted on: February 6, 2025',
            price: 399904*100
        },
        {
            image:'static/photos/products/product1.jpg',
            date: 'Posted on: February 9, 2025',
            price: 9900*100
        },
        {
            image:'static/photos/products/product2.jpg',
            date: 'Posted on: February 15, 2025',
            price: 900*100
        },
    ]
accumulate =''
for(i=0; i<products.length; i++){
    product= products[i]
    accumulate += `<div class="product-card">
                    <img src="${product.image}" alt="Product Image" class="product-image">
                    <div class="product-info">
                        <p class="date-posted">${product.date}</p>
                        <p class="price">K${product.price/100}</p>
                        <a href="https://wa.me/+265${997945715}" class="buy-button">Purchase</a>
                </div>
            </div>`
};
function displayProducts(){
    document.querySelector('.product-container').innerHTML = accumulate
};

displayProducts()
