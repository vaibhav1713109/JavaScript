**# JavaScript Basics**  
JavaScript is a **dynamic type language**, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine. You need to use var, let, const here to specify the data type.  

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