export class Customer {
  readonly id: number;
  name: string = "Guest";
  age?: number;

  constructor(id: number) {
    this.id = id;
  }
}
