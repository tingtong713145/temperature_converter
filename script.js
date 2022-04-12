function handleInput() {
    var celsius = document.getElementById('celsius');
    let output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function handlePinput() {
    var fahrenheit = document.getElementById('fahrenheit');
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
}