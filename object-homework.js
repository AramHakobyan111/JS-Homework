// NUMBER 1

const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const person2 = {
    name: "Jane",
    age: 25,
    city: "Los Angeles"
};
const mergedPerson = Object.assign({}, person, person2);
console.log(mergedPerson); 


//NUMBER 2

function deepClone(obj){
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;

}


//NUMBER 3

const student = Object.freeze({
    name: "Alice",
    age: 22,
});


//NUMBER 4

const keys = ["name", "age", "country"];
const values = ["Lilit", 28, "Armenia"];

const obj = {};

keys.forEach((key, index) => {
  obj[key] = values[index];
});

console.log(obj);


//NUMBER 5

const isAdmin = true;  
const user = {
    name: "Aram",
    age: 30,
    ...(isAdmin && { role: "admin" })
};

console.log(user);


//NUMBER 6

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}.`;
};

function Student(name, major) {
    Person.call(this, name);  
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function() {
    return `${Person.prototype.greet.call(this)} I study ${this.major}.`;
};

const student1 = new Student("Anna", "Computer Science");
console.log(student1.greet());

//NUMBER 7

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}


const car1 = new Car("Toyota", "Corolla", 2020);

Car.prototype.getDescription = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

console.log(car1.getDescription());

const car2 = new Car("Honda", "Civic", 2018);
console.log(car2.getDescription()); 