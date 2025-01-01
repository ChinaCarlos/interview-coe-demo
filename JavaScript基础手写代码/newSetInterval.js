function newSetInterval(callback, timer) {
  function fn() {
    callback();
    setTimeout(fn, timer);
  }
  setTimeout(fn, timer);
}

newSetInterval(() => {
  console.log(Date.now());
}, 1000);
