// 'this' keyword represents the object present in the method which calls 'this'

let person = {
    firstname:"Harry",
    lastname:"Styles",
    place:"USA",
    occupation: "singer",
    birthYear:"1994",
    getInfo : function(){
        return `so, ${this.firstname} ${this.lastname} born in ${this.birthYear} who is a famous ${this.occupation} lives in ${this.place}`;
    }
}
console.log(person.getInfo())

// call and apply method 
// we can mannualy set the value of this using 'call and apply'

// let mainPlane = {
//     airline:"Indigo",
//     iataCode: "F1",
//     booking:[],
//     book: function(flightName, passengerName){
//         console.log(`${passengerName} has booked the flight ${this.iataCode}${flightName} of ${this.airline}.`);
//         this.booking.push({companyName:`${this.airline}`, name:passengerName, flightCode:this.iataCode, nameOfFlight:flightName})
//     }
// }
// mainPlane.book("553", "Vishes Keshari")
// mainPlane.book("403", "Jack Ryan")
// console.log(mainPlane)

// now suppose a new flight comes here and we have to use book function (which is defined in mainPlane) for this new flight 
let mainPlane = {
    airline:"Indigo",
    iataCode: "F1",
    booking:[],
    book: function(flightName, passengerName){
        console.log(`${passengerName} has booked the flight ${this.iataCode}${flightName} of ${this.airline}.`);
        this.booking.push({companyName:`${this.airline}`, name:passengerName, flightCode:this.iataCode, nameOfFlight:flightName})
    }
}

let childPlane = {
    airline:"Indigo",
    iataCode: "R2",
    booking:[],
}

let book = mainPlane.book;
// book("665", "Laurie") // now book is just a regular function here, hence 'this' method is undefined

// so, the solution is use 'call' method
book.call(childPlane, '456', 'Laurie')
console.log(childPlane)
// same can be done by 'apply' method (although this is old)
book.apply(childPlane, ['321','Vicky'])

// 'bind' method is another similar method, the only difference between this and 'call' method is that bind just connect the function and object
// example 
function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} to this world.`)
}

let user = {
    firstName: "Neha",
    lastName: "Sharma"
}
let newGreet = greet.bind(user);
newGreet();