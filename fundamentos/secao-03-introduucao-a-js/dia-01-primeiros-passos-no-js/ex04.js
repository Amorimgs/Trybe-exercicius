let angulo01 = 60;
let angulo02 = 60;
let angulo03 = 60;

if (angulo01 <= 0 || angulo02 <= 0 || angulo03 <= 0) {
  console.log("error");
} else {
  if (angulo01 + angulo02 + angulo03 != 180) {
    console.log(false);
  } else {
    console.log(true);
  }
}
