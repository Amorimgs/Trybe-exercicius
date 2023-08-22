n = 5;
let text = "";
if (n > 1) {
  for (let i = 0; i < n; i += 1) {
    text = "";
    for (let i = n; i > 0; i -= 1) {
      text += "*";
    }
    console.log(text);
  }
}
