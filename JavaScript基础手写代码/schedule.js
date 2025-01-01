class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.activeCount = 0;
    this.queue = [];
  }

  add(task) {
    // task must be promise
    const runTask = () => {
      return new Promise((resolve, reject) => {
        this.activeCount = this.activeCount + 1;
        task()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.activeCount = this.activeCount - 1;
            this.runNextTask();
          });
      });
    };

    if (this.activeCount < this.limit) {
      runTask();
    } else {
      this.queue.push(runTask);
    }
  }

  runNextTask() {
    if (this.queue.length && this.limit > this.activeCount) {
      const nextTask = this.queue.shift();
      nextTask();
    }
  }
}

const scheduler = new Scheduler(2); // 并发限制为 2

const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));

// 模拟任务，打印并返回完成时间
const addTask = (time, name) => {
  scheduler.add(() => timeout(time).then(() => console.log(name)));
};

// 添加任务
addTask(1000, "Task 1"); // 1 秒后输出
addTask(500, "Task 2"); // 0.5 秒后输出
addTask(300, "Task 3"); // 0.3 秒后输出
addTask(400, "Task 4"); // 0.4 秒后输出

// 预期输出顺序：
// Task 2
// Task 3
// Task 1
// Task 4
