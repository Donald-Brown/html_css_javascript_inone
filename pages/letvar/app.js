var num = 3;
let num2 = 4;
let num3 = 8;

function newNum(){
  num = 5;
  num2 = 6;
  var num3 = 7;
  console.log(num, num2, num3);
}

newNum();
num3 =9;
console.log(num, num2, num3);