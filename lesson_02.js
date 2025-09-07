let courses = [ "JS", "PHP", "Ruby" ];
/**
 * for...of lặp qua các giá trị của mảng
 * for...in lặp qua các key (chỉ số) của mảng
 * Cả hai đều có thể dùng để lặp qua mảng
 */
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
for (const key in courses) {
    console.log(courses[key]);
}
// courses.length = 1000;
// courses.forEach(function(course, index, array) {
//     console.log(index, course, array, array.length);
// });

Array.prototype.testMethod1= 1;
Array.prototype.forEach2= function (callback) {
   for(let index in this) {
     if(this.hasOwnProperty(index)) {
       callback(this[index], index, this);
     }
}
};
courses.forEach2(function(course, index, array) {
    console.log(index, course, array, array.length);
})
// console.log("forEach2", courses);

/**
 * Array filter() method
 * 
 */
let courses2 = [{ name: "JS", coin: 100 }, { name: "PHP", coin: 200 }, { name: "Ruby", coin: 300 }];
let filter = courses2.filter(function(course, index, array){
    return course.coin > 100;
})

console.log("filter", filter);

Array.prototype.filter2 = function(callbacks){
    let output = [];
    for(let index in this) {
        if(this.hasOwnProperty(index)) {   
            let result = callbacks(this[index], index, this); // Gọi hàm callback với (giá trị, chỉ số, mảng gốc)
            if(result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

let resultFilter2 = courses2.filter2(function(course, index, array){
    return course.coin > 100;
});

console.log("filter2", resultFilter2);
// courses2.forEach2(function(course, index, array) {
//     console.log(index, course, array, array.length);
// })

/**
 *  Array some() method
 */
let some = courses2.some(function(course, index, array){
    return course.coin > 300;
});

console.log("some", some); // false

Array.prototype.some2 = function(callback){
    let output = false;
    for(let index in this) {
        if(this.hasOwnProperty(index)) {
            let result = callback(this[index], index, this); // Gọi hàm callback với (giá trị, chỉ số, mảng gốc)
            if(result) {
                output = true;
                break;
            }
        }
    }
    return output;
}
let resultSome2 = courses2.some2(function(course, index, array){
    return course.coin > 200;
});

console.log("some2", resultSome2); // true

/**
 * Array every() method 
 * */
let everyResult = courses2.every(function(course, index, array  ){
    return course.coin >= 100;
})
console.log("every", everyResult); // true

Array.prototype.every2 = function(callbacks){
    let output = true
    for (let i in this) {
     if(this.hasOwnProperty(i)) {
       let result = callbacks(this[i], i, this);
       if(!result){
        output = false;
        break;
       }
    }
}
    return output;
}

let resultEvery2 = courses2.every2(function(course, index, array){
    return course.coin >= 100;
});

console.log("every2", resultEvery2); // false

/**
 * Đệ quy
 * 1. Hàm gọi lại chính nó
 * 2. Điều kiện dừng
 * 3. Mỗi lần gọi lại, quy mô bài toán phải nhỏ hơn
 * 4. Kết quả của lần gọi lại phải được sử dụng trong lần gọi lại tiếp theo
 * 5. Đệ quy: gây vấn đề tràn bộ nhớ ( nếu ko sử lý tốt)
 * Function programming
 * Solution: 
 * Xác định điểm dừng
 * Logic handle => Tạo ra điểm dừng
 */
// var arr = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']
// console.log([...(new Set(arr))]);

function countDown(num) {
    if(num >= 0){
        console.log(num)
        return countDown(num -1)
    }
    return num;
}

countDown(10);

console.log("Dùng for")
for (let index = 10; index >= 0; index--) {
    console.log(index);
}

console.log("Đệ quy")
function loop(start, end, callbacks) {
    if(start < end){
        callbacks(start)
        return loop(start + 1, end, callbacks)
    }
    
}

let array = ["Java", "JS", "PHP"]
loop(0, array.length, function(index){
    console.log('index', array[index])
})

/**
 * Tính giai thừa
 */
function factorialFor(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Giai thừa (for):", factorialFor(5)); 

function factorial2For(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}
console.log("Giai thừa 2(for):", factorial2For(5)); 

console.log("Đệ quy tín giai thừa");
function giaiThua(number) {
    if(number >= 1){
        return number * giaiThua(number - 1);
    }
    return 1;
}

console.log("Giai thừa đệ quy:", giaiThua(5)); 