// Loops
// For
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("5 is best number");
  }
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  console.log(`Outer Loop: ${i}`);
  for (let j = 0; j <= 5; j++) {
    console.log(`Inner Loop Value: ${j} and Outer loop ${i}`);
  }
}
for (let i = 1; i <= 10; i++) {
  console.log(`The Table is ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
