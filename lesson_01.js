console.log("Node.js is working!");
// innerHTML 
function myFunction() {
    document.getElementById("demo").innerHTML = "<b>Xin chào</b>";
    console.log(document.getElementById("demo").innerText);
    // document.getElementById("demo").innerText = "<b>Xin chào</b>";
    // document.write(5 + 6);
    // window.alert(5 + 9)
    // alert(1 + 2)

    document.getElementById("demo").innerHTML = 10.50;
    let x = 5;
    const frame = "John"
    document.getElementById("demo").innerHTML = frame + " is " + x + " Years old"
    setTimeout(() => {
        debugger;
    }, 5000);

}
//2. Biến và kiểu dữ liệu
/**
 * let, const, var (nên dùng let và const) 
 * Kiểu dữ liệu:
  number (số)
  string (chuỗi)
  boolean (true/false)
  null, undefined 
  object, array
 * 
 */
let name = "Lien";
const age = 25;
let isStudent = true;
/**
 * 1. Var 
 * Biến chỉ tồn tại trong function, không có block scope ( Nghĩa là khi khai báo trong function thì var sẽ sống trong toàn bộk function đó, kể cả khi được khai báo trong if, for, white)
 * Có thể khai báo lại cùng tên biến trong scope
 * Bị hoisting (có thể dùng trước khi khai báo, nhưng giá trị = undefined).
 */
function testVar() {
    console.log(x) // Return undefined
    if (true) {
        var x = 10;
        var x = 22; // Khai báo cùng tên
    }
    console.log(x); // 10 (vẫn truy cập được ngoài block)
}

/**
 * 2. Let ( Mới, nên  dùng)
 * Có block scope, chỉ tồn tại {...}
 * Không thể khai báo lại cùng tên biến trong cùng scope.
 * Có thể gán lại giá trị.
 * Cũng bị hoisting nhưng không dùng được trước khi khai báo (TDZ – temporal dead zone).
 */
function testLet() {
    if (true) {
        let y = 20;
    }
    //console.log(y); // Error (không truy cập ngoài block) - Return: ReferenceError: y is not defined
}
/**
 * 3. Const
 * Scope: giống let, có block scope.
 * Không thể khai báo lại. 
 * Không thể gán lại giá trị mới sau khi khởi tạo.
 * Tuy nhiên, nếu là object hoặc array thì vẫn thay đổi bên trong được (vì tham chiếu không đổi).
 */
function testConst() {
    const PI = 3.14;
    // PI = 3.15; Error
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr); // [1, 2, 3, 4]
}
testVar();
testLet();
testConst();

console.log("II. Arithmetic Operators - Toán tử số học")
function testOperators(a, b, operator) {
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : "Không thể chía cho 0";
            break;
        case '%':
            result = a % b;
            break;
        default:
            result = "Toán tử không hợp lệ";
    }
    return result;
}

console.log(testOperators(10, 5, '+')); // 15
console.log(testOperators(10, 5, '*')); // 50
console.log(testOperators(10, 0, '/')); // Không thể chia cho 0
console.log(testOperators(10, 2, '/'));
console.log(testOperators(7, 2, '%'));



function testArithmetic(a, decrementing) {
    let result;
    switch (decrementing) {
        case '--':
            a--
            result = a;
            break;
        case '++':
            a++
            result = a;
            break;
        case '**':
            result = a ** 3
            break;

        default:
            result = "Toán tử không hợp lệ";
    }
    return result;
}
console.log(testArithmetic(5, '--'), " Giảm 1 giá trị")
console.log(testArithmetic(5, '++'), " Tắng 1 giá trị")
console.log(testArithmetic(5, '**'), " Luỹ thừa")

/**
 * Built-in 
 * 1. Alert
 * 2. Console
 * 3. Comfirm
 * 4. Prompt
 * 5. Set timeout
 * 6. set interval
 */
// confirm("Message");
// prompt("Xác nhận message")

/**
 * Giới thiệu về toán tử trong JS
 * 1. Toán tử số học - Arithmetic
 * 2. Toán tử gán - Aggignment
 * 3. Toán tử so sánh - Comparison
 * 4. Toán tử logic - Logical
 */

