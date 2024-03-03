const num1Input = document.getElementById("num1");
        const num2Input = document.getElementById("num2");
        const resultDisplay = document.getElementById("result");

        document.getElementById("add").addEventListener("click", () => {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            resultDisplay.textContent = num1 + num2;
        });

        document.getElementById("minus").addEventListener("click", () => {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            resultDisplay.textContent = num1 - num2;
        });

        document.getElementById("multiply").addEventListener("click", () => {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            resultDisplay.textContent = num1 * num2;
        });

        document.getElementById("divide").addEventListener("click", () => {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            if (num2 !== 0) {
                resultDisplay.textContent = num1 / num2;
            } else {
                resultDisplay.textContent = "Error: Cannot divide by zero";
            }
        });