export class Customer {
  readonly id: number;
  name: string = "Guest";
  age?: number;

  constructor(id: number) {
    this.id = id;
  }

  sayHello(name: string): void {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}
