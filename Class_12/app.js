// control Flow in JavaScript
//  IF
const temperature = 41;
if (temperature < 50) {
  console.log(`Temperature is Less than 50`);
} else {
  console.log(`Temperature is Greater than 50`);
}

// Implicit Scoop
const balance = 2000;
if (balance > 500) console.log("test"), console.log("Test 2");

if (balance < 500) {
  console.log(`less than  500`);
} else if (balance < 1000) {
  console.log(`less than 1000`);
} else if (balance < 1500) {
  console.log(`less than 1500`);
} else {
  console.log(`less than 2500`);
}
