/** 
 Javascript features:

 1) Hoisiting: Functions get hoisted to the run stack before a file is run.
 Variables get declarations with undefined value as default before a file is run.
 this way functions and variables are avaliable for use (with variables have undefined value) before they are defined in the file

 2) Context: Javascript is primarily a function language, but has OOP features with objects.
 context is the object scope during execution that allows the use of "this" keywork to access attributes of the object.

 3) Callback: Functions are first-class objects in JS, which means that they can be passed to other functions as parameters.
 This is known as callback. 

 4) Inheritance: JS supports the creation of objects. Each is given a <prototype> that defines the object.
 The prototype object also allows for inheritance as its chained between parent and child. We can use Object.create to create a child object.

 5) Module: You can import/export objects/functions/variables from another file via module.exports and require function.

 6) Call and Apply: All functions have call and apply functions that can be called. Call will accept an object that will be used for the function.
 Apply also can be used to pass a different context to the function, but it accepts an array as a parameter and unpacks it.

 7) Encapsulation: encapsulation in JS is achieved by having a function that will be used to define the visibility of 
 object attributes.

 8) Function Type: there are annoynmous function, named functions, IIFE, and constructor functions available in JS.
 annoynmous functions are invoked without being named. Named functions can be declared via function keyword and then the name, or using var to assing
 a variable to them, while IIFE are executed immediable with parameters passed to it immediately.
 constructor function are used to create objects.

*/

//------------------------------------------------------------------------------------------------------------------------------------------
// Question 2

var dynamicTypingExample = "Robert";
console.log(dynamicTypingExample, typeof dynamicTypingExample);

dynamicTypingExample = 0.0266;
console.log(dynamicTypingExample, typeof dynamicTypingExample);

dynamicTypingExample = false;
console.log(dynamicTypingExample, typeof dynamicTypingExample);

dynamicTypingExample = {myName: "Test Me"};
console.log(dynamicTypingExample, typeof dynamicTypingExample);

dynamicTypingExample = 25166665;
console.log(dynamicTypingExample, typeof dynamicTypingExample);

dynamicTypingExample = undefined;
console.log(dynamicTypingExample, typeof dynamicTypingExample);

dynamicTypingExample = true;
console.log(dynamicTypingExample, typeof dynamicTypingExample);

dynamicTypingExample = "Robert";
console.log(dynamicTypingExample, typeof dynamicTypingExample);

//----------------------------------------------------------------------------------------------
// Question 3

function showUserInfo(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    var printDetails = function() {
        return {
            firstName: this.firstName, 
            lastName: this.lastName,
            age: this.age
        }
    }
}

console.log(showUserInfo.printDetails());

//-----------------------------------------------------------------------------------------------------------
// Question 4

function doAddition(a, b, c) {
    return a+b+c;
}

console.log(doAddition(2, 3, 4));
// this will output 8, expected output, will work as intended.

console.log(doAddition(2));
// this will output undefined. When the expect parameters aren't passed, JS will fill them with undefined and 
// undefined + any other value is equal to undefined

console.log(doAddition("2","3",3 ));
// 8, when JS gets + operator with string and number, it'll try to parse the String as a number and so "2" and "3" will be converted to a number

console.log(doAddition("first", 2, "three"));
// "first2three", JS will try to parse the strings as numbers, but fail and so will convert the number into a string and perform the operation.

//----------------------------------------------------------------------------------------------------------------------------------------
// Question 5

// a) Closure

function getUserDetails(username, password) {

    var user = {
        username: "alice123",
        password: "jabberwocky",
        name: "Alice",
        age: 20
        }

    function validateUser(username, password){
        if (user.username==username && user.password==password) {
            return true;
        }
        return false;
    }

    return validateUser(username, password) ? {name: user.name, age : user.age} : "Invalid Username or Password";
}



// b) hoisting

doSubtraction(10, 5);

function doSubtraction(a, b) {
    return a-b;
}

// c) constructor function

function student(name, age){
    this.name = name;
    this.age = age;

    this.getstudentdetails = function () {
        return "name:" + name + " , " + "age: " + age;
    }
}

//----------------------------------------------------------------------------------------------------------------------------
// Question 6

// Call is a function that can be called by a function with a parameter for the context to which the function will be attached
// Apply is the same as call, except that it will take an array as a parameter and unpack it
// The reason to use call and apply is to use a given function that was defined for a particular context and use it in a different context

// bind is the same as call, except that the execution of the function isn't immediate. It'll hold the context to which the function will be attached
// till the function is executed

//----------------------------------------------------------------------------------------------------------------------------------------------
// Question 7

var Student= {
    name : "Bob",
    age : 20,

    getStudentDetails : function () {
        setTimeout(getstudentdetails.bind(Student), 1000);
        return "name:" + this.name + " , " + "age: " + this.age;
    }
    
}

//---------------------------------------------------------------------------------------------------
// Question 8

var nullPrototypeObj = Object.create(null);
Object.setPrototypeOf(Student, null);

// prototype attaches certain functions and attributes to an object, which can be useful in inheritance.
// but sometime we don't want those functions and attributes attached, and in this null prototype is useful

//-------------------------------------------------------------------------------------------------------------------
// Question 9

// Object.assign function will merge different objects based on common properties

//------------------------------------------------------------------------------------------------------------------
// Question 10

// file users.js
var User1 = {
    id: 1,
    name: "Alice"
}

var User2 = {
    id: 2,
    name: "Bob"
}

module.exports = {User1, User2};

// file moduleImport.js

var {User1, User2} = require("./users");

//





