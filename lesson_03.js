/**
 * Json là một định dạng dữ liệu ( chuỗi)
 * 2. JavaScript Object Notation
 * 
 */
/**
 * Promise (sync async) trong JavaScript | Khái niệm promise
 * + Sync: đồng bộ: thằng nào viết trc chạy trc, thằng nào viết sau chạy sau: Chạy theo luồng, chạy tuần tự
 * console.log(1); // chạy trc
 * console.log(2); // chạy sau
 * + Async: bất đồng bộ : Không chờ, có thể chạy sau, giúp chương trình không bị "đứng" khi xử lý tác vụ lâu.
 *  setTimeout, setInterval, fetch, XMLHttpRequest, đọc file, 
 *  callbacks: sử lý tác vụ Async
 * 
 */

// console.log( "Sync", 1);
// console.log( "Sync", 2);
// // Kết quả: 1, rồi 2

// console.log( "Async", 1);
// setTimeout(() => {
//     console.log( "Async", 2);
// }, 1000);
// console.log( "Async", 3);
// Kết quả: 1, 3, rồi 2 (sau 1 giây)

/**
 * Callback hell: sử dụng quá nhhhieeuf callback lồng nhau để  khi xử lý bất đồng bộ (async) như đọc file, gọi API, v.v.
 * => Solution: Sử dụng Promise or  async/await để dễ đọc hơn
 * Pyramid 
 */

// setTimeout(function () {
//     console.log("Callback hell")
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//         setTimeout(function () {
//             console.log(3);
//             setTimeout(function () {
//                 console.log(4);
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

/**
 * Khi gặp callback hell mới cần Promise
 * Promise: 
 * + Lý thuyết: Sử lý bất đồng bộ, ES6, khắc phục tình trạng callback hell
 * + Cơ chế hạt động: 
 *   B1: new Promise
 *   B2: Executor: sẽ có 3 trạng thái: Pendding (chưa xong, chưa có kết quả ), Fulfilled (thành công -> then), Rejected (thất bại -> catch)
 *    trong Executor sẽ truyền 2 tham số ( resolve và reject)
 *       
 * new Promise : là một object contructor
 */
let promise = new Promise(
    //Excutor
    function(resolve, reject){
        //Logic
        // khi thành công sẽ gọi đến resolve()
        // Khi thất bại sẽ gọi reject()
        resolve([
            {
                id: 1,
                name: "Liên"
            }
        ])
    }
);
// Chuỗi: Nếu ko return ra promise sẽ chạy thằng đằng sau. 
// promise
//     .then(function () {
//         // resolve()
//         // console.log("Successfully 1")
//         // return 1;
//         return new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve([1,2,3])
//             }, 3000)
//         })
//     })
//     .then(function () {
//         // resolve()
//         console.log("Successfully 2")
//         return 2;
//     })
//     .then(function () {
//         // resolve()
//         console.log("Successfully 3")
//         return 3;
//     })
//     .catch(function (error) {
//         // /reject()
//         console.log("Failure", error)
//     })
//     .finally(function () {
//         //1 trong reject() or resolve() thì nó đều được gọi
//         console.log("finally")
//     })


    function sleep(ms){
        return new Promise(function(resolve){
            console.log("Test Promise")
            setTimeout(resolve, ms)
        })
    }
    sleep(1000)
    .then(()=>{
        console.log(1)
        return sleep(1000)
    })
    .then(()=>{
         return new Promise(function(resolve, reject){
            reject('Có lỗi')
        })
    })
    .then(()=>{
        console.log(3)
        return sleep(1000)
    })
    .then(()=>{
        console.log(4)
        return sleep(1000)
    })
    .catch((error)=>{
        console.log(error)
    })
    /**
     * Promise methods (resolve, reject, all) | JavaScript Promise
     * Nếu callback return ra 1 promist thì các chuỗi đằng sau sẽ đợi promise chạy xong mới chạy những thằng khác
     */

    /**
     * Promise.resolve
     * Promise.reject
     * Promise.all
     */
let promist2 = new Promise(function (resolve, reject) {
    reject("Error!!");
})

promist2
    .then(function (result) {
        console.log("Result::", result)
    })
    .catch((error) => {
        console.log(error)
    })

var promiseResolve = Promise.resolve("Success 01")
promiseResolve
    .then(function (result) {
        console.log("Result ::", result)
    })
    .catch((error) => {
        console.log(error)
    })


let promistAll_01 = new Promise(function (resolve, reject) {
    console.log("Test Promise all")
    setTimeout(function(){
        resolve([1])
    }, 1000)

})

let promistAll_02 = new Promise(function (resolve, reject) {

    setTimeout(function(){
        resolve([2, 3])
    }, 2000)

})
let promistAll_03 = Promise.reject("Reject") 
Promise.all([promistAll_01, promistAll_02])
.then((result)=>{
    let result1 = result[0]
    let result2 = result[1]
    console.log(result1.concat(result2))
})


Promise.all([promistAll_01, promistAll_03])
.then((result)=>{
    let result1 = result[0]
    let result2 = result[1]
    console.log(result1.concat(result2))
}).catch((error)=> {
    console.log("Reject", error)
})


let promise03 = new Promise(function(resolve, reject) {
    resolve("Thành công! ");
    reject("Thất bại!"); // Không có tác dụng, vì resolve đã được gọi trước
});

promise03
    .then(result => console.log(result))   // "Thành công!"
    .catch(error => console.log(error));   // Không chạy