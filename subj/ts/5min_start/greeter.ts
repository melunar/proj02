// TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式
function greeter(person: string) {
  return 'Hello' + person
}

let user: string = 'Jane'

let userError = [1, 2, 3]

// ok
// document.body.innerHTML = greeter(user)

// greeter.ts(7,26): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
document.body.innerHTML = greeter(userError)

/**
 * 就算你的代码里有错误，你仍然可以使用TypeScript。
 * 但在这种情况下，TypeScript会警告你代码可能不会按预期执行。
 */