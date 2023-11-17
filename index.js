// Javascript

// console.log(Math.random())
// let amount;
//  amount = 8;
// let  price = 8.1;

// console.log(typeof amount)
// console.log(typeof price)

// let messLength = 'length of message';
// console.log(messLength.length)

// let khmer = true;

// console.log(typeof khmer)

// console.log(Math.floor(7))

// let x = null;
// console.log(typeof x)

// const weeksInYear = Math.floor(365/7);

// const daysLeftOver = 365%7;

// console.log(` Ayear has ${weeksInYear} weeks and ${daysLeftOver} days`)

// let number = 100;
// number = number + 10;
// number += 10;
// console.log(number);

// let a;
// console.log(a)

// let name = "Tammy";
// const found = false;
// var age = 3;
// console.log(name, found, age);

// Control Flow

// let price = 1;
// let day = 'Monay'
// day === 'Monday' ? price += 15 : price -= 1;
// console.log( typeof price)

// const Taskcompleted = false;

// if(Taskcompleted) {
//     console.log('Task has been completed')
// } else if(!Taskcompleted){
//     console.log('Task has not been completed')

// } else {
//     console.log('There is other tasks not been completed')
// }

// let lateWork = false;
// let onTime = !lateWork;
// console.log(onTime)

// arrow functions

// const firstFunc = () => {
//     console.log('first print')
// }

// firstFunc();

// const secondFunc = (num) => {
//     console.log(num)
// }
// secondFunc(5);

// const thirdFunc = (num1, num2) => {
//     console.log(num1 + num2);
// }
// thirdFunc(8,9);

// Name function

// function rocketToMars(name) {
//     return name
// }
// console.log(rocketToMars('Chann'))
// console.log(typeof rocketToMars)

// Anonymous function

// const rocketToMars = function(){
//     return 'Boom'ß
// }
// console.log(rocketToMars)

// function myFunc() {
//     var glo = "Volvo"
//     var glo2 = 20000;
//     return `my car branded ${glo} with the price of ${glo2}$`
// }
// console.log(myFunc())

// function myFunc() {
//     var carName = "whatever";
//     console.log(carName)
// }
// myFunc();

// block scope variales
// const isLoggedIn = true;

// if(isLoggedIn) {
//     const statusMessage = 'User is Logged In.'
//     console.log(statusMessage)
// } else {
//     console.log('User is not Logged In.')
// }

// global variables

// const color = 'blue';

// function printColor() {
//     const colorScope = 'red';
//     console.log(`global variable is ${color.toUpperCase()} and scope variable is ${colorScope.toUpperCase()}`)
// }
// printColor();

// arr .push() method

// const number = [1,2,3,6];
// console.log(number[0])
// console.log(number[1])
// console.log(number[2])
// console.log(number[3])
// console.log(number.length)
// newArr = number.push(10,11,45);
// console.log('lenth',newArr)

// arr .pop() method

// const arrPeople  = [2,4,5,6];
// const popedPerson = arrPeople.pop();
// console.log(popedPerson)
// console.log(arrPeople)

// Mutable

// const names = ['Alice', 'Bob'];
// console.log(names)
// const addedName = names.push('Carl');
// console.log(addedName)

// for loop

// const Items = ['apricot','banana', 'cherry'];

// for (let i = Items.length - 1 ; i >= 0; i -= 1) {
//     console.log(`${i}. ${Items[i]}`)
// }

// do while loop

// x = 0;
// i = 0;

// do {
//     x += i;
//     console.log(x)
//     i++
// } while( i < 5 );

// for loop

// for (let i = 0; i < 4; i += 1) {
//   console.log(i);
// }

// loop through arr

// arrLoop = [12, 35, 7, 89, 4];
// for (let i = 0; i < arrLoop.length; i++) {
//   console.log(arrLoop[i]);
// }

// break keyword

// for (let i = 0; i < 99; i += 1) {
//   if (i >= 5) {
//     break;
//   }
//   console.log(i);
// }

// Nested for loop

// for (let outer = 0; outer < 2; outer += 1) {
//   for (let inner = 0; inner < 3; inner += 1) {
//     console.log(`${outer}-${inner}`);
//   }
// }

// while loop

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// functions assigned to variables

// let plusFive = (number) => {
//   return number + 5;
// };
// let f = plusFive;

// console.log(plusFive(3));
// console.log(f(9));

// callback functions

// const isEven = (n) => {
//   return n % 2 == 0;
// };

// let printMsg = (evenFunc, num) => {
//   const isNumEven = evenFunc(num);
//   console.log(`The number ${num} is an even number: ${isNumEven}.`);
// };
// console.log(printMsg(isEven, 4));

// const originalFunc = (num) => {
//   return num + 4;
// };
// const newFunc = originalFunc;
// console.log(newFunc.name);
// console.log(newFunc.toString());

// const apple = {
//   color: "Green",
//   price: {
//     bulk: "$3/kg",
//     smallQty: "$4/kg",
//   },
// };
// console.log(apple.color); // 'Green'
// console.log(apple.price.bulk); // '$3/kg'

// Clean Code

