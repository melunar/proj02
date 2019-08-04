import { log } from '../_common/util'
/* 注：涉及到模块定义，浏览器不兼容，所以建议用'> node index.js 运行示例查看，取代index.html 浏览器查看' */

log('...class')
log('..................')

function foo1() {
  class Greeter {
    geeting: string
    constructor(message: string = 'empty') {
      this.geeting = message
    }
    greet() {
      return `Hello, ${this.geeting}`
    }
  }
  let  greeter = new Greeter('hony')
  log(greeter.greet())
}

/* 继承 */

function foo2() {
  class Animal {
    move(meters: number = 0) {
      log(`animal moved ${meters}m`)
    }
  }
  // extends关键字
  class Dog extends Animal {
    bark() {
      log('wang !! ')
    }
  }
  const dog = new Dog()
  dog.bark()
  dog.move(10)
  dog.move(0)
}

function foo3() {
  class Animal {
    name: string
    constructor(theName: string) {
      this.name = theName
    }
    move(meters: number = 0) {
      log(`${this.name} animal moved ${meters}m`)
    }
  }
  class Snake extends Animal {
    constructor(name: string) {
      // 派生类包含了一个构造函数，它必须调用super()，它会执行基类的构造函数。
      super(name)
    }
    move(meters: number = 5) {
      log('slithering....')
      super.move(meters)
    }
  }
  class Horse extends Animal {
    constructor(name: string) {
      super(name)
    }
    move(meters = 45) {
        console.log("galloping...")
        super.move(meters)
    }
  }
  let sam: Snake = new Snake('Sammy the Snake')
  let tom: Animal = new Horse('Tommy the Horse')

  sam.move()
  tom.move(100)
}

/* 公共，私有与受保护的修饰符 */

// 成员都默认为 public
function foo4() {
  class Animal {
    public name: string
    public constructor(theName: string) {
      this.name = theName
    }
    public move(meters: number = 0) {
      log(`${this.name} animal moved ${meters}m`)
    }
  }
  const ani = new Animal('jiji')
  ani.move(1)
}

// private时，它就不能在声明它的类的外部访问

function foo5() {
  class Animal {
    private name: string
    public constructor(theName: string) {
      this.name = theName
    }
    sayName() {
      // 只能内部访问
      log(this.name)
    }
  }
  const ani = new Animal('cat')
  // log(ani.name) Error 
  ani.sayName()
}

/* protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问 */

function foo6() {
  class Person {
    protected name: string
    constructor(name: string) {
      this.name = name
    }
  }

  class Employee extends Person {
    private department: string
    constructor(name: string, department: string) {
      super(name)
      this.department = department
    }
    public say() {
      log(`Hello, my name is ${this.name}, and I worked in ${this.department}`)
    }
  }
  let jack = new Employee('Jack', 'Sales')
  // console.log(jack.name) // error
  jack.say()
}

/* 构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承 */
function foo7() {
  class Person {
    protected name: string
    protected constructor(name: string) {
      this.name = name
    }
  }

  class Employee extends Person {
    private department: string
    constructor(name: string, department: string) {
      super(name)
      this.department = department
    }
    public say() {
      log(`Hello, my name is ${this.name}, and I worked in ${this.department}`)
    }
  }
  let jack = new Employee('Jack', 'Sales')
  // let jack2 = new Person('Jack') Error
  jack.say()
}

/* readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化 */
function foo8() {
  class Person2 {
    readonly name: string
    constructor(name: string) {
      this.name = name
    }
  }
  let dad = new Person2('Dad')
  dad.name = 'ddd' // error
}

/* 参数属性 */
// 参数属性可以方便地让我们在一个地方定义并初始化一个成员
function foo8() {
  class Girl {
    // private|public|protected name: string参数来创建和初始化name成员。 我们把声明和赋值合并至一处。
    constructor(public name: string = '', private age: number = 18) {
      this.name = name
      this.age = age
    }
    sayAge() {
      log(this.age)
    }
  }
  let girl = new Girl('lili')
  log(girl.name)
  // log(girl.age) // error
  girl.sayAge()
}


/* 存取器 get set */
function foo9() {
  const passport = 'secret passcode'
  // let passcode = 'secret passcode error'
  let passcode = 'secret passcode'

  class Employee {
    private _fullName: string
    get fullName(): string {
      return this._fullName
    }
    set fullName(newName: string) {
      if (passcode && passcode === passport) {
        this._fullName = newName
      } else {
        log('Error: Unanthorized permission')
      }
    }
  }
  let em = new Employee()
  log(em.fullName)
  em.fullName = 'Smith Nathe'
  log(em.fullName)
  em.fullName = 'Jack'
  log(em.fullName)
}

/* 静态属性 */
// 类的内部外部都用ClassName.staticPros 访问属性
function foo10() {
  class Grid {
    static origin = {x: 0, y: 0}
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x)
        let yDist = (point.y - Grid.origin.y)
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
  }

  let grid1 = new Grid(1.0);  // 1x scale
  let grid2 = new Grid(5.0);  // 5x scale

  console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}))
  console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}))
  console.log(Grid.origin)
  console.log(grid1.origin) // undefined
}

//  todo abstract class

// function foon() {}
foo10()