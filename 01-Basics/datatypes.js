// Primitive Datatypes

// Strings, Number, Boolean, BigInt, Symbol, null, undefined

const scoreCard = 1000

const isLoggedIn = true
const temp = null
let userId;

const uid = Symbol('118')
const anotherUid = Symbol('118')

console.log(uid === anotherUid);

const hugeNumber = 4778485n


// Reference (Non-Primitive)

// Array, Objects, Function

const heros = ["Batman", "Spiderman"]
let useId = {
    name: "skshm",
    age: 27,
}

const myFunction = function(){
    console.log("Hello, world");
    
}

console.log(typeof hugeNumber);
