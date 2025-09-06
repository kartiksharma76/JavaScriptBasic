const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form from reloading the page

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    results.textContent = "Please enter valid height and weight values.";
    results.style.color = "red";
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  let category = "";
  if (bmi < 18.6) {
    category = "Underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = "Normal";
  } else {
    category = "Overweight";
  }

  results.style.color = "white";
  results.textContent = `Your BMI is ${bmi} (${category})`;
});
