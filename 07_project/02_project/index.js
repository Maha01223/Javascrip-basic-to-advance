console.log("Mohsin Ansari");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  // isNAN means id someone put a-z so its show put valid number
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give me a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);

    let weightType = "";
    if (bmi < 18.6) {
      weightType = "under wieght";
    } else if (bmi > 18.6 && bmi < 24.9) {
      weightType = "Normal Weight";
    } else {
      weightType = "OverWeight";
    }

    // show the reults
    result.innerHTML = `<span>Persons BMI is ${bmi} so it is ${weightType}</span>`;
  }
});
