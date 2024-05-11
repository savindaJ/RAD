"use strict";
/*function doSomething(name: string) : string {
    return "Did something: " + name;
}

console.log(doSomething("Hello, world!"));*/
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    run() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Dog is running...");
    }
}
const dog = new Dog("Dog", 5);
dog.setAge(6);
dog.setName("Doggy");
dog.run();
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    run() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Cat is running...");
    }
}
const cat = new Cat("Cat", 3);
cat.setAge(4);
cat.setName("Catty");
cat.run();
