/** 
 * js 拷贝
 */

/**
 * 数组深拷贝
 * slice() 方法可从已有的数组中返回选定的元素。
 * 返回的数组是新建的，而非改变原数组
*/
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = a.slice(0)//b =[1, 2, 3, 4, 5, 6, 7, 8, 9]
b[0] = 0//b = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a//a =[1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * 数组深拷贝
 * 遍历原数组，并将各元素赋值到新数组 
*/
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = new Array(a.length)
for (let i in a) {
  b[i] = a[i]
}
b[0] = 0//b = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a//a =[1, 2, 3, 4, 5, 6, 7, 8, 9]




/**
 * json深拷贝
 * 使用 JSON 全局对象的 parse 和 stringify 方法来实现深复制。
 * 然而使用这种方法会有一些隐藏的坑，它能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，
 * 即那些能够被 json 直接表示的数据结构。
*/
let obj = { name: '1', age: 1 }

let obj2 = JSON.stringify(obj)
let obj3 = JSON.parse(obj2)
obj3.name = '2'
obj3.age = 2
obj3//{name: "2", age: 2}
obj2//"{"name":"1","age":1}"
obj//{name: "1", age: 1}
