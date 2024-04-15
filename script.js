// 1. type conversion

function convertToNumber(strr) {
  try {
    const num = Number(strr);
    if (Number.isNaN(num)) {
      throw new Error("invalid number");
    }
    return num;
  } catch (error) {
    return error.message;
  }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));

console.log("-----------------------------------------");
//2. building Robust function in javascript
function getPerson(person) {
  try {
    if (typeof person !== "object" || !person.name || !person.age) {
      throw new Error("invailed perameter type");
    }
    return `name : ${person.name} , age : ${person.age}`;
  } catch (error) {
    return error.message;
  }
}

console.log(getPerson({ name: "mithun", age: 20 }));
console.log(getPerson({ name: "mithun" }));
console.log(getPerson(["name", "mithun"]));
console.log("-----------------------------------------");
// 3. car description class.
console.log("-----------------------------------------");
class car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `this is a ${this.year}  ${this.company}  ${this.model} `;
  }
}

let mycar = new car("skoda", "rapid", 2022);

console.log(mycar.getDescription());

console.log("-----------------------------------------");
// 4. employee  class challenge

class employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getSalary() {
    return ` your salary is ${this.salary}`;
  }
}

let employee1 = new employee("vibhav", "developer", 80000);

console.log(employee1.getSalary());

console.log("-----------------------------------------");
// 5. implement a person class with default values
class person {
  constructor(name = "unknow", age = 0) {
    this.name = name;
    this.age = age;
    this;
  }

  getDetails() {
    return ` Name: ${this.name} , age :${this.age}`;
  }
}

let person1 = new person("Mithun", 20);
let person2 = new person();
console.log(person1.getDetails());
console.log(person2.getDetails());
console.log("-----------------------------------------");
// 6. using static method to add  two numbers with calculator class
class calculator {
  static add(num1, num2) {
    return `${num1 + num2}`;
  }
}

let result = calculator.add(10, 5);
console.log(result);

console.log("-----------------------------------------");

// 7 .
class use {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  getPassWord() {
    return this.password.replace(/./g, "*");
  }
}
// 8.Adiing a method  to a prototype
function Student(name) {
  this.name = name;
}
Student.prototype.printDetails = function () {
  console.log(`hello  , my name is ${this.name}`);
};

const student = new Student("mithun");
student.printDetails();
// 9.check the presence using closures
function numberChecker(numbers) {
  return function (num) {
    return numbers.includes(num);
  };
}
const arr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(arr);
console.log(checkNum(3));
console.log(checkNum(6));
// 10.filter by category

function filterarr(products) {
  return function (category) {
    return products.filter((product) => {
      return product.category === category;
    });
  };
}

let products = [
  { name: "shirt", category: "clothing" },
  { name: "pants", category: "clothing" },
  { name: "", category: "clothing" },
];
let clothingProducts = filterByCategory(products)("clothing");
console.log(clothingProducts);

// 1,2,3,4,5,6,7,8,9,10
