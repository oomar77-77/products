
function changeTheme() {
    let body = document.body;
    if (body.classList.contains('light-theme')) {
        body.className = 'dark-theme';
        localStorage.setItem('userTheme', 'dark-theme');
    } else {
        body.className = 'light-theme';
        localStorage.setItem('userTheme', 'light-theme');
    }
}
function toggleMenu() {
    document.getElementById("myLinks").classList.toggle("show-menu");
}
let productsofcart = [];
function getProduct(productId) {
    let product = features.find(item => item.id == productId);
    if (!product) {
        product = latest.find(item => item.id == productId);
    }
    return product;
}
function addToCart(that, productId) {
    let product = getProduct(productId);

    productsofcart.push(product);
    localStorage.setItem(`productsofcart`, JSON.stringify(productsofcart));
    that.textContent = "Remove From Cart";
    that.setAttribute(`onclick`, `removeFromCart(this,${productId})`)

}
function removeFromCart(that, productId) {
    productsofcart = productsofcart.filter(function (item) {
        return item && item.id != productId;

    });
    localStorage.setItem(`productsofcart`, JSON.stringify(productsofcart));
    that.textContent = "Add To Cart";
    that.setAttribute(`onclick`, `addToCart(this,${productId})`);
}

function saveAndRefresh(el, id, isAdded) {
    localStorage.setItem('productsofcart', JSON.stringify(productsofcart));
    if (isAdded) {
        el.textContent = "Remove From Cart";
        el.setAttribute('onclick', `removeFromCart(this, ${id})`);
    }
    else {
        el.textContent = "Add To Cart";
        el.setAttribute('onclick', `addToCart(this, ${id})`);
    }
}
