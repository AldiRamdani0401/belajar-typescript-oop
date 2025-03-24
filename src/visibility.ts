export class Counter {
  private counterInit: number = 0;
  protected counter: number;

  constructor() {
    this.counter = this.counterInit;
  }
  public increment(): void {
    this.counter++;
  }

  public getCounter(): number {
    return this.counter;
  }
}


export class DoubleCounter extends Counter {
    public increment(): void {
        this.counter += 2;
    }
}