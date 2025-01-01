const one = new Promise((resolve) => {
  setTimeout(() => {
    console.log("one");
    resolve();
  }, 1000);
});

// one
//   .then(() => {
//     console.log("then1");
//   })
//   .catch(() => {
//     console.log("catch1");
//   })
//   .then(() => {
//     console.log("then2");
//   })
//   .catch(() => {
//     console.log("catch1");
//   })
//   .then(() => {
//     console.log("then3");
//   });

const two = new Promise((resolve) => {
  setTimeout(() => {
    console.log("two");
    resolve();
  }, 2000);
});
const three = new Promise((resolve) => {
  setTimeout(() => {
    console.log("three");
    resolve();
  }, 3000);
});

Promise.myAll = function (promises) {
  let execPromiseLength = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then(() => {
          execPromiseLength++;
          if (execPromiseLength === promises.length) {
            resolve();
          }
        })
        .catch(() => {
          reject();
        });
    });
  });
};

Promise.myAll([one, two, three]).then(() => {
  console.log("done");
});
// ones
// two
// three
// done

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  });
};

Promise.myRace([one, two, three]).then(() => {
  console.log("done");
});

Promise.prototype.myFinally = function (callback) {
  return this.then(
    (data) => {
      return Promise.resolve(callback()).then(() => data);
    },
    () => {
      return Promise.resolve(callback()).then(() => throw Error("error"));
    }
  );
};

Promise.reject = function (err) {
  return new Promise((_, reject) => {
    reject(err);
  });
};

Promise.resolve = function (data) {
  if (data instanceof Promise) {
    return data;
  }
  if (data.then) {
    return new Promise((resolve, reject) => {
      data.then(resolve, reject);
    });
  }
  return new Promise((resolve) => {
    resolve(data);
  });
};
