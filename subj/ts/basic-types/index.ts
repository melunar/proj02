// 布尔值

let isDone: boolean = false


// 数字

// 十进制
let decliteral: number = 6
// 十六进制
let hexliteral: number = 0xf00
// 二进制
let binaryliteral: number = 0b10101
// 八进制
let octalliteral: number = 0o377


// 字符串

let fullname: string = 'abc...'
let age: number = 19
let sentence: string = `hello, my name is ${fullname}, and I will be ${age + 1} next month`


// 数组

let list: number[] = [1, 2, 3]
// 泛型数组
let list2: Array<number> = [1, 2, 3]


// 元组（tuple）：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

let x: [string, number] = ['abc', 100]
// let x: [string, number] = [10, 'abc'] // Error
// todo 联合类型 补充未定义索引值


// 枚举

// 注意定义方式跟其他数据类型区别
enum Color { Red = 1, Green = 3, Blue = 5 } // 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值, 或者全部手动赋值
let c: Color = Color.Blue
let cName: string = Color[5]
console.log(c) // 5
console.log(cName) // Blue


// Any

// all is ok
let notSure: any = 5
notSure = 'abc...'
notSure = false

// 包含不同类型的数组项
let list3: any[] = [1, '30', false]
list[4] = 1

// let list4: number[] = [1,2,3]
// list4[10] = '1' // Error


// viod
// 它表示没有任何类型
// 只能为它赋予 undefined 和 null

let unnsable: void = null
let unnsable1: void = undefined
// let unnsable2: void = 0 // Error

// no return function
function warnUser(): void {
  console.warn('nothing goes right!!')
}


// null 和 undefined
// null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量（not --strictNullChecks）

let u: undefined = null
let n: null = null


// never
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

function error(message: string): never {
  throw new Error(message)
}
let ay: any = '1'
// let nv: never = ay // Error


// Object 非原始类型（number，string，boolean，symbol，null或undefined）

function create(o: object | null): void {}
create({})
create({a: 1})
create(null)
// create('null') // Error


// 断言

// 尖括号
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
// as 语法 (推荐，in jsx)
let someValue1: any = 'this is a string'
let strLength1: number = (someValue1 as string).length


