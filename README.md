**# JavaScript Basics**  
JavaScript is a **dynamic type language**, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine. You need to use var, let, const here to specify the data type.  

**var, let, const**
- **var :** It has global level and functional level
- **let :** It has global as well as block level scope
- **const :** It cannot be reinitialize.

**## Variables :** A variable is simply a name of storage location. There are two types of variables in JavaScript : local variable and global variable.

There are some rules while declaring a JavaScript variable (also known as identifiers).  
- Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.  
- After first letter we can use digits (0 to 9), for example value1.  
- JavaScript variables are case sensitive, for example x and X are different variables.  

**Local variable :** A JavaScript local variable is declared inside block or function. It is accessible within the function or block only. For example:
```
function abc(){  
var x=10;//local variable  
}
```

**Global variable :** A JavaScript global variable is accessible from any function. A variable i.e. declared outside the function or declared with window object is known as global variable. For example:
```
var data=200;//gloabal variable  
function a(){  
console.log(data);  
}  
function b(){  
console.log(data);  
}  
a();//calling JavaScript function  
b();  
```

**## Data Types**

JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.  
- **Primitive data type :** There are five types of primitive data types in JavaScript: String (represents sequence of characters e.g "hello"), Number (represents numeric values e.g. 100), Boolean (represents boolean value either false or true), Undefined (represents undefined value), Null (represents null i.e. no value at all)

- **Non-primitive (reference) data type :** The non-primitive data types are: Object (represents instance through which we can access members), Array (represents group of similar values), RegExp (represents regular expression).

**## Operators**
There are following types of operators in JavaScript.  
- **Arithmetic Operators :** 
```
Operator	Description	            Example
+	        Addition	           10+20 = 30
-	        Subtraction	           20-10 = 10
*	        Multiplication	       10*20 = 200
/	        Division	           20/10 = 2
%	        Modulus (Remainder)	   20%10 = 0
++	        Increment	           var a=10; a++; Now a = 11
--	        Decrement	           var a=10; a--; Now a = 9
```
- **Comparison (Relational) Operators :**
```
Operator	Description	                            Example
==	        Is equal to                         10==20 = false
===	        Identical (equal and of same type)  10===20 = false
!=	        Not equal to                        10!=20 = true
!==	        Not Identical                       20!==20 = false
>	        Greater than                        20>10 = true
>=	        Greater than or equal to            20>=10 = true
<	        Less than                           20<10 = false
<=	        Less than or equal to               20<=10 = false
```
- **Bitwise Operators :**
```
Operator	Description	                        Example
&	        Bitwise AND	                    (10==20 & 20==33) = false
|	        Bitwise OR	                    (10==20 | 20==33) = false
^	        Bitwise XOR	                    (10==20 ^ 20==33) = false
~	        Bitwise NOT	                    (~10) = -10
<<	        Bitwise Left Shift	            (10<<2) = 40
>>	        Bitwise Right Shift	            (10>>2) = 2
>>>	        Bitwise Right Shift with Zero	(10>>>2) = 2
```
- **Logical Operators :**
```
Operator	Description	        Example
&&	        Logical AND	    (10==20 && 20==33) = false
||	        Logical OR	    (10==20 || 20==33) = false
!	        Logical Not	    !(10==20) = true
```

- **Assignment Operators :**
```
Operator	Description	                Example
=	        Assign	                10+10 = 20
+=	        Add and assign	        var a=10; a+=20; Now a = 30
-=	        Subtract and assign	    var a=20; a-=10; Now a = 10
*=	        Multiply and assign	    var a=10; a*=20; Now a = 200
/=	        Divide and assign	    var a=10; a/=2; Now a = 5
%=	        Modulus and assign	    var a=10; a%=2; Now a = 0
```
- **Special Operator :**
```
Operator	        Description
(?:)	        Conditional Operator returns value based on the condition. It is like if-else.
,	            Comma Operator allows multiple expressions to be evaluated as single statement.
delete	        Delete Operator deletes a property from the object.
in	            In Operator checks if object has the given property
instanceof	    checks if the object is an instance of given type
new	            creates an instance (object)
typeof	        checks the type of object.
void	        it discards the expression's return value.
yield	        checks what is returned in a generator by the generator's iterator.
```

**## Statements**
- **If-else :**
```
var a=20;  
if(a%2==0){  
console.log("a is even number");  
}  
else{  
console.log("a is odd number");  
}  
```

