/**
 * Classes ES6
 */
function Couses (name, price){
    this.name = name;
    this.price = price
    this.getName = function(){
        return this.name
    }
}
const php = new Couses("PHP", 1000)
console.log(php)

class CourseClass{
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
    getName(){
        return this.name;

    }
    getPrice(){
        return this.price;
    }
    
}

const classCourse = new CourseClass("JavaScript", 1500);
console.log(classCourse);

//Enhanced object literals trong javascript ES6
let person = {
  name: "Lien",
  sayHello() {
    console.log("Hello, I'm " + this.name);
  }
}; 
person.sayHello(); // Hello, I'm Lien

// Default parameter values trong JavaScript ES6
function logger(log = 'Giá trị mặc định'){
    console.log(log)
}
logger() ; //undefined

function logger2(log, isAlert = false){
    if(isAlert) return alert(log)
    console.log(log)
}
logger('Message', true) ; //undefined

//Destructuring trong JavaScript ES6
var arr2 = ['JS', 'Java', 'PHP']
var [a,b,c] = arr2;
console.log(a)

const course = {
    name: "ReactJS",
    price: 2000,
    teacher: "John Doe",
    children: {
        name: 'Ruby'
    }
};

// Object destructuring
const { name, price, teacher } = course;
console.log(name);    // ReactJS
console.log(price);   // 2000
console.log(teacher); // John Doe

const { children: { name: childName } } = course;
console.log(childName); // "Ruby"


// Array destructuring
const languages = ["JavaScript", "Python", "Ruby"];
const [first, second, third] = languages;
console.log(first);  // JavaScript
console.log(second); // Python
console.log(third);  // Ruby

// Rest parameters
var [a, b, ...rest] = arr2
console.log(rest)

// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr3 = [...arr1, 4, 5];
console.log(arr3); // [1, 2, 3, 4, 5]

// Spread operator with objects
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };
console.log(obj2); // { x: 1, y: 2, z: 3 }

// Rest parameter in functions
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// var courses = {
//     name1: 'JS',
//     price: 1000,
//     img: 'img',
//     children: {
//         name: 'Ruby'
//     }
// }
// var { name, price, img, children } = courses;
// console.log(name);      // "JS"
// console.log(price);     // 1000
// console.log(img);       // "img"
// console.log(children); 

