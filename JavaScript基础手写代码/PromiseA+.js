const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "reject";

class SimplePromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onFulFilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFulFilledCallbacks.forEach((cb) => cb(value));
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((cb) => cb(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulFilled, onRejected) {
    onFulFilled =
      typeof onFulFilled === "function" ? onFulFilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };

    if (this.status === FULFILLED) {
      this.onFulFilledCallbacks.push(onFulFilled);
    }
    if (this.status === REJECTED) {
      this.onRejectedCallbacks.push(onRejected);
    }
    if (this.status === PENDING) {
      this.onFulFilledCallbacks.push(onFulFilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}

const promise = new SimplePromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 4000);
});

promise.then(
  (value) => {
    console.log(value); // 输出: "Promise resolved!"
  },
  (error) => {
    console.log(error);
  }
);
