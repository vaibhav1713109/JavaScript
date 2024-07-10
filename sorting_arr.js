// sort string array
var fruits = ['pomegrante','apple','banana','mango']
// fruits.sort()   // it will sort only string 
console.log(fruits.sort())
console.log(fruits.reverse())

var scores = [12,13, 003, 7, 10]
console.log(scores.sort())  // out : [ 10, 12, 13, 3, 7 ]


// sort number array
/* to sort a number we have to modify the sort method */
scores.sort(function(a,b){
    return a-b
})
console.log(scores)     // sort in increasing order
console.log(scores.sort((a,b)=>b-a)) // sort in decreasing order