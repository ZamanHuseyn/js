let original = [1, 2, 3, 4, 5]
let copy = [...original]

for (let i = 0; i < copy.length; i++) {
  copy[i] = copy[i] * 2;
}

console.log(original);
console.log(copy);