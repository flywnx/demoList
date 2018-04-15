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