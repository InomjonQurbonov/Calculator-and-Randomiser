// Get references to the input fields and the result display
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('add').addEventListener('click', function () {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Please enter valid numbers.';
    } else {
        const randomNum = getRandomInt(num1, num2);
        resultDisplay.textContent = `Random number: ${randomNum}`;
    }
});

document.getElementById('random').addEventListener('click', function () {
    console.log('Back to Calculator clicked.');
});
