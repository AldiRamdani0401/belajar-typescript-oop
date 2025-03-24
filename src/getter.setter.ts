export class Category {
  _name?: string;

  get name(): string {
    if (this._name) {
      return this._name;
    } else {
      return "empty";
    }
  }

  set name(value: string) {
    if (value !== "") {
      this._name = value;
    }
  }
}
