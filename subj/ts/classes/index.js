"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var util_1 = require("../_common/util");
/* 注：涉及到模块定义，浏览器不兼容，所以建议用'> node index.js 运行示例查看，取代index.html 浏览器查看' */
util_1.log('...class');
util_1.log('..................');
function foo1() {
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            if (message === void 0) { message = 'empty'; }
            this.geeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.geeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter('hony');
    util_1.log(greeter.greet());
}
/* 继承 */
function foo2() {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function (meters) {
            if (meters === void 0) { meters = 0; }
            util_1.log("animal moved " + meters + "m");
        };
        return Animal;
    }());
    // extends关键字
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.bark = function () {
            util_1.log('wang !! ');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.move(0);
}
function foo3() {
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (meters) {
            if (meters === void 0) { meters = 0; }
            util_1.log(this.name + " animal moved " + meters + "m");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            // 派生类包含了一个构造函数，它必须调用super()，它会执行基类的构造函数。
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (meters) {
            if (meters === void 0) { meters = 5; }
            util_1.log('slithering....');
            _super.prototype.move.call(this, meters);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (meters) {
            if (meters === void 0) { meters = 45; }
            console.log("galloping...");
            _super.prototype.move.call(this, meters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake('Sammy the Snake');
    var tom = new Horse('Tommy the Horse');
    sam.move();
    tom.move(100);
}
/* 公共，私有与受保护的修饰符 */
// 成员都默认为 public
function foo4() {
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (meters) {
            if (meters === void 0) { meters = 0; }
            util_1.log(this.name + " animal moved " + meters + "m");
        };
        return Animal;
    }());
    var ani = new Animal('jiji');
    ani.move(1);
}
// private时，它就不能在声明它的类的外部访问
function foo5() {
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.sayName = function () {
            // 只能内部访问
            util_1.log(this.name);
        };
        return Animal;
    }());
    var ani = new Animal('cat');
    // log(ani.name) Error 
    ani.sayName();
}
/* protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问 */
function foo6() {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.say = function () {
            util_1.log("Hello, my name is " + this.name + ", and I worked in " + this.department);
        };
        return Employee;
    }(Person));
    var jack = new Employee('Jack', 'Sales');
    // console.log(jack.name) // error
    jack.say();
}
/* 构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承 */
function foo7() {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.say = function () {
            util_1.log("Hello, my name is " + this.name + ", and I worked in " + this.department);
        };
        return Employee;
    }(Person));
    var jack = new Employee('Jack', 'Sales');
    // let jack2 = new Person('Jack') Error
    jack.say();
}
/* readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化 */
function foo8() {
    var Person2 = /** @class */ (function () {
        function Person2(name) {
            this.name = name;
        }
        return Person2;
    }());
    var dad = new Person2('Dad');
    dad.name = 'ddd'; // error
}
/* 参数属性 */
// 参数属性可以方便地让我们在一个地方定义并初始化一个成员
function foo8() {
    var Girl = /** @class */ (function () {
        // private|public|protected name: string参数来创建和初始化name成员。 我们把声明和赋值合并至一处。
        function Girl(name, age) {
            if (name === void 0) { name = ''; }
            if (age === void 0) { age = 18; }
            this.name = name;
            this.age = age;
            this.name = name;
            this.age = age;
        }
        Girl.prototype.sayAge = function () {
            util_1.log(this.age);
        };
        return Girl;
    }());
    var girl = new Girl('lili');
    util_1.log(girl.name);
    // log(girl.age) // error
    girl.sayAge();
}
/* 存取器 get set */
function foo9() {
    var passport = 'secret passcode';
    // let passcode = 'secret passcode error'
    var passcode = 'secret passcode';
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode === passport) {
                    this._fullName = newName;
                }
                else {
                    util_1.log('Error: Unanthorized permission');
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var em = new Employee();
    util_1.log(em.fullName);
    em.fullName = 'Smith Nathe';
    util_1.log(em.fullName);
    em.fullName = 'Jack';
    util_1.log(em.fullName);
}
/* 静态属性 */
// 类的内部外部都用ClassName.staticPros 访问属性
function foo10() {
    var Grid = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid(1.0); // 1x scale
    var grid2 = new Grid(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(Grid.origin);
    console.log(grid1.origin); // undefined
}
//  todo abstract class
// function foon() {}
foo10();
