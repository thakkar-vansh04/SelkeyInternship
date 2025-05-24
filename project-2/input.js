const readLine = require('readline-sync');

let a = Number(readLine.question('Enter size of the Array:'));
let numbers = [];
for(let i=0;i<a;i++){
    numbers.push(Number(readLine.question(`Enter ${i+1} number:`)));
}
console.log(numbers);