function toanTuSoSanh() {
    let a = 1;
    let b = 2

    // if (a < b) {
    //     alert("Đúng");
    // }
    console.log(a + b, ++a, a + b, "++ a")
    console.log(a + b, a++, a + b, "a ++ ")
}
toanTuSoSanh()

/**
 * Toán tử ++ -- 
 * Prefix, PostFix
 * PreFix: Tăng/ Giảm giá trị trước rồi trả về giá trị mới ( ++a) _. thay đổi biến trước rồi mới dùng trong biểu thức.
 * PostFix: Trả về giá trị hiện tại trước, rồi mới tăng/giảm. (a++) -> dùng biến trong biểu thức trước, rồi mới thay đổi sau.
 */
let a = 5;
let x = ++a;  // a tăng lên 6, rồi gán vào x
console.log(a , " ++a "); // 6
console.log(x , "Gắn cho x"); // 6

let b = 5;
let y = b++; //// gán y = 5 trước, sau đó a mới tăng thành 6
console.log(b, " b++"); // 6
console.log(y, "Gán cho y"); // 5

var number = 6
// var output1 = number++ - --number; // number (1) = 6, khi set sang number (2) thì number(2) lúc này = 7 -> --number= 6

var output = ++number *2 - number--*2 // number (1)= 7 -> 7*2, number(2) = 7 -> 7*2 = 14, sau khi chạy xong number (1) - number (2) -> thực hiện number -- -> number = 6
console.log(output, " thực hiện phép toán ")

/**
 * Toán tử gán ( assignment)
 * = | += | -= | *= | /= | **= |
 */
/**
 * Toán sử so sánh
 * == | !> | > | < | >= | <= |
 */
/**
 * Boolean 
 */
/**
 * If else
 * 0 | false | "-" | NaN | null
 */

/**
 * Toán tử logical
 * 1. && -> And
 * 2. ||  -> Or
 * 3. ! - Not
 */

/**
 * Kiểu dữ liệu trong js 
 * 1. Dữ liệu nguyên thuỷ (Primitive): Number | String | Boolean | Undefined | Null | Symbol  -> là kiểu dữ liệu được tạo ra và ghi vào vùng nhớ, nếu gán lại nó sẽ ghi vào vùng nhớ khác 
 *  -> primitive lưu trực tiếp giá trị → copy ra biến khác là tách biệt.
 * 2. Dữ liệu phức tạp: Function | Object vbv-> non-primitive lưu tham chiếu → thay đổi qua 1 biến thì biến kia cũng thay đổi theo.
 * Object   : gồm nhiều dạng: 
 * +      + Object thuần: { key: value }
 *        + Array: [1, 2, 3]
 *        + Function: function() {}
 *        + Date, RegExp, Map, Set...
 */

function testPrimitive() {
    let a = 10;
    let b = a;   // copy giá trị 10

    b = 20;      // thay đổi b
    console.log(a); // 10 (không bị ảnh hưởng)
    console.log(b); // 20
}
testPrimitive();

function testNonPrimitive() {
    let obj1 = { name: "Liên" };
    let obj2 = obj1;  // copy tham chiếu

    obj2.name = "Hoa";
    console.log(obj1.name); // "Hoa" (bị ảnh hưởng!)
    console.log(obj2.name); // "Hoa"
}

testNonPrimitive();

var myFunction = function() {
    console.log("Hello")
}
var myObject = {
    name: "Liên",
    helloFunction: function () {
        console.log("Xin chào " + this.name);
    }
}
myObject.helloFunction();
/**
 * Toán tử  : === | !==
 * ==: Equality : ép kiểu, so sánh value
 * ===: so sánh nghiêm ngặt : cùng kiểu dữ lệu và giá trị, so sánh tuyệt đối 
 * !== : tuyệt đối về value và kiểu dữ liệu
 * != : tương đối chỉ so sánh về mặt value
 */

/**
 * Chuối trong javascript
 * 1. Tạo chuỗi: 
 * - các cách để tạo chuỗi
 * 
 */
// var fullName = new String ("Liên") // -> Khởi tạo đối tượng, tạo ra 1 instant
// console.log(typeof fullName) // object

