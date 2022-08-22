function fooInit() {
  let sum = 0;
  let tempNum = 0;

  function foo(number) {
    sum = number + tempNum;
    console.log(sum);
    tempNum = number;
  }
  return foo;
}
const foo = fooInit();

foo(3); // 3
foo(1); // 4
foo(2); // 3
foo(2); // 4
foo(6); // 8
foo(2); //8
foo(0); //2
foo(0); //0
foo(100); // 100
foo(1); // 101
foo(200); //201
