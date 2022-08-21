function countedHello() {
  console.log("Hello , World!");
  countedHello.callCount++; // 增加该函数的 callCount 属性
}
countedHello.callCount = 0; // 将计数器与函数相关联
for (var i = 0; i < 5; i++) countedHello();
console.log(countedHello.callCount); // 显示 5
