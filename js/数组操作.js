/**
 * 完全打乱数组方法
 * 此方法不打乱原数组，返回一个打乱的新数组
 * for循环没有i>0,是因为第二个值就是布尔值，i===0时就是false
 */
function randomArray(a) {
  let b = a.slice(0)
  let c = new Array(a.length)
  for (let i = a.length; i--;) {
    let num = ~~(Math.random() * i)
    c[i] = b[num]
    b[num] = b[i]
  }
  return c
}

/**
 * 用splice对数组的操作
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 截取指定索引元素
arr.splice(1, 1)//从索引1开始的（包含1）截取1位==>[2]
// 此时arr ==> [1, 3, 4, 5, 6, 7, 8, 9]
// 指定位置插入元素
arr.splice(1, 0, 2)//从索引1开始的（包含1）截取0位,添加元素2 ==>[]
// 此时arr ==> [1, 2, 3, 4, 5, 6, 7, 8, 9]


/**
* 区间整数随机数,(包含边界值)
*/
function rdSecInt(max, min = 0) {
  if (min > max) {
    console.error('第一个参数为最大值，第二个是最小值，最小值禁止大于最大值。')
    return
  }
  let dif = max - min
  return Math.round(Math.random() * dif + min)
}
