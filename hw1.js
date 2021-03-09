let fruit = 9;
console.log(fruit);
fruit = ["cherries", "banana", "apple"];
console.log(fruit);

const countries = ["USA", "Mexico", "Canada", "Sweden", "Nigeria"];
console.log(countries);

if(true){
    var num = 2;
}
console.log(num);

if(true){
    let game = "loser";
}
// console.log(game); gets error

// countries = 9;
// console.log(countries);

const empty = [];
empty.push("9", "8", "7");
console.log(empty);

const variable = {
    name: "Chantel",
    age: 24,
}
console.log(`Hello I am ${variable.name}`);

const greet = ({name,age}) =>{
    console.log(`Hello I am ${name} and I am ${age} years old`)
}
greet(variable);

let name = variable.name;
let age = variable.age;
console.log(name);
console.log(age);

const arrow1 = () =>{
    console.log("hello world!");
}

const arrow2 = (x) =>{
    console.log(x);
}
arrow2("hey", "How");

// bro what bonus ATTEMPT
// const arrow3 = (x,y,) => {
//     if(x,y){
//         return x + y;
//     } else{
//         console.log("wrong");
//     }
// }
// console.log(arrow3(0,1,2,4));

const arrow3 = (x,y) => x + y;
console.log(arrow3(1,4,3));

const log = () =>{
    window.alert("IT'S LIT");
}
setTimeout(log(), 2000);

/* For your setTimeout function, you can do it all in one line
using an arrow function. It's just a bit cleaner and takes up less lines

setTimeout(() => {
    window.alert("IT'S LIT");
}, 2000);

*/

for(let i = 0; i < countries.length; i++){
    console.log(countries[i]);
}

/* Instead of using this old school for loop, we can use a for..of loop to
iterate through each element of an array. It's quite simple and awesome.

for (const country of countries) {
    console.log(country);
}

*/

const keys = Object.keys(variable);
for(let i = 0; i < keys.length; i++){
    console.log(variable[keys[i]]);
}

/* Just like the for..of loop for arrays, we have a for..in loop that does
the same with objects.

for (const element of variable) {
    console.log(element);
}

*/