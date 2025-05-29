let firstValue = '';
let secondValue = '';
let turnOther = false;
let choice;

const actionButtons = document.querySelectorAll(".action");
const numberButtons = document.querySelectorAll(".number");
const result = document.querySelector(".result");

numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        if (turnOther == false) {
            firstValue += number.textContent; 
            result.value += number.textContent; 
        } else {
            secondValue += number.textContent; 
            result.value += number.textContent; 
        }
    });
});

actionButtons.forEach(action => { 
    action.addEventListener('click', () => {
        if (action.textContent == '=') {
            firstValue = parseFloat(firstValue);
            secondValue = parseFloat(secondValue);
            let equality = 0;

            switch (choice) {
                case '+':
                    equality = firstValue + secondValue;
                    break;
                case '-':
                    equality = firstValue - secondValue;
                    break;
                case '*':
                    equality = firstValue * secondValue;
                    break;
                case '/':
                    if (secondValue === 0) {
                        alert("На 0 не ділиться!");
                        result.value = '';
                        firstValue = '';
                        secondValue = '';
                        choice = '';
                        turnOther = false;
                    } else {
                        equality = firstValue / secondValue;
                    }
                    break;
            }

            result.value = equality % 1 === 0 ? equality.toFixed(0) : equality.toFixed(1);

            firstValue = result.value; 
            secondValue = ''; 
            choice = ''; 
            turnOther = false; 
        } else if (action.textContent == 'C') {
            result.value = '';
            firstValue = '';
            secondValue = '';
            choice = '';
            turnOther = false;
        } else if (action.textContent == '->') {
            result.value = result.value.slice(0, -1);
            if (result.value === '') {
                result.value = '0';
            }
            if (turnOther == false) {
                firstValue = result.value;
            } else {
                secondValue = result.value;
            }
        } else {

            if (turnOther == false) {
                turnOther = true;
                firstValue = result.value;
                result.value = '';
                choice = action.textContent;
            } else {
                turnOther = false;
                secondValue = result.value;
                result.value = '';
                choice = action.textContent; 
            }
        }
    });
});

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.border = 'none';
        setTimeout(() => {
            if (button.textContent == '=') {
                button.style.borderBottom = '8px solid #682c1d';
                button.style.borderRight = '8px solid #682c1d';
            } else {
                button.style.borderBottom = '8px solid #778a84';
                button.style.borderRight = '8px solid #778a84';
            }
        }, 300);
    });
});