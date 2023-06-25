let car = {
    model:"Hatch Back",
    company: "BMW",
    price: "60,00,000",
    color: "Black"
}

// Access
console.log(car.color);
console.log(car["color"]);

let propertyName = "price";
// console.log(car.propertyName)
console.log(car[propertyName])

// Modify
car.model = "Saddan"
car["color"] = "Red"
console.log(car.model);
console.log(car["color"])

// Delete
delete car.model;
console.log(car.model)

// use of for-each method to do iteration in array
let dish = ["biriyani", "chole", "pasta", "dosa"]

dish.forEach(function(element){
    console.log(element)
})

// objects inside an array
 
let blocklist = [{name:"Vishes", reason:"Mad person"},{name:"Shrishti", reason:"Mad Girl"}];
console.log(blocklist);
for(let i = 0; i<blocklist.length; i++){
    console.log(`User ${blocklist[i].name} is banned due to ${blocklist[i].reason}`)
}

// ****************************************************************************************************************************************************************************************************************************************

// Destructuring of objects ---------------------------------------------------------------------

let delhiHotel = {
    naam: "Taj",
    location: "24B Baker's Street",
    categories: ["Chinese", "Indian", "Thai", "Italian"],
    mainMenu: ["foodA", "foodB", "foodC"],
    openingHours: {
        sunday:{open:"09:00AM", close:"11:00PM"},
        monday:{open:"10:00AM", close:"10:00PM"}
    }
}

// let {naam, location, mainMenu} = delhiHotel; //here name of objects should be same, order can be anything whereas in arrays names can be anything but order should be same
// console.log(name, location, mainMenu)

// set customise name to object property 
// let {naam:hotelName, location:hotelLocation, mainMenu:menu} = delhiHotel;

// setting default values
// let {naam, Menu=[], categories = []} = delhiHotel;
// console.log(naam,Menu,categories)

// destructuring nested objects
let {naam, openingHours} = delhiHotel;
console.log(naam, openingHours)

let {sunday:{open, close}} = openingHours;
console.log(open, close)


// Spread operator (unpacking of array elements) ---------------------------------------------------------------------------------------------------------
let digits = [3,4,5,1,0,2];
console.log(...digits)

// usecase 
let newArray = [8,6, ... digits]
console.log(newArray)

let updatedMainMenu = [...delhiHotel.mainMenu, "Rice", "wine"]
console.log(updatedMainMenu)


/// Join 2 arrays -----------------------------------------------------------------------------------------------------------------------------------------
let joinedArray = [...digits, ...newArray];
console.log(joinedArray)

// create Shallow copy using spread operator --------------------------------------------------------------------------------------------------------------
let shallowCopyArray = [...updatedMainMenu];
shallowCopyArray[1] = "Updated Food"
console.log(shallowCopyArray) // no change happens


// Deep copy ----------------------------------------------------------------------------------------------------------------------------------------------
let deepCopyArray = updatedMainMenu   //reference
deepCopyArray[1] = "new food"
console.log(deepCopyArray); // change happens
console.log(updatedMainMenu); // original
console.log(shallowCopyArray); // no change happens

// we can also use spread operator on strings -------------------------------------------------------------------------------------
let passion = "Programming";
console.log(...passion)


// Rest operator (opposite of spread operator)
// spread operator present in RHS but Rest operator present in LHS
// syntax of both are same
// pack the elements

let mumbaiHotel = {
    naam: "Taj",
    location: "24B Baker's Street",
    categories: ["Chinese", "Indian", "Thai", "Italian"],
    mainMenu: ["foodA", "foodB", "foodC"],
    openingHours: {
        sunday:{open:"09:00AM", close:"11:00PM"},
        monday:{open:"10:00AM", close:"10:00PM"},
        tuesday:{open:"10:00AM", close:"10:00PM"},
        wednesday:{open:"10:00AM", close:"10:00PM"}
    }
}

let dig = [4,5,6,1,2];
let [j,k,...other] = dig;
console.log(other)

let {sunday,monday, ...weekdays} = mumbaiHotel.openingHours;
console.log(sunday,monday,weekdays)

// **************************************************************************************************************************************************************************

// Short circuiting ------
// falsey values are false, null, 0, undefined, ""(empty string)
// && and || operators


// Nullish Coalesing operator (??)
// only 'null' and 'undefined' are false for this operator

let numGuests = 0;

let guestList = numGuests || 10;
console.log(guestList)

let guestList2 = numGuests ?? 10;
console.log(guestList2);
// it basically returns first non-nullish value


//**************************************************************************************************************************************

