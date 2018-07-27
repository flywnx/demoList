/**
 * Created by Administrator on 2017/9/10.
 */
//map与reduce的总结
function map_and_reduce() {
    var arry =['a','b','c','d','e','f','g','h','i'];
    console.log('执行循环相加的函数');
    console.log("例子数组为：['a','b','c','d','e','f','g','h','i']")
    function sq(x,y,z) { return x+z[y+1]; }
    console.log("map:"+arry.map(sq));
    console.log("reduce:"+arry.reduce(sq));
    var arr =[1,2,3,4,5,6,7,8];
    console.log("例子数组为：[1,2,3,4,5,6,7,8]")
    console.log("map:"+arr.map(sq));
    console.log("reduce:"+arr.reduce(sq));
    console.log("reduce的返回值类型："+typeof arr.reduce(sq));
    console.info("map()与reduce()的参数函数的参数都是（该元素，序列号，包含该元素的数组）");
}

var just = (function () {
    var con = 0;
    var fun =function () {
        console.log("fun");
    };
    return {
        fun:fun
    }
})();
var justs = (function (js) {
    js.fun2 =function () {
        console.log("fun2");
    };
    return js;
})(just);