var fullName =  "Liên" // -> Khởi tạo đối tượng, tạo ra 1 instant
console.log(typeof fullName) // String -> Nên dùng -> Nhanh hơn

/**
 * Một số case sử dụng backslash (\)
 */
var fullName ='Liên \'phùng thị\''
console.log(fullName)

var firstName = "Liên";
var lastName = "Phùng Thị Liên"
console.log(`Tôi là: ${firstName} ${lastName}`) 

console.log("CÁC CÁCH LÀM VIỆC VỚI CHUỖI")
/**
 * 1. Length 
 * 2. Find index : Tìm được vị trí đầu tiên nếu chỉ truyền chữ, nếu truyền index 
 * 3. Cut String 
 * 4. Replace
 * 5. Convert to upper case
 * 6. Convert to lower case
 * 7. Trim
 * 8. Split
 * 9. Get a character by index
 */
console.log("Find index in String ")
var myString = " HOC JS TẠI F8! "
console.log(myString.indexOf("JS", 5))

// console.log(myString.search())
console.log(myString.slice(4, 6))
console.log(myString.slice(4))
console.log(myString.slice(0))
console.log(myString.slice(-3, -1)) // Cắt từ trái qua phải

console.log(myString.replace(/JS/g, "JavaScript"))
console.log(myString.length)
console.log(myString.trim())
console.log(myString.length)

var languages = 'Java, PHP, Python'
console.log(languages.split(", "))
const myString2 = 'Phung Lien'
console.log(myString2.charAt(1))
console.log(myString2.charAt(100))
console.log(myString2[1])
console.log(myString2[100])

/**
 * Kiểu số ( Number) trong js
 * 1. Tạo giá trị number
 * 3. Làm việc với number : 
 * - To String 
 * - To Fixed
 */
function testNumber() {
var result = 20 / 'ABC'
var a = 20
var PI = 3.14
console.log(result)    // NaN 
console.log(a.toString())
console.log(PI.toFixed(1))
}
testNumber()

/**
 * Mảng - Array
 * 1. To String 
 * 2. Join : Nối chuỗi
 * 3. Pop : Removes the last element from an array and returns it
 * 4. Push : Appends new elements to the end of an array, and returns the new length of the array.
 * 5. Shift : Removes the first element from an array and returns it
 * 6. Unshift : Inserts new elements at the start of an array, and returns the new length of the array.
 * 7. Splipcing; Vừa có thể xóa, thêm, vừa có thể thay thế phần tử.
 * 8. Concat : Combines two or more arrays. This method returns a new array without modifying any existing arrays.
 * 9. Slicing: Cắt mảng từ start đến end - 1, trả về mảng mới (không ảnh hưởng mảng gốc). (copy 1 đoạn, không thay đổi mảng gốc)
 * 
 */
let arr = ["Java", "JS", "PHP", "Python", null, undefined, function(){}, 123];
console.log(Array.isArray(arr) )
console.log(arr.length)
console.log(arr[0])
// console.log(arr.join(', ')) // Java, JS, PHP, Python, , , function(){}, 123
console.log(arr.pop()) // 123
console.log(arr) 

console.log(arr.push("Thêm element", "Liên nè")) // Length 9
console.log(arr) 

console.log(arr.shift()) // Java
console.log(arr) 

console.log(arr.unshift("Liên", "Java", "Ruby")) // 11
console.log(arr) 

let arr3 = ["Java", "JS", "PHP", "Python", null, undefined, function(){}, 123];

// Xóa 1 phần tử từ index
arr3.splice(1, 1); // JS
console.log("Xóa 1 phần tử từ index ", arr3); //

// Thêm phần tử vào index 
arr3.splice(2, 0, "Python"); //Thêm Python vào vị trí 2
console.log( "Thêm phần tử vào index " , arr3); // ["Java", "PHP", "Python", "Python", null, undefined, function(){}, 123];

// Thay thế phần tử tại index
arr3.splice(0, 2, "C++", "C#", "C");  // Java, PHP
console.log( "Thay thế phần tử tại index ",  arr3); // ["C++", "Python", "Python", null, undefined, function(){}, 123]


