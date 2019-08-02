// 布尔值
var isDone = false;
// 数字
// 十进制
var decliteral = 6;
// 十六进制
var hexliteral = 0xf00;
// 二进制
var binaryliteral = 21;
// 八进制
var octalliteral = 255;
// 字符串
var fullname = 'abc...';
var age = 19;
var sentence = "hello, my name is " + fullname + ", and I will be " + (age + 1) + " next month";
// 数组
var list = [1, 2, 3];
// 泛型数组
var list2 = [1, 2, 3];
// 元组（tuple）：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var x = ['abc', 100];
// let x: [string, number] = [10, 'abc'] // Error
// todo 联合类型 补充未定义索引值
// 枚举
// 注意定义方式跟其他数据类型区别
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {})); // 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值, 或者全部手动赋值
var c = Color.Blue;
var cName = Color[5];
console.log(c); // 5
console.log(cName); // Blue
// Any
// all is ok
var notSure = 5;
notSure = 'abc...';
notSure = false;
// 包含不同类型的数组项
var list3 = [1, '30', false];
list[4] = 1;
// let list4: number[] = [1,2,3]
// list4[10] = '1' // Error
// viod
// 它表示没有任何类型
// 只能为它赋予 undefined 和 null
var unnsable = null;
var unnsable1 = undefined;
// let unnsable2: void = 0 // Error
// no return function
function warnUser() {
    console.warn('nothing goes right!!');
}
// null 和 undefined
// null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量（not --strictNullChecks）
var u = null;
var n = null;
// never
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
function error(message) {
    throw new Error(message);
}
var ay = '1';
// let nv: never = ay // Error
// Object 非原始类型（number，string，boolean，symbol，null或undefined）
function create(o) { }
create({});
create({ a: 1 });
create(null);
// create('null') // Error
// 断言
// 尖括号
var someValue = 100; // 'this is a string'
var strLength = someValue.length;
// as 语法
var someValue1 = 100; // 'this is a string'
var strLength1 = someValue1.length;
