// Q1: What is Prototypes and Prototypes Inheritence?

let users = {
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },

  getAge: function () {
    let age = new Date().getFullYear() - this.birth;
    return age;
  },
};

let student = {
  firstName: "Asif",
  lastName: "Wasi",
  birth: 2000,
  //   getAge: users.getAge() it works same as prototype work, but not the recommended way to do.
};
let teacher = {
  firstName: "Kasim",
  lastName: "Wasi",
  birth: 1999,
};

student.__proto__ = users;
teacher.__proto__ = users;

console.log(student.getFullName() + " " + student.getAge()); // Asif Wasi 23
console.log(teacher.getFullName()); // Kasim Wasi