- **if-else if :**
```
var a=20;  
if(a==10){  
console.log("a is equal to 10");  
}  
else if(a==15){  
console.log("a is equal to 15");  
}
else{  
console.log("a is not equal to 10, 15 or 20");  
}  
```

**## Loops**
- **For Loop :**
```
for (i=1; i<=5; i++)  
{  
document.write(i + "<br/>")  
}  
```

- **while loop :**
```
var i=11;  
while (i<=15)  
{  
document.write(i + "<br/>");  
i++;  
}  
```

**## Switch Statement**
The JavaScript switch statement is used to execute one code from multiple expressions. It is just like else if statement that we have learned in previous page. But it is convenient than if..else..if because it can be used with numbers, characters etc.  
```
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
```

**## Functions**
```
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
```

**## Anyonymus Function :** An anonymous function in JavaScript is a function that is declared without any named identifier to refer to it. Anonymous functions are often used as arguments to other functions.  
```
// syntax1
let sumofintegers = function(c,d){
    return c+d
}
console.log(sumofintegers(12,90))

// syntax2
let productofinteger = (c,d)=>c*d
console.log(productofinteger(19,5))
```

**## JavaScript Objects**
- **Array :** Array is an object that represents a collection of similar type of elements.  
    - **Array Methods -**  
        - **array.push() :** It adds one or more elements to the end of an array.
        - **array.pop() :** It removes and returns the last element of an array.
        - **array.reverse() :** It reverses the elements of given array.
        - **array.slice() :** It returns a new array containing the copy of the part of the given array.
        - **array.sort() :** It returns the element of the given array in a sorted order.
            ```
            var fruits = ['pomegrante','apple','banana','mango']
            // fruits.sort()   // it will sort only string 
            console.log(fruits.sort())
            // sort number array
            /* to sort a number we have to pass a function which verify the diffrence between number and then sort them */
            console.log(scores.sort((a,b)=>b-a)) // sort in decreasing order
            ```
        - **array.toString() :** It converts the elements of a specified array into string form, without affecting the original array.
            ```
            var season=["Spring","Autumn","Summer","Winter"];  
            var str=season.toString(); 
            console.log(str)  //out : Spring,Autumn,Summer,Winter
            var numbers=[1,2,3,4];  
            var num_str=numbers.toString(); 
            console.log(num_str, typeof(num_str)) // out : 1,2,3,4 string
            ```
        - **array.concat() :** It combines two or more arrays and returns a new array.
        - **array.copywithin() :** It copies the part of the given array with its own elements and returns the modified array.
        - **array.map() :** It calls the specified function for every array element and returns the new array. This method doesn't change the original array.
            ```
            //syntax - array.map(callback(currentvalue,index,arr),thisArg)    
            var arr=[2,4,6];  
            var result=arr.map(x=>x*3); 
            console.log(result); //[6,12,18]
            ```
        - **array.reduce() :** It reduces the given array into a single value by executing a reducer function. The user implements the reducer function that works on every element present in the array.
            ```
            // syntax - arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
            var arr=[2,3,1,5];  
            var a=arr.reduce(function (accumulator,currentValue) {  
                return accumulator+currentValue;  
                },0);
            console.log(a) // out : 11
            ```
        - **array.filter() :** It returns the new array containing the elements that pass the provided function conditions.
            ```
            // Filter
            var scores = [11,12,13,14,15,16];
            // careat a new array with even numbers of scores array ==> [12,14,16]
            var even_scor = scores.filter((score)=>score%2==0);
            console.log(even_scor)
            ```
        - **array.findIndex() :** It returns the index value of the first element in the given array that satisfies the specified condition.
            ```
            var arr=[5,22,19,25,34];  
            var result=arr.findIndex(x=>x>20);  
            ```
        - **array.forEach() :** It is used to invoke the specified function once for each array element.
            ```
            var sum = 0;  
            var arr = [10,18,12,20];  
            
            arr.forEach(function myFunction(element) {  
                sum= sum+element;  
            console.log(sum);  
            });  
            ```
        - **array.includes() :** It checks whether the given array contains the specified element.
            ```
            var arr=["AngularJS","Node.js","JQuery"]  
            console.log(arr.includes("AngularJS"));  
            ```
        - **array.indexOf() :** It is used to search the position of a particular element in a given array. This method is case-sensitive. If an element is not present in an array, it returns -1.
            ```
            // syntax - array.indexOf(element,index)  
            var arr=["C","C++","Python","C++","Java"];  
            console.log(arr.indexOf("C++",2)); 
            ```
        - 
