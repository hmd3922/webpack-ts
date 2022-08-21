// function setX(value) {
// // 全局执行setX,这个函数里的this就是window,所以this.x ===window.x
//   this.x = value;
// }
// var obj = new Object;
// obj.setX = setX; // 将 setX 作为 obj 的方法

// obj.setX(42); // 将 setX 作为方法调用
// console.log(obj.x); // 显示 42

// setX(84); // 直接调用 setX
// console.log(x); // 获取全局变量 x，显示 84
// console.log(obj.x); // 显示 42
// function a() {
//    function setX(value) {
// // 全局执行setX,这个函数里的this就是window,所以this.x ===window.x
//        this.x = value;
//        console.log(this)
//     }
//    setX(89)
// }
// a()




// 创建一个含有 bar 方法的 obj 对象，
// bar 返回一个函数，
// 这个函数返回 this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的 this 被永久绑定到了它外层函数的 this。
// bar 的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
    bar: () => {
        console.log(this)
        // return (() => {this})
    }
};

// 作为 obj 对象的一个方法来调用 bar，把它的 this 绑定到 obj。
// 将返回的函数的引用赋值给 fn。
// console.log(obj.bar())
obj.bar()

