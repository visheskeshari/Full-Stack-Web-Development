// // JavaScript DOM (Document Object Model)
 'use Strict'
// // created by browser as HTML load
// // browser creates object of HTML called 'Document Object'
// // there is complete model of HTML in tree like structure

// // Getting HTML element using query selector/All
// // querySelector returns 'firstElement' that matches CSS Selector
// // to get all matched element, we use querySelectorAll

// let resultedElement = document.querySelectorAll('p');
// console.log(resultedElement)

// // access element with class
// let result = document.querySelector('.head')
// console.log(result)

// // access element with Id
// let ret = document.querySelector('#code')
// console.log(ret)

// // we can also use old types of selectors
// // like tagNameElements // this actually give collection DS
// let tagNameElements = document.getElementsByTagName('p');
// console.log(tagNameElements)
// //similarly
// let classNameElement = document.getElementsByClassName('head')
// console.log(classNameElement)
// similarly we can use id 

// Updating and changing content ------------------------------------------------------------------------

// inner text 
// ignore spaces; retreive and set content in plain text
// let heading = document.querySelector('h1');
// console.log(heading.innerText)

// let content = document.querySelector('.content')
// console.log(content.innerText)
// content.innerText = "Hola Coders"

// // inner html
// // it does not ignore spaces; retreive and set content in HTML format
// console.log(heading.innerHTML)


// // getting and setting attributes of an element ---------------------------------------------------------
// let youtube = document.querySelector('a');
// console.log(youtube.getAttribute('href')) // get attribute
// youtube.setAttribute("href", "https://mail.google.com/mail/u/0/") // set attribute
// console.log(youtube.getAttribute('href'))
// youtube.innerText = "GMAIL link"


// // Adding Style to the HTML elements -------------------------------------------------------------------------------
// let sHeading = document.querySelector('h1');
// sHeading.style.color = "Red"
// sHeading.style.backgroundColor = "Yellow"

// // add, remove and replace class of elements ----------------------------------------------------------------------

// // add class
// let classModification = document.querySelector('h1')
// classModification.classList.add("newClass")

// // remove class 
// classModification.classList.remove("newClass")

// // replace class
// classModification.classList.replace("head", "newClass")
// console.log(classModification)

// Parent, Children and Siblings element ------------------------------------------------------------------------------

// let parentElement = document.querySelector('.matter')
// //all childdren of parent
// console.log(parentElement.children)

// // we can not run forEach method on HTML Collection. So, first convert it into array
// // console.log(Array.from(parentElement.children))
// Array.from(parentElement.children).forEach(function(element){
//     element.classList.add("view")
// })

// now suppose you have access of child element instead of the parent element 
// let childElement = document.querySelector('h2')
// console.log(childElement.parentElement)

// // find next sibling of element
// console.log(childElement.nextElementSibling)
// console.log(childElement.previousElementSibling)

// **************************************************************************************************************************************************************************************************
// Events Basics (events.html file is being used here) ------------------------------------------------------------------------------------
// const ul = document.querySelector('ul')
// let button = document.querySelector('.clickMe')
// button.addEventListener('click', function(){
//     let li = document.createElement('li')
//     li.textContent = "New Element";
//     ul.append(li)
// })
// // let eventElement = document.querySelector('.clickMe')
// // console.log(eventElement)

// // eventElement.addEventListener('click', function(){
// //     console.log('Clicked me')
// // })

// let elements = document.querySelectorAll('li');
// // console.log(elements)
// elements.forEach(function(element){
//     element.addEventListener('click', function(e){
//         // console.log("Item Clicked")
//         console.log(e.target)
//         // e.target.style.textDecoration = "line-through"
//         // e.target.remove()    // to remove from DOM
//     })
// })
 

// Bubling and Delegation ----------------------------------------------------------------------------------------------------

// let button = document.querySelector('.clickMe')
// button.addEventListener('click', function(){
//     let li = document.createElement('li')
//     li.textContent = "New Element";
//     ul.append(li)
// })

// const ul = document.querySelector('ul')
// ul.addEventListener('click', (e)=>{
//     // console.log("Inside UL")
//     // console.log(e.target)
//     if (e.target.nodeName = 'LI'){
//         e.target.remove();
//     }
// })

// // COPY event -------------------------------------------------------------------------------------------------------------------
// let copyRightElement = document.querySelector('.copy');
// copyRightElement.addEventListener('copy', ()=>{
//     console.log("hey, you can't copy anything.")
// })

// // Mouse Move event ------------------------------------------------------------------------------------------------------------
// let mouseMoveElement = document.querySelector('.box');
// mouseMoveElement.addEventListener('mousemove', (e)=>{
//     console.log(e.offsetX, e.offsetY)
// })

// Form Event ---------------------------------------------------------------------------------------------------------------------
// let form = document.querySelector('.sign-up-form')
// // console.log(form)
// // let eamil = document.querySelector("#email");
// // let password = document.querySelector("#password")

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     // console.log(email.value, password.value)
//     // or simply 
//     console.log(form.email.value, form.userPassword.value) // accessing via id and name respectively and both will work

// })


// Regular Expression (Regex) ------------------------------------------------------------------------------------------------------

// It is a pattern of characters used to ddo pattern matching
// Or we can say 'Data Validation'

// 1) Implementation of password validation

// Length at least 8 
// At least contain one upper case
// At least contain one lower case
// At least contain ome digit 0 to 9

let form = document.querySelector('.sign-up-form')
let eamil = document.querySelector("#email");
let password = document.querySelector("#password")
let passwordPattern = "^(?=.*?[A-z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let passwordValue = password.value;
    console.log(passwordValue);
    let result = passwordValue.match(passwordPattern);
    if (result){
        console.log("your password is strong")
    } else {
        console.log("try again")
    }
})

// 2) Implementation of username validation

// username can only consist of A-Z or a-z
// length of username between 6-12

let user = document.querySelector('#name')
let usernamePattern = /^[A-Za-z]{6,12}$/

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let userName = user.value;
    //test maethod returns boolean values
    let result = usernamePattern.test(userName)
    if (result==true){
        console.log("Valid userName")
    } else {
        console.log("Invalid userName")

    }
})

// Live feedback

user.addEventListener('keyup', (e)=>{
    if (usernamePattern.test(e.target.value)){
        // console.log("Passed")
        user.setAttribute('class','success')
    } else {
        // console.log("failed")
        user.setAttribute('class', 'error')
    }
})