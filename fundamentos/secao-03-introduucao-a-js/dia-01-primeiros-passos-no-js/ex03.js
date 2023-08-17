let num1 = 77;
let num2 = 42;
let num3 = 19;

let Maior;

if (num1 > num2) {
  if (num1 > num3) {
    Maior = num1;
  } else {
    Maior = num3;
  }
} else {
  if (num2 > num3) {
    Maior = num2;
  } else {
    Maior = num3;
  }
}
console.log(Maior);
