// let : 当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function f(input) {
    var a = 10;
    if (input) {
        var b = a + 1;
        return b;
    }
    // return b // Error: 'b' doesn't exist here
}
// 拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写。
function foo() {
    // okay
    return a1;
}
// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();
var a1 = 100;
// const 被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则
// ...
// 解构：同es6
// 解构数组 
function f1(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f1([1, 2]);
// 解构对象
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// 属性重命名和默认值
var newName1 = o.a, _a = o.b, newName2 = _a === void 0 ? 10 : _a;
// newName1 foo
// newName2 12
// 函数声明
function f2(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to {a: ""}, which then defaults b = 0
f2({}); // Error, 'a' is required if you supply an argument
// 展开...
var first = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first, second, [5]);
// 对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时
var C = /** @class */ (function () {
    function C() {
        this.p = 10;
    }
    C.prototype.m = function () { };
    return C;
}());
var c = new C();
var c1 = __assign({}, c);
c1.p; // 10
console.log(c1.p)
// c1.m() // error
