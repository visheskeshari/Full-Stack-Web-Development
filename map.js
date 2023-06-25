// Maps 

// It is data structure which is used to map values into keys
// In map the data type of keys can be of 'any'
// Map is much similar to objects 
// unlike sets or objects, keys can be of different types

let restaurantMap = new Map();

// adding values into the map

restaurantMap.set('name', "Varanasi Dham");
restaurantMap.set(1, "Address 1");
console.log(restaurantMap)

// getting the values
console.log(restaurantMap.get(2));

// chaining 
restaurantMap.set(2, "Address 2").set(true, "we are opne").set(false, "we are close")
console.log(restaurantMap)

// size of map
console.log(restaurantMap.size)


// new example
let array1 = [2,3,4,5];
let array2 = array1.map(function(x){
    return x*2;
});

//or
// let array2 = array1.map(x=>  x*2); // by arrow function

console.log(array2)