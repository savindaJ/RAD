/*function doSomething(name: string) : string {
    return "Did something: " + name;
}

console.log(doSomething("Hello, world!"));*/

interface Animal {
    run(): void;
}

class Dog implements Animal {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    run(): void {
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("Dog is running...");
    }
}

const dog = new Dog("Dog", 5);
dog.setAge(6);
dog.setName("Doggy");
dog.run();

class Cat implements Animal {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    run(): void {
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("Cat is running...");
    }
}

const cat = new Cat("Cat", 3);
cat.setAge(4);
cat.setName("Catty");
cat.run();