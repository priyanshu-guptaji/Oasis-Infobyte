function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var resultDisplay = document.getElementById("result");
    if (isNaN(temperatureInput)) {
        resultDisplay.textContent = "Please enter a valid number.";
        return;
    }
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
    var unit;
    switch (unitSelect) {
        case "celsius":
            convertedTemperature = (temperature - 32) * (5/9);
            unit = "Celsius";
            break;
        case "fahrenheit":
            convertedTemperature = (temperature * (9/5)) + 32;
            unit = "Fahrenheit";
            break;
        case "kelvin":
            convertedTemperature = temperature + 273.15;
            unit = "Kelvin";
            break;
        default:
            convertedTemperature = temperature;
            unit = "Invalid Unit";
            break;
    }
    resultDisplay.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + unit;
}