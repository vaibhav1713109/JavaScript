const n = 10

// While loop
let i = 0
while(i<n){
    console.log(i);
    i++
}

// Do While
i = 0;
do{
    i++;
}while(i>10);
    console.log(i,"while");

// For Loop
for(let k = 0;k<=10; k++){
    console.log(k)
}

// from given range Multiple of 2 and 5
console.log("from given range Multiple of 2 and 5")
let m = 0
for (let k=1;k<=100;k++){
    if (k%2==0 && k%5 ==0){
        console.log(k)
        m++
        if (m >=3){
            break
        }
    }
}