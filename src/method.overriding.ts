// parent class
export class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(name: string): void {
    console.info(`(Employee) Hello ${name}, my name is ${this.name}`);
  }
}

// child class
export class Manager extends Employee {
  sayHello(name: string): void {
    console.info(`(Manager) Hello ${name}, my name is ${this.name}, I am your Manager`);
  }
}
