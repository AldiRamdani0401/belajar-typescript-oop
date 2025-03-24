export class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(name: string): void {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}

export class Manager extends Employee {
  sayHello(name: string): void {
    super.sayHello(name);
    console.info("And, I am your manager");
  }
}
