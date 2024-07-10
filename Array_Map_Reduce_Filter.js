// Reduce
var marks = [10,20,30,40,50];
var total = marks.reduce((s,mark)=>s+mark,0);
console.log(total)

// Filter
var scores = [11,12,13,14,15,16];
/* careat a new array with even numbers of scores array ==> [12,14,16] */

var even_scor = scores.filter((score)=>score%2==0);
console.log(even_scor)

// Map => with this we can map new value from old value
var map_arr = even_scor.map((val)=>val*3);
console.log(map_arr)