/*Setting up the environment*/
var isOperating = false;
var isFloating = false;
var toBeCleared = false;
var operand;
var operator;
var display;



$(document).ready(init);

function init(){
 display = $("#display");
$('.btn-primary').on('click', primaryClicked);
$('.operator').on('click', operatorClicked);
$('#btnClear').on('click', clearClicked);
$('#btnCalculate').on('click',calculateClicked);
};

//Checking that classes and Ids match button
/*function primaryClicked() {
    alert('Primary number button clicked!');
}

function operatorClicked() {
    alert('Operator button clicked!');
}

function clearClicked() {
    alert('Clear button clicked!');
}


function calculateClicked() {
    alert('Calculate button clicked!');
}*/

//Primary number buttons
function primaryClicked() {
    var currVal = display.val();
    var clickedNum = $(this).text();

    if (currVal === "0" || toBeCleared) {
        toBeCleared = false;
        display.val(clickedNum);
    } else {
        display.val(currVal + clickedNum);
    }
}

//clear button
function clearClicked() {
    reset();
    display.val('0');
}

function reset() {
    toBeCleared = true;
    isOperating = false;
    isFloating = false;
    primary = null;
    operator = null;
    $('#currOp').text('');
}

//operators
function operatorClicked() {
    if (isOperating) {
        display.val(evaluate());
    }
    switch ($(this).attr('id')) {
        case 'add': operator = '+'; break;
        case 'subtract': operator = '−'; break;
        case 'multiply': operator = '×'; break;
        case 'divide': operator = '÷'; break;
    }
    operand = parseFloat(display.val());
    isOperating = true;
    toBeCleared = true;
    $('#currOp').text(operator);
}

function evaluate() {
    var currVal = parseFloat(display.val());
    var result;
    switch (operator) {
        case '+': result = operand + currVal; break;
        case '−': result = operand - currVal; break;
        case '×': result = operand * currVal; break;
        case '÷':
            if (currVal === 0) {
                result = 'Err';
            } else {
                result = operand / currVal;
            }
            break;
        default: result = currVal;
    }
    return result;
}

//calculate or "=" sign
function calculateClicked() {
    display.val(evaluate());
    reset();
}