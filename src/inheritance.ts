// parent class
export class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// child class
export class Manager extends Employee {}

// grand child class
export class Director extends Manager {}
