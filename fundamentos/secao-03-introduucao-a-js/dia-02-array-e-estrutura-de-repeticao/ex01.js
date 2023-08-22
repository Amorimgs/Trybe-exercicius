const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let maiorValor;

for (i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
  console.log(numbers[i]);
}
let media = total / numbers.length;
console.log(`Total = ${total}`);
console.log(`A média é ${media > 20 ? "maior que 20" : "menor ou igual a 20"}`);

for (let i = 0; i < numbers.length; i += 1) {
  if (maiorValor > numbers[i]) {
    maiorValor = maiorValor;
  } else {
    maiorValor = numbers[i];
  }
}
console.log(`O maior valor é ${maiorValor}`);
let valoresImpares = 0;
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    valoresImpares += 1;
  }
}
console.log(
  valoresImpares > 0
    ? `Existem ${valoresImpares} valores ímpares.`
    : `Não existem valores ímpares!`
);
