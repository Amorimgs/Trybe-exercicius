let peca = "cavalo";
let movimento;
switch (peca.toLowerCase()) {
  case "peao":
    movimento = "Reto uma casa para frente";
    break;
  case "torre":
    movimento = "Reto";
    break;
  case "bispo":
    movimento = "Diagonal";
    break;
  case "cavalo":
    movimento = "Em L";
    break;
  case "rei":
    movimento = "Uma casa frente ou diagonal";
    break;
  case "rainha":
    movimento = "Reto e diagonal";
    break;
  default:
    break;
}
console.log(movimento);
