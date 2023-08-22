const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Kiwi",
  "Uva",
];

const convertArrayEmObj = (array) => {
  let ObjBasket = {};
  for (let i = 0; i < array.length; i += 1) {
    let item = array[i];
    if (item in ObjBasket) {
      ObjBasket[item] += 1;
    } else {
      ObjBasket[item] = 1;
    }
  }
  return ObjBasket;
};

const monstrarTela = (array) => {
  let frase = `Sua cesta possui: `;
  const OBJ = convertArrayEmObj(array);
  let dados = Object.entries(OBJ);
  for (let i = 0; i < dados.length; i += 1) {
    let item = dados[i];
    if (i === dados.length - 1) {
      if (item[1] > 1) {
        frase += ` e ${item[1]} ${item[0]}s.`;
      } else {
        frase += ` e ${item[1]} ${item[0]}.`;
      }
    } else if (i === 0) {
      if (item[1] > 1) {
        frase += `${item[1]} ${item[0]}`;
      } else {
        frase += `${item[1]} ${item[0]}`;
      }
    } else {
      if (item[1] > 1) {
        frase += `, ${item[1]} ${item[0]}s`;
      } else {
        frase += `, ${item[1]} ${item[0]}`;
      }
    }
  }
  return frase;
};
console.log(monstrarTela(basket));
