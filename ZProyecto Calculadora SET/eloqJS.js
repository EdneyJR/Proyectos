let m = "";
for (let i = 1; i <= 7; i++) {
  console.log(`${(m += "#")}`);
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

const c = 8;
let h = "";
let k = "";
for (let i = 1; i <= c; i++) {
  if (i % 2 === 0) {
    h += "#";
    k += " ";
  } else {
    h += " ";
    k += "#";
  }
}

for (let u = 1; u <= c; u++) {
  if (u % 2 === 0) {
    console.log(h);
  } else {
    console.log(k);
  }
}
