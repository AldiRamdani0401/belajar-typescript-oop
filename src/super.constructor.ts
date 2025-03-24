// parent class
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// child class
export class Employee extends Person {
  department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
}
