let day = "  Wednesday   "

console.log(day.length) //10
console.log(day.slice(2,7)) //dnesd
console.log(day[3])  //n

console.log(day.split("s"))     //[ 'Wedne', 'day ' ]
console.log(day.trim())     // Wednesday (remove space from front and end)

let date = '10'
let nextday = '11'
console.log(date, typeof(date))
console.log(parseInt(date), typeof(parseInt(date)))

let num = 15
console.log(num, typeof(num))
console.log(num.toString(),typeof(num.toString()))

// concatinate
let new_quote = day.trim()+' is funday'
console.log(new_quote)
let val = new_quote.indexOf('day',10)
console.log(val)