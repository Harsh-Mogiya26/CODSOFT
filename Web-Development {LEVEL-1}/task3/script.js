function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === 'del') {
        display.value = display.value.slice(0, -1); 
    } else {
        display.value += value === 'mod' ? '%' : value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value.replace(/mod/g, '%'));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    }
    if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        appendToDisplay(key);
    }
    if (key === 'Enter') {
        calculateResult();
    }
    if (key === 'Escape') {
        clearDisplay();
    }
    if (key === 'Backspace') {
        appendToDisplay('del');
    }
});
