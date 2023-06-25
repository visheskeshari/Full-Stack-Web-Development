// modern Javascript Modules, and tooling

// "exporting and immporting" ES6 modules

// Importing module without value
console.log("Importing Module")

// import {order, laptopPrice, quant as Q} from './export.js'
// order("Jack", "Phone")
// console.log("Laptop price is ", laptopPrice);
// console.log("Quantity is ", Q)

// OR

import * as singleVariable from "./Product.js"
singleVariable.order("Jack", "Phone")
console.log("Laptop price is ", singleVariable.laptopPrice);
console.log("Quantity is ", singleVariable.Q)

import anyName from './export.js'   //it is default so you can use any name 
anyName ("john", "pizza")
anyName ("ryan", "momos")


// *********************************************************************************************************************************************************

// Top level await
// before ES2022 we can use 'await' only inside async function right!?
// but in ES2022, introduced top level 'await'
// this means now we can use 'await' outside the async function
// but top level 'await' blocks the execution of next code part

// start 
console.log("start using top level await")
let response = await fetch("http://www.google.com")
let data = await response.json();
// now anything after this will be blocked
console.log("Finishing .... ")

// that's why top level await is not a good practice in javascript for now


//***********************************************************************************************************************************************************

// Module pattern 

// Imediately invoked function execution (IIFE)
let resultIIFE = (function(){
    
    let orders = [];
    let addToCart = function(product, quantity){
        console.log(`${product} ordered ${quantity}`);
        orders.push({product, quantity})
    }
    return {
        orders,
        addToCart
    }
})()

console.log(resultIIFE.addToCart("burger", 5))
// we can't use addToCart and order directly, we have to use instance resultIIFE.order and resultIIFE.addToCart
// why , because to protect variable and library, no one can modify code

resultIIFE.addToCart("Momos", 12);

console.log(resultIIFE.orders)