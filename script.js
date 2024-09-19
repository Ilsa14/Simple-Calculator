function calculate(operation) {
    // Get the input values and convert them to numbers
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    // Perform the calculation based on the selected operation
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        // Prevent division by zero
        if (num2 === 0) {
            result = "Cannot divide by zero!";
        } else {
            result = num1 / num2;
        }
    }

    // Display the result
    document.getElementById("result").innerText = `Result: ${result}`;
}