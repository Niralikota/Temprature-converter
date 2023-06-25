function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unitSelect = document.getElementById("unit");
  var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

  // Validate input is a number
  if (isNaN(temperatureInput)) {
    alert("Invalid temperature input. Please enter a number.");
    return;
  }

  var convertedTemperature;
  var convertedUnit;

  if (selectedUnit === "celsius") {
    convertedTemperature = (temperatureInput * 9 / 5) + 32;
    convertedUnit = "°F";
  } else if (selectedUnit === "fahrenheit") {
    convertedTemperature = (temperatureInput - 32) * 5 / 9;
    convertedUnit = "°C";
  }

  document.getElementById("result").textContent = "Converted Temperature: " + convertedTemperature.toFixed(2) + convertedUnit;
}
