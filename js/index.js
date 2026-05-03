
if (localStorage.getItem(`productsofcart`) == null) {
    localStorage.setItem(`productsofcart`, JSON.stringify([]));

} else {
    productsofcart = JSON.parse(localStorage.getItem(`productsofcart`));
}
document.addEventListener("DOMContentLoaded", function () {
    let productsofcart = JSON.parse(localStorage.getItem('productsofcart')) || [];
    let allCartButtons = document.querySelectorAll('.cart-btn');
    allCartButtons.forEach(btn => {
        let productId = btn.getAttribute('data-id'); // بيقرأ الـ id من الـ html

        // بيشيك هل الـ id ده موجود في الكارت؟
        let isInCart = productsofcart.some(item => item && item.id == productId);

        if (isInCart) {
            btn.textContent = "Remove From Card";
            btn.setAttribute('onclick', `removeFromCart(this, ${productId})`);
        }
    });
});
let featuredContentEle = document.querySelector(`#featured .content .row`);
featuredContentEle.innerHTML = "";

for (let i = 0; i < features.length; i++) {
    let currentproduct = features[i];
    let productsofcart = JSON.parse(localStorage.getItem('productsofcart'));
    let isInCart = productsofcart.some(item => item && item.id == currentproduct.id);
    let btnText = isInCart ? "Remove From Cart" : "Add To Cart";
    let btnFunc = isInCart ? "removeFromCart" : "addToCart";
    featuredContentEle.innerHTML += `
        <div class="item">
            ${(currentproduct.discount == 0) ? `` : ` <p class="discount">-${currentproduct.discount * 100}%</p>`}
            <div class="head">
                <div class="image-container">
                    <img src="${currentproduct.image}">
                    <div class="overlay-details">
                        <h3>Specifications:</h3>
                        <p>${currentproduct.description}</p>
                    </div>
                     
                </div>
                <div class="body">
                    <h4>${currentproduct.name}</h4>
                    <div class="boxprice">
                        <div class="label">
                            <h4>price : </h4>
                        </div>
                        <div class="value">
                            <p class="discount-2">
                            ${(currentproduct.discount == 0) ? `` : `<del>${currentproduct.price} <sup>$</sup></del> `}
                                ${currentproduct.price * (1 - currentproduct.discount)}<sup>$</sup>
                            </p>
                        </div>
                        </div>
                        <button onclick="${btnFunc}(this, ${currentproduct.id})">${btnText}</button>
                    
                    <h6>hover to show details</h6>
                </div>
            </div>
        </div>
    `;
}