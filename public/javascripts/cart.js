const KEY_STORAGE = '@shoes:cart';


function getCookie(name) {
  var cookies = document.cookie;
  var prefix = name + "=";
  var begin = cookies.indexOf("; " + prefix);

  if (begin == -1) {

      begin = cookies.indexOf(prefix);
       
      if (begin != 0) {
          return null;
      }

  } else {
      begin += 2;
  }

  var end = cookies.indexOf(";", begin);
   
  if (end == -1) {
      end = cookies.length;                        
  }

  return cookies.substring(begin + prefix.length, end);
}
function getCart (){
  let cart = getCookie(KEY_STORAGE);
  console.log('cart===',cart);
  if(!cart){
    cart='[]';
  }

  cart = JSON.parse(cart);

  return cart
}
function save(cart){
  document.cookie = `${KEY_STORAGE}=${JSON.stringify(cart)}`
}

function addToCart(product){


  const cart = getCart();

  const hasItemIndex = cart.findIndex(item=>item.id ===product.id);

  if(hasItemIndex>=0){
    cart[hasItemIndex].amount = cart[hasItemIndex].amount+1;
    console.log(product);
  }else{
    cart.push({
      ...product,
      amount:1
    });
  }

  save(cart)
}

function removeItem(id){
  const cart = getCart();
  const hasItemIndex = cart.findIndex(item=>item.id ===product.id);
  if(hasItemIndex>=0){
    
    if(cart[hasItemIndex].amount>0){
      cart[hasItemIndex].amount=cart[hasItemIndex].amount -1;
    }else{
      cart.split(1,hasItemIndex);
    }
    save(cart)
  }
}
