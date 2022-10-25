let strings = ["aba", "baba", "vaba", "vxzxb", 3, "aba", "xzxb", "ab"];
let queries = ["aba", "vaba", 3];

// let result = []
let result = strings.filter((i) => queries.includes(i));

const count = {};

for (const element of result) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count)