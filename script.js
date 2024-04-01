// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing Module');
// // console.log(shippingCost);
// addToCart('Bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('Bread', 5);
// add('Apples', 10);
// add('Mango', 8);

// console.log(cart);

// // Not very clean
// // lastPost.then(last => console.log(last));

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('Apple', 4);
// shoppingCart2.addToCart('Pizza', 2);

// console.log(shoppingCart2);

// Export
// export.addToCart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
//     };

//     // Import
//     const {addToCart} = require('./shoppingCart.js')

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
cloneDeep.js;

const state = {
  cart: [
    { product: 'Bread', quantity: 5 },
    { product: 'Pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

console.log(stateClone);
state.user.loggedIn = 'false';

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);
