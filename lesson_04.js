/**
 * JavaScript ES6
 * 1. Let, const
 * 2. Template Literals
 * 3. Multi-line String
 * 4. Arrow function
 * 5. Classes
 * 6. Defaut parameters values
 * 7. Destructuring
 * 8. Rest parameters
 * 9. Spead
 * 10. Enhanced object literals
 * 11. Tagged template literals
 * 12. Modules
 */
// 1. Var / Let/ Const: scope, Hosting
// 2. Const / var, let: Assignment
// 3. Code block: if else, loop, {}, ...

//4. Khái niệm arrow function ( Hàm mũi tên)
// Decression fnc
function logger(log) {
    console.log(log)
}
logger('Message');

// Expression func
const loggerEx = function (log){
 console.log(log)
}

// Arrow func
const sum = (a, b) => a+b;
console.log(sum(1,2))

const sumObject = (a,b) => ({a:a, b:b})
console.log(sumObject(1,2))

const log = log => console.log(log)

const courses = {
    name: 'JS',
    getName: () => this
}
console.log(courses.name)

/**
 * Không thể dùng allow fnc để tạo contructor
 */

/**
 * Classes trong ES6
 */
