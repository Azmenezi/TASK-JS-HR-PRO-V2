const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

// Code Here
class Employee {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }

  idBadge = () =>
    `${this.position}: ${this.name.substring(0, this.name.indexOf(" "))}`;
}
const employee = new Employee("Abdulaziz Alenzi", "manager", 2019, 1928);

console.log(employee.idBadge());

class Manager extends Employee {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super(name, position, yearJoined, salary);
    this.bonusPercentage = bonusPercentage;
  }

  salaryIncrease = (increaseAmount) => {
    const total = this.salary + increaseAmount;
    this.bonusPercentage += (increaseAmount / total) * 100;
    return (this.salary += increaseAmount);
  };

  logManagerInfo = () =>
    console.log(`since ${this.yearJoined} \n Bonus % ${this.bonusPercentage}`);
  getWorkingYears = (currentYear) => currentYear - this.yearJoined;
}

let employees = employeesJSON.map(
  (employee) =>
    (employee = new Employee(
      employee.name,
      employee.position,
      employee.yearJoined,
      employee.salary
    ))
);
let managers = managersJSON.map(
  (manager) =>
    (manager = new Manager(
      manager.name,
      manager.position,
      manager.yearJoined,
      manager.salary,
      manager.bonusPercentage
    ))
);

managers[0].logManagerInfo();

employees.forEach((employee) => console.log(employee.idBadge(employee)));

let superHeroes = employees.filter(
  (employee) => employee.position == "Developer"
);

// console.log(superHeroes);

managers.forEach((manager) =>
  manager.getWorkingYears() > 11 ? manager.salaryIncrease(1000) : undefined
);

managers.forEach((manager) => manager.logManagerInfo());

let seniorExecutives = managers.filter((manager) => manager.yearJoined < 2012);

let lowestBonus = managers.find((manager) => manager.bonusPercentage == 0.1);

let promotionCandidate = employees.find((employee) => employee.salary > 8000);

let mostPaidEmployee = employees.sort((a, b) => a.salary - b.salary).pop();

// console.log(mostPaidEmployee);

let totalSalaries = employees.reduce((a, b) => a + b.salary, 0);

console.log(totalSalaries);

let employeesSorted = employees.sort((a, b) => a.yearJoined - b.yearJoined);

console.log(employeesSorted);
