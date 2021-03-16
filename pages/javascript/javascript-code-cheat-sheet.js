import { useEffect } from 'react';
import Link from "next/link";

function reactBasicsCustomHooks() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Code Cheat Sheet</h2>
                <p>Various Javascript code snippets that I often find myself looking up....</p>
<br />      

            </div>

            <div className="container">    	
<pre><code>{`//console methods
console.log();

console.table({a: 'test 1',b: 'test 2'});
console.clear();

console.time('time');
    console.log('hello timer');
    console.log('hello timer');
    console.log('hello timer');
    console.log('hello timer');
    console.log('hello timer');
    console.log('hello timer');
    console.log('hello timer');
console.timeEnd('time');

//common array methods: PUSH() ONTO END OF ARRAY
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

//common array methods: UNSHIFT() ONTO FRONT OF ARRAY;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits);

//common array methods: POP() OFF END OF ARRAY:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log({fruits.pop()} + ' was removed from array');

//common array methods: SHIFT() REMOVES THE FIRST ITEM OF ARRAY:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);

//common array methods: SPLICE() REMOVE (OR INSERTS) VALUE(S) AT INDEX
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //inserts "Lemon" and "Kiwi" at the 2nd position
console.log(fruits);

//common array methods: REVERSE() REVERSES ARRAY ITEMS
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);

//common array methods: SORT() SORTS ALPHA AND NUMERIC LISTS DESC AND ASC
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b}); //to return in opposite order 'return b-a'
console.log(points);

//primitive data types - stored directly in the location the variable accesses (stored on the stack)
//string, number, boolean, null, undefined, symbols(es6)

//reference data types - accessed by reference - a pointer to a location in memory (stored on the heap)
//arrays, objects, functions, dates, all other types not primitive

//use the typeof operator to tell you exactly what Javascript thinks your variable is
const testName="Rich Leach";
console.log(typeof testName);

//use this code to validate submitted form fields
let car;
if (typeof(car) === 'undefined' ) {console.log('car undefined')};

//number to string
//let value = String(5);

let value = 5;
console.log(typeof value);
console.log(value.toFixed(2));

//type coercion
const val1=5;
const val2=6;

const sum = val1+val2;
console.log(sum);

//random number generator (between 1 and 20)
let random =  Math.floor(Math.random() * 20 +1);
console.log(random);

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Rich';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Rich ';
val += 'Leach';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('foo');

//another includes() example
let str = "Hello world, welcome to the universe.";
let n = str.includes("world");
console.log(n);

console.log(val);

//template literals
let scooby = 'snack food';
<div> My favorite snack food is: '{scooby}'</div>

// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function over50(num){
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);


//object literals
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
      city: 'Miami',
      state: 'FL'
    },
    getBirthYear: function(){
      return 2017 - this.age;
    }
  }
  
  let val;
  
  val = person;
  // Get specific value
  val = person.firstName;
  val = person['lastName'];
  val = person.age;
  val = person.hobbies[1];
  val = person.address.state;
  val = person.address['city'];
  val = person.getBirthYear();
  
  console.log(val);
  
  const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
  ];
  
  for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
  }

//DATES
let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

//IF ELSE/CONDITIONAL CODE
// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // EQUAL TO
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log('The ID is ' +{id});
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log({name} +' is a child');
} else if(age >= 13 && age <= 19){
  console.log({name} + 'is a teenager');
} else {
  console.log({name} + ' is an adult');
}

// OR ||
if(age < 16 || age > 65){
  console.log({name} +' can not run in race');
} else {
  console.log({name} + 'is registered for the race');
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

//SWITCH/CASE STATEMENTS
const color = 'yellow';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log('Today is ' +{day});

// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3){
  return x*x;
};

// console.log(square());

// IMMEDIATLEY INVOKED FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Rich');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log('Edit todo ' +{id});
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

//LOOPS
// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number '+ i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log({index} + ' : ' +{car});
//   console.log(array);
// });

// MAP
// const users  = [
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log({x} +' : ' +{user[x]});
}

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);

// Global Scope
var a = 1;
let b = 2;
const c = 3;

/* function test() {
   var a = 4;
   let b = 5;
   const c = 6;
   console.log('Function Scope: ', a, b, c);
 }

 test(); */

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log('Loop: ' +{a}');
// }

console.log('Global Scope: ', a, b, c);

//DOCUMENT OBJECT MANIPULATION
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

//convert to array
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);

//SELECTING SINGLE DOM ELEMENTS

// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

//SELECTING MULTIPLE DOM ELEMENTS
// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Conver HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = {index} + ': '+ 'Hello';
// });

// console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = '{index} '+ : +' Hello';
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);

//TRAVERSING THE DOM
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);

//CREATING HTML ELEMENTS
// Create element
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

//EVENT LISTENERS & THE EVENT OBJECT
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

//MOUSE EVENTS
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log('EVENT TYPE: ' + {e.type});

  heading.textContent= 'MouseX: '+{e.offsetX} + 'MouseY: '+{e.offsetY}';

  document.body.style.backgroundColor = 'rgb({e.offsetX}, {e.offsetY}, 40)';
}

//KEYBOARD & INPUT EVENTS
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(EVENT TYPE: {e.type});

  //console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}

//LOCAL STORAGE
// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});

//CALCULATE AGE AND CREATE NEW CLASS
// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const rich = new Person('Rich', '9-10-1981');
console.log(rich.calculateAge());

//PROTOTYPAL INHERITANCE
// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return 'Hello there '+{this.firstName} {this.lastName};
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return 'Hello there '+ {this.firstName} {this.lastName} + 'welcome to our company';
}

console.log(customer1.greeting());


//WORKING WITH AJAX AND JSON

document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = '
        <ul>
          <li>ID: {customer.id}</li>
          <li>Name: {customer.name}</li>
          <li>Company: {customer.company}</li>
          <li>Phone: {customer.phone}</li>
        </ul>
      ';

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}


// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += '
        <ul>
          <li>ID: {customer.id}</li>
          <li>Name: {customer.name}</li>
          <li>Company: {customer.company}</li>
          <li>Phone: {customer.phone}</li>
        </ul>
      ';
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}

//ES6 PROMISES
const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += '<li>{post.title}</li>';
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});

//ARROW FUNCTIONS IN API CALLS
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}


// Get local json data
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += '<li>{post.title}</li>';
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += '<li>{user.login}</li>';
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

//ARROW FUNCTIONS RULES
// Single param does not need parenthesis
// const sayHello = name => console.log('Hello '+{name}');

// Multuiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log('Hello '+{firstName} {lastName}');

// sayHello('Rich', 'Leach');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);

//ERROR HANDLING WITH TRY/CATCH
const user = {email: 'jdoe@gmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // eval('Hello World');

  // Will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    //throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch(e) {
  console.log('User Error: '+{e.message}');
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');

//REGULAR EXPRESSIONS - EVALUATION FUNCTIONS
let re;
re = /hello/;
re = /hello/i; // i =  case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match if not found retuns -1
// const str = 'Rich Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 


// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/;      // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;      // Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/;    // Word character - alphanumeric or _
re = /\w+/;    // + = one or more
re = /\W/;    // Non-Word character
re = /\d/;    // Match any digit
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str = 'dkjekdxydjekdj';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log({str} +'matches '+{re.source});
  } else {
    console.log({str} + 'does NOT match ' +{re.source});
  }
}

reTest(re, str);

//Javascript Promises
const promise = asyncFunc();

promise.then(result => {
    console.log(result);
});

//Javascript Promises (Async/Await)
function asyncTask(i) {
    return new Promise(resolve => resolve(i + 1));
}
async function runAsyncTasks() {
    const res1 = await asyncTask(0);
    const res2 = await asyncTask(res1);
    const res3 = await asyncTask(res2);
    return "Everything done"
}
runAsyncTasks().then(result => console.log(result));

//RXJS OBSERVABLES (this code is from an Angular (.ts) file)
ngOnInit() {
    const person: Person = {
      name: "Rich"
    };
    //+++++++++++ CONVERTING OBJECTS, PROMISES TO OBSERVABLES
    //convert something (anything) to an observable: use Rxjs "of" operator. This code converts 
	//the "person" object to an observable
    const personObs: Observable = of(person);

    //subscribe to the stream, log the observable's data
    personObs.subscribe(data => console.log(data));

    //OR to create an observable from a promise....
    //create the promise
    const personPromise: Promise = Promise.resolve(person);

    //convert the promise to an observable using the "from" operator.
    const personObsFromPromise: Observable = from(personPromise);

    //display the promise to observable
    personObsFromPromise.subscribe(data => console.log(data));

    //+++++++++++ CONVERTING OBJECTS, PROMISES TO OBSERVABLES - END

    //PIPE, MAP operators on converted objects
    const source = of("Richard Leach");

    source
      .pipe(map(name => name.toUpperCase()))
      .subscribe(mappeddata => console.log(mappeddata));

    //PIPE, MAP operators on converted objects - END
  }
  
// Creation of an Observable
const observable = new Observable(observer => {
  for (let i = 0; i < 3; i++) {
    observer.next(i);
  }
});
// Usage
observable.subscribe(value => console.log(value));  `}
</code></pre>

            </div>
        </div>

        )
    }    

export default reactBasicsCustomHooks
