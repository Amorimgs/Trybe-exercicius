//Calculo de Salário

// Dados
let salarioBruto = 3000;
let inss;
let ir;
let salarioLiquido;

// Calculo do INSS
if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}
let salarioMenosINSS = salarioBruto - inss;

// Calculo do IR
if (salarioMenosINSS <= 1903.98) {
  ir = 0;
} else if (salarioMenosINSS <= 2826.65) {
  ir = salarioMenosINSS * 0.075 - 142.8;
} else if (salarioMenosINSS <= 3751.05) {
  ir = salarioMenosINSS * 0.15 - 354.8;
} else if (salarioMenosINSS <= 4664.68) {
  ir = salarioMenosINSS * 0.225 - 636.13;
} else {
  ir = salarioMenosINSS * 0.275 - 869.36;
}

salarioLiquido = salarioMenosINSS - ir;

console.log(`Salário Bruto R$${salarioBruto}`);
console.log(`INSS R$${inss.toFixed(2)}`);
console.log(`IR R$${ir.toFixed(2)}`);
console.log(`Salário Liquido R$${salarioLiquido.toFixed(2)}`);