let arr2 = [3, 4];
console.log(arr.concat(arr2, [5, 7])) 

let arr4 = ["a", "b", "c", "d"];
console.log(arr4.slice(1, 4)); //[ 'b', 'c', 'd' ] end-1
console.log(arr4.slice(2)); //[ 'c', 'd' ]
console.log(arr4);     

/**
 * Toán tử 3 ngôi ( Conditional  Operator)
 * condition ? expression1 : expression2
 * Nếu condition đúng thì trả về expression1, sai thì trả về expression2
 * 
 */
let course = {
    name: "JS",
    coin: 250
}
let result = course.coin > 0 ? `${course.coin} Coins` : "Miễn phí"
console.log(result)

let age2 = 18;
let message = age2 >=18 ? "Được vào" : "Không được vào"
console.log(message)

/**
 * Loops - Vòng lặp
 * 1. For
 * 2. For/in : Lặp qua key của đối tượng (object) hoặc chỉ số của mảng (array)
 * 3. For/of : Lặp qua giá trị của mảng (array)
 * 4. While
 * 5. Do/while
 */
let myArray = [5, 2, 9, 1, 7];// Chưa sắp xếp

// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
// }

// for (let index in myArray) {
//     console.log(myArray[index]);
// }
for (let value of myArray) {
    console.log(value);
}
// Sắp xếp mảng tăng dần
/**
 * 1. Vòng ngoài: duyệt qua từng phần tử trong mảng (i)
 * 2. Vòng trong: so sánh phần tử hiện tại với các phần tử kế tiếp (j)
 * Vòng 1: (i = 0):  length j = length -1 - i = 4
 * - (5, 2) -> (2, 5, 9, 1, 7)
 * - (5, 9) -> (2, 5, 9, 1, 7)
 * - (9, 1) -> (2, 5, 1, 9, 7)
 * - (9, 7) -> (2, 5, 1, 7, 9) -> Kết thúc vòng 1, 9 đã được sắp xếp đúng vị trí cuối cùng
 * Vòng 2: i = 1, length j = length -1 - i = 3
 *  -(2, 5) -> (2, 5, 1, 7, 9)
 * -(5, 1) -> (2, 1, 5, 7, 9)
 * -(5, 7) -> (2, 1, 5, 7, 9)
 * -> Kết thúc vòng 2, 7 đã được sắp xếp đúng vị trí thứ 2 từ dưới lên
 * Vòng 3: i = 2, length j = length -1 - i = 2
 * - (2, 1) -> (1, 2, 5, 7, 9)
 * - (2, 5) -> (1, 2, 5, 7, 9)
 * -> Kết thúc vòng 3, 5 đã được sắp xếp đúng vị trí thứ 3 từ dưới lên
 * Vòng 4: i = 3, length j = length -1 - i = 1
 * - (1, 2) -> (1, 2, 5, 7, 9)
 * 3. Nếu phần tử hiện tại lớn hơn phần tử kế tiếp, hoán đổi vị trí của chúng.
 * 4. Lặp lại quá trình này cho đến khi mảng được sắp xếp hoàn toàn.
 */
for (let i = 0; i < myArray.length; i++) {  // Vòng ngoài mảng: chạy từ 0 đến độ dài mảng -1
    for (let j = 0; j < myArray.length - 1 - i; j++) { // Vòng trong: chạy từ 0 đến độ dài mảng -1 - i (vì mỗi lần chạy vòng ngoài thì sẽ có 1 phần tử được sắp xếp đúng vị trí cuối cùng, nên không cần xét lại)
       if (myArray[j] > myArray[j + 1]) {
          // Hoán đổi
          let temp = myArray[j]; // Lưu giá trị hiện tại vào biến tạm
          myArray[j] = myArray[j + 1]; // Gán giá trị kế tiếp cho vị trí hiện tại
          myArray[j + 1] = temp; // Gán giá trị tạm cho vị trí kế tiếp
       }
    }
}
console.log(myArray);

/**
 * While: Lặp lại một khối mã trong khi điều kiện là đúng
 * Do/While: Lặp lại một khối mã ít nhất một lần, sau đó kiểm tra điều kiện. Lần đầu tiên sẽ chạy trước, sau đó mới kiểm tra điều kiện.
 */
