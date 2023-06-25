// Set data structures

let itemSet = new Set ([1,1,1,2,2,2,3,4,5,5])
console.log(itemSet)
console.log(itemSet.size)
console.log(itemSet.has(2))
itemSet.add(9)
itemSet.delete(1)
// console.log(itemSet[0]) // index not allowed

// set are also iterables
for (let item of itemSet){
    console.log(item)
}

let naam = "Vishessssssssss"
console.log(naam)