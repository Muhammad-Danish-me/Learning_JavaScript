// Immediately Invoked Function Expressions IIFE
(function db() {
  console.log("DB Connected");
})();
(() => {
  console.log("DB Connected Two");
})();
