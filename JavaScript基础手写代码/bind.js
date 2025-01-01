Function.prototype.myCall = function (context, ...args) {
  context = context === undefined || context === null ? window : context;
  context._fn = this;
  const result = context._fn(...args);
  delete context._fn;
  return result;
};
