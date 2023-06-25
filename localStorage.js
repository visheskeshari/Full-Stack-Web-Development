// Local Storage

// In previous todo list task when we refresh the browser, we lose our current state data

// so, for that we put our focus on browsers' own local storage
// store and retreive data from local storage
// is an api provided by browser to store data inside browser

console.log(localStorage);

// set item
// get item
// update item

// set the item in local storage
localStorage.setItem('passion', "programing");
localStorage.setItem('name', "Vishes")
localStorage.setItem('age', 23)

// get item from local storage
console.log(localStorage.getItem('name'))

//update item in local storage
localStorage.setItem("age", 24)
console.log(localStorage)

// remove item
localStorage.removeItem('passion')


// How to store complex data structure like array of objects

// data ultimately get stored as a string in local storage

let vehicles = [
    {company: "Honda", model: "2009"},
    {comapny: "Toyota", model: "2010"}
]

console.log(vehicles)

let stringOfVehicles = JSON.stringify(vehicles)
console.log(typeof stringOfVehicles)

localStorage.setItem("Vehicles", stringOfVehicles)

console.log(localStorage)

// get stored item agian in object format

let storeData = localStorage.getItem("vehicles")

let objectFormat = JSON.parse(storeData)
console.log(typeof objectFormat)