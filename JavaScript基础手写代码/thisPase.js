var foo = 123;
function print() {
  this.foo = 234;
  console.log(this); // window
  console.log(foo); // 234
}
print();
