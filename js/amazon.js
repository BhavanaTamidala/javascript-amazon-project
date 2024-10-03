import { cart_products } from "../data/cart.js";
import { products } from "../data/products.js";
//products array is taken from products.js
let ProductsHtml ='';
products.forEach((product)=>{

    ProductsHtml +=
     `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option class="selected" value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="js-added-to-cart added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;

       
});

console.log(ProductsHtml);

const js_products = document.querySelector('.js-products-grid');

js_products.innerHTML = ProductsHtml;


document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  
    button.addEventListener('click',()=>{
      const productId = button.dataset.productId;

      
      


      let jsopacity = document.querySelector('.added-to-cart');
     
      let matchingItem;
      setTimeout(()=>{
        jsopacity.style.opacity = 100;
      },1000);
      
      cart_products.forEach((item)=>{
        if(productId===item.productId){
          matchingItem=item;
        }
      });
      if(matchingItem){
        matchingItem.quantity++;
      }else{
       cart_products.push({
        productId,
        quantity: 1
       });
      }

      let totalCartQuantity = 0;
      
      cart_products.forEach((item)=>{
        totalCartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity').innerHTML = totalCartQuantity;

      
       console.log(cart_products);
    });
});