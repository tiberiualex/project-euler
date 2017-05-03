let f1 = 1;
let f2 = 1;
let current = 0;
let sum = 0;
const limit = 4000000;

while (f1 + f2 < limit) {
  current = f1 + f2;
  f1 = f2;
  f2 = current;
  if (current % 2 === 0) sum += current;
}

console.log(sum);
