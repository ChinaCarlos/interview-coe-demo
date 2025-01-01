function throttle(fn, delay, invoke = false) {
  let timerId = null;
  return function () {
    if (invoke && !timerId) {
      fn.apply(this, arguments);
    }
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, arguments);
      timerId = null;
    }, delay);
  };
}
