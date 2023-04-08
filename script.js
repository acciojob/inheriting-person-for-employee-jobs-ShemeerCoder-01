// complete this js code

// Person constructor function
function Person(name, age) {
	this.AgeVal = age;
	this.nameVal = name;
}

// greet method added to Person prototype
Person.prototype.greet = function(){
		console.log(`Hello, my name is ${this.nameVal} and I am ${this.AgeVal} years old.`);
	}

// Employee constructor function
function Employee(name, age, jobTitle) {
	Person.call(this,name,age); // call Person constructor with name and age arguments
	this.jobTitle = jobTitle;
}

// Inherit Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// jobGreet method added to Employee prototype
Employee.prototype.jobGreet = function(){
		console.log(`Hello my name is ${this.nameVal}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}

let person1 = new Person("Shemeer",24);
person1.greet();

let employee1 = new Employee("John",35, "FrontEnd_Developer");
employee1.greet();
employee1.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
