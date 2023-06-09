const x = 100;

function outer() {
  let x = 0;

  function xplus() {
    x = x + 1;
  }

  function printx() {
    console.log(x);
  }

  return xplus;
}

const xclosure = outer();

xclosure.printx(); // 0
xclosure.xplus();
xclosure.printx(); // 1
xclosure.xplus();
xclosure.printx(); // 2
// outer().printx();
// outer().xplus();
// outer().printx();
// outer().xplus();
// outer().printx();
