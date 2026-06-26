//Primitive Data types 
//there are 7 types
const score = 100 
const scoreValue = 100.3 

const isLoggedin = false 
const outsideTemp = null //null type
let userEmail; //undefined type

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 345678643677543675n
console.log(id === anotherId); //gives false cause it gives unique value for each

//Reference Datatypes/Non Primitive Datatypes

superheros = ["Batman", "Superman", "Wonderwoman"] //Array
let myObj = {
    name: "Dinky", 
    age: 23
} //Object 
const myFunction = function() {
    console.log("Hello World")
}
console.log(typeof bigNumber) // TYPE will be null 
console.log(typeof outsideTemp ) //object type will be printed
