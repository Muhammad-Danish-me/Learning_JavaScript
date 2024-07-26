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
