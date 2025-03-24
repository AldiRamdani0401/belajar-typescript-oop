interface HasName {
  name: string;
}

interface CanSayHello {
  sayHello(name: string): void;
}

export class Person implements HasName, CanSayHello {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(name: string): void {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}
