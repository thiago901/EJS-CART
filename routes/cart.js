var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  const KEY_STORAGE = '@shoes:cart';
  let cart = req.cookies[KEY_STORAGE];
  if(!cart){
    cart='[]';
  }
  cart = JSON.parse(cart);
  console.log(cart);
  const cartFormatted = cart.map(item=>({
    ...item,
    subTotal:item.price * item.amount
  }))
  const total = cartFormatted.reduce((acc,current)=>acc+Number(current.subTotal),0)
  res.render('cart',{
    cart:cartFormatted,
    total
  });
});

module.exports = router;