// use meaningful and pronounceable variable name
// Use the same vocabulary for the same type of variable
// use searchable names
// use explanatory variables
// avoid mental mapping

// const locations = ["khmer", "Vietnam", "Thailand"]

// locations.forEach(location => {
//   doStuff();
//   //...
//   //...
//   //...
//   dispatchEvent(location)
// });

// dont add unneeded context

// const Car = {
//   make: "Honda",
//   model: "Accord",
//   color: "Blue"
// };

// function paintCar(car, color) {
//   car.color = color;
// }

// Use default parameters instead of short circuiting or conditionals
// bad use case
// function createMicrobrewery(name) {
//   const breweryName = name || "Hipster Brew Co.";
//   // ...
// }
// good use case
// function createMicrobrewery(name = "Hipster Brew Co.") {
//   // ...
// }
// functions
// function arguments(2 or fewer ideally)
//bad
// function createMenu(title, body, buttonText, cancellable) {
//   // ...
// }

// createMenu("Foo", "Bar", "Baz", true);
//good
// function createMenu({ title, body, buttonText, cancellable }) {
//   // ...
// }

// createMenu({
//   title: "Foo",
//   body: "Bar",
//   buttonText: "Baz",
//   cancellable: true
// });
// function should do one thing
// bad
// function emailClients(clients) {
//   clients.forEach(client => {
//     const clientRecord = database.lookup(client);
//     if (clientRecord.isActive()) {
//       email(client);
//     }
//   });
// }
// good
// function emailActiveClients(clients) {
//   clients.filter(isActiveClient).forEach(email);
// }

// function isActiveClient(client) {
//   const clientRecord = database.lookup(client);
//   return clientRecord.isActive();
// }

//function names should say what they do
// functions should be one level of abstraction

// bad
// function parseBetterJSAlternative(code) {
//   const REGEXES = [
//     // ...
//   ];

//   const statements = code.split(" ");
//   const tokens = [];
//   REGEXES.forEach(REGEX => {
//     statements.forEach(statement => {
//       // ...
//     });
//   });

//   const ast = [];
//   tokens.forEach(token => {
//     // lex...
//   });

//   ast.forEach(node => {
//     // parse...
//   });
// }
// good
// function parseBetterJSAlternative(code) {
//   const tokens = tokenize(code);
//   const syntaxTree = parse(tokens);
//   syntaxTree.forEach(node => {
//     // parse...
//   });
// }

// function tokenize(code) {
//   const REGEXES = [
//     // ...
//   ];

//   const statements = code.split(" ");
//   const tokens = [];
//   REGEXES.forEach(REGEX => {
//     statements.forEach(statement => {
//       tokens.push(/* ... */);
//     });
//   });

//   return tokens;
// }

// function parse(tokens) {
//   const syntaxTree = [];
//   tokens.forEach(token => {
//     syntaxTree.push(/* ... */);
//   });

//   return syntaxTree;
// }

// remove duplicate code

// 9 javascript Tricks To Code Like A Pro!

// 1. arrow function

// const multiPly = (x, y) => {
//   return x * y;
// };
// console.log(multiPly(7, 3));

// // 2. spread operator

// const parts = ["shoulders", "knees"];
// const lyrics = ["head", ...parts, "and", "toes"];
// console.log(lyrics);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// arr1 = [...arr1, ...arr2, 7];
// console.log(arr1);

// const add = (a, b, c) => a + b + c;

// let arr = [1, 2, 3];
// console.log(add(...arr));

// rest operator

// const blend = (ice, liquid, ...theRest) => {
//   console.log(theRest);
// };

// blend("ice", "milk", "banana", "strawberry");

// 4.Fill arrays

// let arr = Array(5).fill("");
// console.log(arr);

// 5. computed obj property names

// let key = "A_DYNAMIC_KEY";

// let obj = {
//   [key]: "A_VALUE",
// };
// console.log(obj);

// 6. good ways to console.log()

// use console.table() when you have arr of objects

// const foo = { name: "Suibin", age: 30, coder: true };
// const bar = { name: "Borja", age: 40, coder: true };
// const baz = { name: "Paul", age: 50, coder: false };
// console.table([foo, bar, baz]);

// 7. obj destructuring

// const dog = {
//   name: "Nala",
//   gender: "female",
//   age: 10,
// };

// const func = ({ name, gender, age }) => {
//   return `${name} is ${age} years old and is a ${gender} dog.`;
// };
// console.log(func(dog));

// const func2 = (animal) => {
//   const {name, age} = animal;
//   return `${name} is ${age} years old.`
// }
// console.log(func2(dog))

// 8. use Reduce() map() and filter() instead of regular for loops

// let orders = [1, 2, 3, 4, 5];

// const total = orders.reduce((acc, cur) => {
//   return acc + cur;
// });
// console.log(total);

// const total2 = orders.map((item) => {
//   return item * 2;
// });
// console.log(total2);

// js es6
// let and const keyword

// let x = 2;
// let x = 5;
// // console.log(x);
// const num = 4;
// console.log(num);

// arrow function

// const multiPly = (x, y) => x * y;
// console.log(multiPly(5, 2));

// the spread operator

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.table(year);
