// TypeScript的核心原则之一是类型检查器对值所具有的结构进行类型检查

const log = (...param) => console.log(...param)

// 接口
function foo1() {
  interface LabelValue {
    label: string
  }
  
  function printLabel(labelObj: LabelValue) {
  // function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label)
  }
  
  printLabel({ label: 'size 1 obj' })
}

// 可选属性
/**
 * 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号
 *  
 */
function foo2() {
  interface SquareConfig {
    color?: string
    width: number
    height: number
  }

  function createSquare(config: SquareConfig): {
    color: string, area: number } {
      let newSquare = { color: 'white', area: 10 }
      if (config.color) {
        newSquare.color = config.color
      }
      newSquare.area = config.width * config.height
      return newSquare
    }

  let mySquare = createSquare({ color: 'red', width: 19, height: 10 })
  console.log(mySquare)
}


// 只读属性
/**
 * 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用readonly来指定只读属性
 */
function foo3() {
  interface Point {
    readonly x: number
    readonly y: number
  }
  let p1: Point = { x: 10, y: 20 }
  console.log(p1.x)
  // p1.x = 100 // Error

  // ReadonlyArray 泛型
  let a: number[] = [1, 2, 3, 4]
  let ro: ReadonlyArray<number> = a
  a[4] = 10
  // ro[0] = 1 // Error
  // ro.push(2) // Error
  console.log(ro)
}
/* 
  最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly。
 */

// 额外属性检查
function foo4() {
  // 断言
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
    return {
      color: '',
      area: 10
    }
  }
  // 断言
  let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig2)

  // 自定义属性
  interface SquareConfig2 {
    color?: string
    width?: number
    [propName: string]: any
  }
}

// 函数类型
/* 像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型, 最后再附上函数的返回类型 */
function foo5() {
  interface SearchFunc {
    (source: string, subString: string): number
  }
  let mySearch: SearchFunc
  mySearch = function(src: string, subString: string) {
    let result = src.search(subString)
    return result
  }
  // log(mySearch('source parent', 1, 'source')) // Error -1
  log(mySearch(' source parent', 'source')) // 1
}

// 类类型
function foo6() {
  interface CLockInterface {
    currentTime: Date
    setTime(d: Date)
    // setTime1(d: Date) 声明接口的参数 不去实现 也会报错
  }
  // 实现一个接口
  class Clock implements CLockInterface {
    currentTime: Date
    setTime(d: Date) {
      this.currentTime = d
    }
    // setTime1(d: number) { // Error 没有按interface方法参数类型依法实现
    //   this.currentTime = d
    // }
    constructor(h: number, m: number, s: number) {
      this.currentTime = new Date("2013-9-1 " + h + ":" +  m  + ":" + s)
    }
  }
  let c: Clock = new Clock(10, 13, 20)
  log(c.currentTime)
  c.setTime(new Date())
  log(c.currentTime)
  // c.setTime1(1)
  // log(c.currentTime)
}


// 接口继承
function foo7() {
  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  let square = <Square>{};
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;
}

foo7()