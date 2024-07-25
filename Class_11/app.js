// Immediately Invoked Function Expressions (IIFE)
(function db() {
  console.log("DB Connected");
})();
(() => {
  console.log("DB Connected Two");
})();

(function showName(name) {
  // Named IIFE
  console.log(`Hello, ${name}`);
})("Danish");

// UnNamed IIFE
function addThree(num1) {
  let total = num1 + 3;
  return total;
}
console.log(addThree(10));
