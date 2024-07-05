// Syntax
/* 
switch(expression){  
case value1:  
 code to be executed;  
 break;  
case value2:  
 code to be executed;  
 break;  
......  
  
default:   
 code to be executed if above values are not matched;  
}  
*/

var grade = 'B';
var result;
switch (grade) {
    case 'A':
        result = "A Grade";
        break;
    case 'B':
        result = "B Grade";
        break;
    case 'C':
        result = "C Grade";
        break;
    default:
        result = "No Grade";
}
console.log(result); 