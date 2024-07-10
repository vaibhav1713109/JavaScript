// Syntax
/* 
function functionName([arg1, arg2, ...argN]){  
 //code to be executed  
}  
*/

function addition(arg1,arg2){
    return arg1+arg2;
}

console.log(addition(5,10))

// Anyonymus Function => don't have name 

// syntax1
let sumofintegers = function(c,d){
    return c+d
}
console.log(sumofintegers(12,90))

// syntax2
let productofinteger = (c,d)=>c*d
console.log(productofinteger(19,5))