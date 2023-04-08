// complete this js code
function Person(name, age) {
	AgeVal = age;
	nameVal = name;
}
Person.prototype.greet = function(){
		console.log(`Hello my name is ${this.nameVal}, I am ${this.AgeVal} years old.`);
	}

function Employee(name, age, jobTitle) {
	Person.call(name,age);
	jobTitle = jobTitle;
}

Employee.prototype = Person.prototype;

Employee.prototype.jobGreet = function(){
		console.log(`Hello my name is ${this.nameVal}, I am ${this.ageVal} years old, and my job title is${jobTitle}.`);
	}

let person1 = new Person("Shemeer",24);
person1.greet();

let employee1 = new Employee("John",35, "FrontEnd_Developer");
employee1.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
