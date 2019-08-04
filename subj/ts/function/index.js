"use strict";
exports.__esModule = true;
var util_1 = require("../_common/util");
/* 注：涉及到模块定义，浏览器不兼容，所以建议用'> node index.js 运行示例查看，取代index.html 浏览器查看' */
util_1.log('...template');
/* 函数类型 */
function foo1() {
    // function add(x: number, y: number): number {
    //   return x + y
    // }
    // 箭头函数
    var add = function (x, y) { return x + y; };
    util_1.log(add(1, 2));
}
/* 传递给一个函数的参数个数必须与函数期望的参数个数一致 */
/* 可选参数 默认参数 */
function foo2() {
    function buildName(firstName, lastName) {
        return firstName + " " + lastName;
    }
    // let result1 = buildName("Bob");                  // error, too few parameters
    // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    var result3 = buildName("Bob", "Adams"); // ah, just right
}
// 可选参数
function foo3() {
    function buildName(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    var result1 = buildName("Bob"); // works correctly now
    // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    var result3 = buildName("Bob", "Adams"); // ah, just right
}
// 默认参数 
// 必须明确的传入undefined值来获得默认值
function foo4() {
    function buildName(firstName, lastName) {
        if (firstName === void 0) { firstName = "Will"; }
        return firstName + " " + lastName;
    }
    // let result1 = buildName("Bob");                  // error, too few parameters
    // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    var result3 = buildName("Bob", "Adams"); // okay and returns "Bob Adams"
    var result4 = buildName(undefined, "Adams"); // okay and returns "Will Adams"
}
/* 剩余参数 */
function foo5() {
    function buildName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + ' | ' + restOfName.join('、');
    }
    var employeeName = buildName('a', 'a1', 'a2', 'a3');
    util_1.log(employeeName);
}
/* this */
function foo6() {
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                // return function() { // this.suits, this will be window (in stric mode, it will be undefined)
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    util_1.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}
/* this参数 */
// 提供一个显式的this参数。 this参数是个假的参数，它出现在参数列表的最前面
function f() {
    // make sure `this` is unusable in this standalone function
    util_1.log(this); // undefined
}
// f()
function foo7() {
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    util_1.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}
/* 重载： 传入不同的参数而返回不同类型的数据 xxxxxx 详见文档（https://typescript.bootcss.com/functions.html）*/
// 不太好使
// function foo8 () {
//   function foo1(x: number): number {
//     log(`number ${x}`)
//     return x * 100
//   }
//   function foo1(x: string, y?: any): string {
//     log(`string ${x} ${y ? ', ' + y : ''}`)
//     return x
//   }
//   foo1(1)
//   foo1('a1', 10)
// }
// function foon () {}
foo7();
