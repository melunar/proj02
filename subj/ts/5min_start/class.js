var Student = /** @class */ (function () {
    // 构造函数的参数上使用public等同于创建了同名的成员变量
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello' + person.firstName + ' ' + person.lastName;
}
var student = new Student('Jane', '.M', 'joh');
console.log(student);
document.body.innerHTML = greeter(student);
