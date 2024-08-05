const form = document.querySelector("form");
// console.log(form)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e)
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = "Please Give a Valid Height";
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please Give a Valid weight";
  } else {
    const bmi = (weight / ((weight * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight = ${bmi}</span>`;
    } else if (bmi < 24.9) {
      results.innerHTML = `<span>Normal Range = ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Overweight  = ${bmi}</span>`;
    }
  }
});
