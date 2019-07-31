class Student {
  fullName: string;
  // 构造函数的参数上使用public等同于创建了同名的成员变量
  constructor(public firstName,  public middleInitial, lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello' + person.firstName + ' ' + person.lastName
}

let student = new Student('Jane', '.M', 'joh')

console.log(student)

// 没有lastName
document.body.innerHTML = greeter(student)