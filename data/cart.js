export const cart_products = [];

export function addToCart(productId){
  let matchingItem;
  cart_products.forEach((cartItem)=>{
    if(productId===cartItem.productId){
      matchingItem=cartItem;
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
}