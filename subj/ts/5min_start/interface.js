function greeter(person) {
    return 'Hello' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'Jane',
    lastName: 'Jone'
};
document.body.innerHTML = greeter(user);
