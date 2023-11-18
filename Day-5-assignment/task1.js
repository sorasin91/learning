function performArithmeticOperations() {
            
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

   
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;

   
    console.log(
        "Addition: " + addition + "\n" +
        "Subtraction: " + subtraction + "\n" +
        "Multiplication: " + multiplication + "\n" +
        "Division: " + division.toFixed(2) 
    );
}