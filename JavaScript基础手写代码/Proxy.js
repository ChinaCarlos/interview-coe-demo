const api = {
  key: "xxx-fff-ss",
  value: "https://carlosme.fun",
  name: "test-lib",
  info: {
    age: 123,
  },
};

const apiProxy = new Proxy(api, {
  get: function (target, key, receiver) {
    console.log("get:", target, key, receiver);
    return Reflect.get(target, key);
  },
  set: function (target, key, value, receiver) {
    console.log("set");
    Reflect.set(target, key, value);
  },
});
console.log(apiProxy.info.age);
console.log("----------");
apiProxy.info.age = 100;
