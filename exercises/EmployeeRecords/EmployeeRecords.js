const Company = function(name, isFortune500, budget) {
	this.name = name;
	this.isFortune500 = isFortune500;
	this.budget = budget;
	this.isOperational = true;
	this.employees = [];
};

Company.prototype.addEmployee = function(employee) {
	this.employees.push(employee);
};

const employees = new Array();

const Employee = function(name, jobTitle, salary, status) {
	this.name = name;
	this.jobTitle = jobTitle;
	this.salary = salary;
	this.status = 'Full-time';
};

Employee.prototype.printEmployeeFrom = function() {
	console.log(
		`Name: ${this.name}, Job Title ${this.jobTitle}, Salary: ${this.salary}, Status: ${
			this.status
		}`
	);
};

let person1 = new Employee('anthony', 'designer', 5);
let person2 = new Employee('brooke', 'developer', 6);
let person3 = new Employee('anotherName', 'another job', 3);

person3.status = 'Part-Time';

let vSchool = new Company('vschool', false, 500000);

vSchool.addEmployee(person1);
vSchool.addEmployee(person2);
vSchool.addEmployee(person3);

console.log(vSchool);