// for-of loop -------------------------------------------------------------------------------------------------------------------------
let varanasiHotel = {
    naam: "Siddha",
    location: "lanka",
    categories: ["Chinese", "Indian", "Thai", "Italian"],
    mainMenu: ["foodA", "foodB", "foodC"],
    starterMenu: ["noodles", "momos", "cold coffee"],
    openingHours: {
        sunday:{open:"09:00AM", close:"11:00PM"},
        monday:{open:"10:00AM", close:"10:00PM"},
        tuesday:{open:"10:00AM", close:"10:00PM"},
        wednesday:{open:"10:00AM", close:"10:00PM"}
    }
}

let siddhaMenu = [...varanasiHotel.mainMenu, ...varanasiHotel.starterMenu]

for(let elem of siddhaMenu) console.log(elem)

for(let item of siddhaMenu.entries()){
    console.log(item)
    console.log(`${item[0]+1}: ${item[1]}`) // just for key-value visual representation on console
}


// *******************************************************************************************************************************************************************************

// Enhanced object literals -------------------------------------------------------------------------------------------------------------------------------------
// Before ES6 vs after ES6
// we can use computed property name
// we don't have to use 'function' in declaring function
// we no longer have to double name same object variable if we use it in different object like 'nameOfWaiters:nameOfWaiters'  but we simply use nameOfWaiters


let openingTime = {
    sunday:{open:"09:00AM", close:"11:00PM"},
    monday:{open:"10:00AM", close:"10:00PM"},
    tuesday:{open:"10:00AM", close:"10:00PM"},
    wednesday:{open:"10:00AM", close:"10:00PM"}
}

let mainMenu = "Platinum Menu";

let madrasHotel = {
    naam: "Siddha",
    location: "lanka",
    categories: ["Chinese", "Indian", "Thai", "Italian"],
    mainMenu: ["foodA", "foodB", "foodC"],
    starterMenu: ["noodles", "momos", "cold coffee"],
    openingTime,  // no need for openingTime:openingTime
    order(){
        
    }, // no use of 'function' before ()
    [mainMenu] : ["Different food items..."] // dynamic naming
}


// *********************************************************************************************************************************************************************************************************

// Optional Chaining (?.)--------------------------------------------------------------------------------------------------

let openingSlots = {
    sunday:{open:"09:00AM", close:"11:00PM"},
    monday:{open:"10:00AM", close:"10:00PM"},
    tuesday:{open:"10:00AM", close:"10:00PM"},
    wednesday:{open:"10:00AM", close:"10:00PM"}
}

let mathuraHotel = {
    naam: "Siddha",
    location: "lanka",
    categories: ["Chinese", "Indian", "Thai", "Italian"],
    mainMenu: ["foodA", "foodB", "foodC"],
    starterMenu: ["noodles", "momos", "cold coffee"],
    openingTime,  // no need for openingTime:openingTime
}

// let suppose we want to check this hotel open on Saturday or not
// and if open, then at what time

// console.log(hotel.openingSlots.saturday.open)  // this will give most common javascript error: Cannot read properties of undefined (reading 'open')

// so to avoid this error
// there are two methods :- 

// 1. without optional chaining
// if (mathuraHotel.openingSlots.saturday){
//     console.log(mathuraHotel.openingSlots.saturday.open)
// }

// 2. with Optional Chaining
console.log(mathuraHotel.openingSlots?.saturday?.open)
// check previous value of the operator, if false then return null/undefined


// Objects are non-iterables but indirectly we can ...

let openingClock = {
    sunday:{open:"09:00AM", close:"11:00PM"},
    monday:{open:"10:00AM", close:"10:00PM"},
    tuesday:{open:"10:00AM", close:"10:00PM"},
    wednesday:{open:"10:00AM", close:"10:00PM"}
}

let agraHotel = {
    naam: "Banke Lal",
    location: "lanka",
    categories: ["Chinese", "Indian", "Thai", "Italian"],
    mainMenu: ["foodA", "foodB", "foodC"],
    starterMenu: ["noodles", "momos", "cold coffee"],
    openingTime,  // no need for openingTime:openingTime
}

// Keys (properties)

let properties = Object.keys(openingClock);
console.log(properties)

// and we already know how to loop over array
for (let keys of properties){
    console.log(keys)
}

// Values 
let values = Object.values(openingClock);
console.log(values)

// Complete Object
let entries = Object.entries(openingClock);
console.log(entries)

for (let [day,{open,close}] of entries){
    console.log(`on ${day} we open between ${open} and ${close}`)
}