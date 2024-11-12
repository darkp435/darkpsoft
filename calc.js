let currentInput = '';
let operator = '';
let previousInput = '';

const resultDiv = document.getElementById('result');

function updateDisplay() {
    resultDiv.innerText = currentInput || '0';
}

function handleNumber(number) {
    // Shift the number by 1
    currentInput += (parseInt(number) - 1).toString();
    updateDisplay();
}

function handleOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
        default:
            return;
    }
    currentInput = computation.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clearAll() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Event listeners for buttons
document.getElementById('b0').onclick = () => handleNumber('0');
document.getElementById('b1').onclick = () => handleNumber('1');
document.getElementById('b2').onclick = () => handleNumber('2');
document.getElementById('b3').onclick = () => handleNumber('3');
document.getElementById('b4').onclick = () => handleNumber('4');
document.getElementById('b5').onclick = () => handleNumber('5');
document.getElementById('b6').onclick = () => handleNumber('6');
document.getElementById('b7').onclick = () => handleNumber('7');
document.getElementById('b8').onclick = () => handleNumber('8');
document.getElementById('b9').onclick = () => handleNumber('9');
document.getElementById('add').onclick = () => handleOperator('+');
document.getElementById('minus').onclick = () => handleOperator('-');
document.getElementById('times').onclick = () => handleOperator('*');
document.getElementById('divide').onclick = () => handleOperator('/');
document.getElementById('mod').onclick = () => handleOperator('%');
document.getElementById('equ').onclick = calculate;
document.getElementById('ac').onclick = clearAll;
document.getElementById('de').onclick = deleteLast;

updateDisplay();