let marks = Array(6) // declare a array of length 6
var m = new Array(10,12,13,1,4,6)
var mark = [20,30,40,50]

console.log(marks, m, mark) // out : [ <6 empty items> ] [ 10, 12, 13, 1, 4, 6 ] [ 20, 30, 40, 50 ]
console.log(mark[2], marks[2]) //output : 40 undefined
marks[2] = 1
console.log(marks, marks.length) // out : [ <2 empty items>, 1, <3 empty items> ] 6

// append val in array
mark.push(5)
console.log(mark) //[ 20, 30, 40, 50, 5 ]
marks.pop()
console.log(marks) //out : [ <2 empty items>, 1, <2 empty items> ]

mark.unshift(12) // add at the begning of array
console.log(mark)
console.log(mark.indexOf(50)) //4 
console.log(mark.includes(120))    //false

console.log(mark.slice(2,4)) //[ 30, 40 ]

var s = 0;
for (i=0;i<mark.length;i++){
    s = s+mark[i];
}
console.log(s)

var arr1=["C","C++","Python"];  
var arr2=["Java","JavaScript","Android"];  
var arr3=["Ruby","Kotlin"]; 
var result = arr1.concat(arr2,arr3);  
console.log(result)

var sum = 0;  
var arr = [10,18,12,20];  

arr.forEach(function(element) {  
    sum= sum+element;  
console.log(sum);  
});

var season=[1,2,3,4];  
var str=season.toString(); 
console.log(str, typeof(str))