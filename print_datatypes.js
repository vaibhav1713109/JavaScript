// One line comment
/* multiple line comment*/
console.log("Hello World");

// till JavaScript ES5 engine only one identifier to declare a variable that is "var"

// in ES6 and above three identifier to define a variable 
/* var, let, const*/

// Datatypes number, string, boolean
let a = 4;
console.log(a);
console.log(typeof(a)) // to check the datatype

let b = 6.5;
console.log(b);
console.log(typeof(b)) // to check the datatype

let c = "Hello";
console.log(c);
console.log(typeof(c)) // to check the datatype

let d = true;
console.log(d);
console.log(typeof(d)) // to check the datatype

// We can not redeclare let keyword with same name variable but possible with var
/* let a = 4;
    let a = 5; through an error
    a = 6 we can reassign the value with out declare*/

// Reassignment cann't be possible with const {used same variable in entire file}