console.log("Exporting Module")

export let order = function(buyer, item){
    console.log(`${buyer} ordered this ${item}`)
}

// Multiple values

let laptopPrice = 50000;
let quantity = 34;

export {laptopPrice, quantity as quant} 

export default order