let i = 0;
while (i < myArray.length) { 
    console.log(myArray[i]);
    i++;
}

let index = 0;
let isSuccess = false;
console.log("Do/While")
do {
    //Code
    index++;
    console.log("Nạp thẻ lần 1" + index);
    if (true) {
        isSuccess = true;
    }

} while (index <= 3 && !isSuccess); // Viết điều kiện ở cuối, nên sẽ chạy ít nhất 1 lần

/**
 * Break, Continue
 * - Break: Dừng vòng lặp
 * - Continue: Dừng vòng lặp hiện tại, và chuyển sang vòng lặp tiếp theo
 */
console.log("Break, Continue")
for (let i = 2; i < 10; i++) {
   if (i % 2 !== 0) {
        break; // Dừng vòng lặp ;
    }
   console.log("Break:: ", i);
    
}
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue; // Dừng vòng lặp hiện tại, và chuyển sang vòng lặp tiếp theo
    }
 console.log("Continue:: ", i);
}

/**
 * Array methods: 
 * 1. forEach : Duyệt qua từng phần tử của mảng
 * 2. Every : Kiểm tra tất cả phần tử trong mảng có thỏa mãn điều kiện hay không
 * 3. Some : Kiểm tra ít nhất một phần tử trong mảng có thỏa mãn điều kiện hay không
 * 4. Find : Tìm kiếm phần tử trong mảng
 * 5. Filter : Lọc phần tử trong mảng
 * 6. Map : Biến đổi mảng
 * 7. Reduce : Tính toán giá trị duy nhất từ mảng (tổng, tích, ...)
 */
/**
 * 1. forEach: Duyệt qua từng phần tử của mảng
 * Không trả về giá trị
 */
let courses = [
    { id: 1, name: "JS", coin: 250 },
    { id: 2, name: "HTML, CSS", coin: 0 },
    { id: 3, name: "Ruby", coin: 350 }
];
courses.forEach(function(course, index) {
    console.log(index, course);
});
/** 2. Every: Kiểm tra tất cả phần tử trong mảng có thỏa mãn điều kiện hay không
 * Trả về true/false
 */
var isEvery = courses.every(function(course, index){
    return course.coin > 0;
});
console.log(isEvery); // false

/** 3. Some: Kiểm tra ít nhất một phần tử trong mảng có thỏa mãn điều kiện hay không
 * Trả về true/false
 */
var isSome = courses.some(function(course, index){
    return course.coin === 0;
});
console.log(isSome); // true

/** 4. Find: Tìm kiếm phần tử trong mảng
 * Trả về phần tử tìm thấy đầu tiên
 * Nếu không tìm thấy trả về undefined
 */
var foundCourse = courses.find(function(course, index){
    console.log(index, course, ":::Find");
    return course.name === "HTML, CSS";
});
console.log(foundCourse, " ::Find"); // { id: 2, name: "HTML, CSS", coin: 0 }
/** 5. Filter: Lọc phần tử trong mảng
 * Trả về mảng mới chứa các phần tử thỏa mãn điều kiện
 */
var filteredCourses = courses.filter(function(course, index){
    return course.name === "HTML, CSS";
});
console.log("Filtered Courses: ", filteredCourses); // [ { id: 2, name: "HTML, CSS", coin: 0 } ]

/** 6. Map: Biến đổi mảng
 * Trả về mảng mới sau khi biến đổi
 */

var newCourses = courses.map(function(course, index){
    return {
        id: course.id,  
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinText: `Giá: ${course.coin} VNĐ`
    };
});
console.log("New Courses: ", newCourses);

/** 7. Tính toán giá trị duy nhất từ mảng (tổng, tích, ...)
 * Trả về giá trị duy nhất sau khi giảm mảng
 */
let total = 0;
for (let course of courses) {
    total += course.coin;
}
console.log("Tổng giá trị khóa học: ", total);

let totalCoin = courses.reduce(function(total, course, index){
    return total + course.coin;
}, 0);
console.log("Tổng giá trị khóa học: ", totalCoin);

