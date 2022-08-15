// export const mvvm = {
//     name:'ruinous'
// }
// let obj = {}
// Object.defineProperty(obj,"key",{
//     value:1,
//     writable:true,
//     enumerable:true,
//     configurable:true
// })
// console.log(obj)
// Object.defineProperty(obj,"name",{
//     value:2,
//     writable:true,
//     enumerable:true,
//     configurable:true
// })
// console.log(obj)
let obj1 = {}
obj1.key = 'ioio'
let value = 'ruinous'
Object.defineProperty(obj1,"name",{
    get:function(){
        console.log('执行了获取的操作')
        return value
    },
    set:function(newValue){
       console.log('执行了设置操作')
        value = newValue+'666'
    }
})

console.log(obj1)
