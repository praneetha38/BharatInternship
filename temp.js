document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultValue = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelect.value;
        let convertedTemperature = 0;

        if (!isNaN(temperature)) {
            if (selectedUnit === "celsius") {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (selectedUnit === "fahrenheit") {
                convertedTemperature = (temperature - 32) * 5/9;
            }

            resultValue.textContent = convertedTemperature.toFixed(2) + " " + (selectedUnit === "celsius" ? "Fahrenheit" : "Celsius");
        } else {
            resultValue.textContent = "Invalid input";
        }
    });
});
