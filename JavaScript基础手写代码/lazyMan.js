class LazyManClass {
  constructor(name) {
    this.name = name;
    this.task = [];
    this.sayHi();
    setTimeout(() => {
      this.next();
    }, 0);
  }

  sayHi() {
    // 立即添加一个打印输出的task
    this.task.push(() => {
      console.log(`Hi this is ${this.name}!`);
      this.next();
    });
    return this;
  }
  sleep(time) {
    this.task.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
  sleepFirst(time) {
    this.task.unshift(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
  eat(food) {
    this.task.push(() => {
      console.log(`Eat ${food}`);
      this.next();
    });
    return this;
  }

  next() {
    const task = this.task.shift();
    if (task) task();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan("Hank").sleepFirst(5).eat("supper");
