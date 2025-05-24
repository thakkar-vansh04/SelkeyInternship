document.getElementById('add').addEventListener('click', () => calculate('+'));
document.getElementById('subtract').addEventListener('click', () => calculate('-'));
document.getElementById('multiply').addEventListener('click', () => calculate('*'));
document.getElementById('divide').addEventListener('click', () => calculate('/'));
document.getElementById('clear').addEventListener('click', clearResult);

function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers.';
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero.';
                break;
            default:
                result = 'Invalid operator.';
        }
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}

function clearResult() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '';
}
