// деректива обозначает что мы пишем на ES6 
// (исключает ошибки проектирования старого стандарта)
'use strict';

let person = {
    name: "Aleksandr",
    age: "27",
    isMarried: "false"
};
console.log(person.name);
    
// Аналогичная запись обращения к свойству "name" через скобки, но предпочтительней через .
// console.log(person['isMarried']);

let arr = ["apple.png","java.js","nilson.jpg"];
// console.log(arr[0]);


// alert("Hello my friend!");

// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = prompt("Вам есть уже 18?");
// console.log(answer);

// console.log(typeof(answer));

console.log("arr" + " -object");
console.log(4 + " -object");

let incr=10,
    decr=10;

console.log(++incr);
console.log(--decr);

let isChecked = true,
    isClose = false;

    console.log(isChecked && isClose);