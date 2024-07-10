// var - Global level/ functional

/* 
if a var variable is define as global varibal then the value of the variable is update inside any 
function it will update it globaly as well 
if var variable is not defined as global then it can not be call outside of the functions*/

var greet = 'Evening'
function greet1(){
    greet = 'Afternoon'
}
greet1()
console.log(greet) // out : Afternoon

// let - Global/block level

/* if a let variable is defined globaly then if the value of the variable inside a 
function is modify it will not update outside the block like var. */

let gre = 'Evening'
if (1==1){
    let gre = 'Afternoon'
}
console.log(gre) // out : Evening