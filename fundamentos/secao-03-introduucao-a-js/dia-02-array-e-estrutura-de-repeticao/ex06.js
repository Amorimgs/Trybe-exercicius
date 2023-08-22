let n = 5;
let text = "";
let inputPosition = n - 1;

for (let li = 0; li < n; li += 1) {
  for (let ci = 0; ci < n; ci += 1) {
    if (ci < inputPosition) {
      text = text + " ";
    } else {
      text = text + "*";
    }
  }
  console.log(text);
  text = "";
  inputPosition -= 1;
}
