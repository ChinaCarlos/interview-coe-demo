class Parent {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

class Child extends Parent {
  constructor(age, name) {
    super(name);
    this.age = age;
  }
  getInfo() {
    return `${this.name}——${this.age}`;
  }
}

const child = new Child(12, "TOM");

console.log(child.getInfo());
console.log(child.getName());
