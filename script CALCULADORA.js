var display = document.getElementById("display");
var expression = "";

display.innerHTML = "0";

function add(caracter) {
    if (display.innerHTML === "0") {
        display.innerHTML = "";
    }
    expression += caracter;
    display.innerHTML = expression;
}

function clearDisplay() {
    expression = "";
    display.innerHTML = "0";
}

function calculate() {
    try {
        var result = eval(expression);
        display.innerHTML = result;
        expression = result.toString(); 
    } catch (error) {
        display.innerHTML = 'Error';
        expression = "";
    }
}

function deleteLast() {
    
    expression = expression.slice(0, -1);
    display.innerHTML = expression || "0"; 
}