function coinHandler(accumulator, currentValue, currentIndex, array) {
    currentIndex ++;
    console.table({
        'Lượt chạy': currentIndex,
        'Biến tích trữ': accumulator,
        'Giá khoá học': currentValue.coin,
        'Tổng cộng': accumulator + currentValue.coin
    });
    return accumulator + currentValue.coin;
}
let totalCoin2 = courses.reduce(coinHandler, 0);
console.log("Tổng giá trị khóa học: ", totalCoin2);

/**
 * Khi sử dụng initialValue (giá trị khởi tạo) trong reduce,
 *  - Nếu không truyền initialValue, reduce sẽ lấy phần tử đầu tiên của mảng làm giá trị khởi tạo (accumulator),
 *    và bắt đầu lặp từ phần tử thứ hai.
 *  - Nếu truyền initialValue, reduce sẽ sử dụng giá trị này làm giá trị khởi tạo,
 *    và bắt đầu lặp từ phần tử đầu tiên của mảng.
 * 
 */
/**
 * Không truyền initialValue
 * Giả sử mảng có 3 phần tử: [A, B, C]
 * - Lần chạy 1: accumulator = A, currentValue = B
 * - Khi nào truyền initialValue
 *
 */
let arr5 = [1, 2, 3];
let result1 = arr5.reduce(function(accumulator, currentValue, currentIndex, array) {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
});
console.log(result1); // 6

/**
 * Flat : Làm phẳng mảng
 * FlatMap : Kết hợp map và flat
 */
let depthArray = [1, 2, [3, 4], 5, [6, 7, 8]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(depthArray.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

var topics = [
    {
        topic: "Front-end",
        courses: [
            { id: 1, name: "HTML, CSS", coin: 0 },
            { id: 2, name: "JavaScript", coin: 250 }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            { id: 3, name: "NodeJS", coin: 300 },
            { id: 4, name: "Ruby", coin: 350 }
        ]
    }
];
var newCourses2 = topics.reduce(function(couses, topic) {
    return couses.concat(topic.courses);
}, []);
console.log(newCourses2);   
var htmls = newCourses2.map(function(course) {
    return `<div>
        <h2>${course.name}</h2>
        <p>Giá: ${course.coin} VNĐ</p>
    </div>`;
});
console.log(htmls.join(''));

/**
 * Phương thức includes trong JavaScript
 * Kiểm tra sự tồn tại của một phần tử trong mảng hoặc chuỗi
 * Trả về true nếu tìm thấy, ngược lại trả về false
 */

var title = "Học JavaScript tại F8!";
console.log(title.includes("JavaScript")); // true

var coursesArray = ["Java", "JS", "PHP", "Ruby"];
console.log(coursesArray.includes("JS", 1)); // true
console.log(coursesArray.includes("Dart")); // false

/**
 * Callback function
 * Là hàm được truyền vào một hàm khác như một đối số, sau đó được gọi (hoặc "gọi lại") bên trong hàm ngoài để thực hiện một số tác vụ.
 * Giúp xử lý bất đồng bộ, sự kiện, hoặc các tác vụ lặp lại.
 */
function myFunction2(param) {
    if (typeof param === 'function') {
        param('Tham số truyền vào callback');
    } 
}

function myCallbackFunction(value) {
    console.log("Đây là callback function", value);
}
myFunction2(myCallbackFunction);

function myFunction2(subject, callback) {
    if (typeof callback === 'function') {
        console.log(`Học lập trình ${subject}`);   
        callback(subject)     
}
}
myFunction2('JavaScript', function(subject) {
    console.log("Đã hoàn thành khóa học " + subject);
});

function myFunction3(some) {
    console.log("Kết quả: ", some);  
   document.getElementById("demo2").innerHTML = some;
}
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myFunction3(sum);
}
myCalculator(5, 7);

/**
 * Arrow function
 * Cú pháp ngắn gọn hơn so với hàm thông thường
 * Không có từ khóa this riêng, nó kế thừa this từ ngữ cảnh bao quanh
 * Không có đối tượng arguments riêng
 * Không thể sử dụng làm hàm khởi tạo (constructor)
 */
const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5