"use strict";

let currentNumber = 0;
let result = 0;
let operator = "";
let flag = 0;
let numberButton = document.querySelectorAll(".numberBtn");
let clearButton = document.querySelector("#clear-all");
let operatorButton = document.querySelectorAll(".operatorBtn");
let deleteButton = document.querySelector("#delete");

let setCurrentNumber = function(num) {
    currentNumber = num;
}
let setResult = function(num) {
    result = num;
}
let calculate = function() {
   switch (operator) {
       case "+":
            setResult(add(result,currentNumber));
            printToScreen(result);
           break;
        case "-":
            setResult(minus(result,currentNumber));
            printToScreen(result);
            break;
        case "*":
            setResult(multiply(result,currentNumber));
            printToScreen(result);
            break;
        case "/":
            if(currentNumber === 0){
                printToScreen("CANNOT DEVIDE ZERO!")
                break;
            } 
            setResult(divide(result,currentNumber));
            printToScreen(result);
            break;
        case "%":
            setResult(modulus(result,currentNumber));
            printToScreen(result);
            break;
   }
}
let setOperator = function(Op) {
    operator = Op;
    flag = 1;
}
// Named Function
var add = function(a, b) {
    return (a*10 + b*10)/10;
};
var minus = function(a, b) {
    return (a*10 - b*10)/10;
};
var multiply = function(a, b) {
    return (a * b)*10/10;
};
var divide = function(a, b) {
    return a / b;
};
var modulus = function(a, b) {
    return (a % b)*10/10;
};
let printToScreen = function(content) {
    let screen = document.getElementById("result");
    screen.value = content;
}
let getValueFromScreen = function()
{
    let screen = document.getElementById("result");
    return screen.value;
}


function numberInput(btn){
    let value = btn.value;
    
    // kiểm tra dung dan cua man hinh 
    let currentScreen = getValueFromScreen();
    // console.log(currentScreen);
    // console.log(value);
    // printToScreen(value);
    // when screen is zero
    if (flag === 1) {
        currentScreen = "0";
        flag = 0;
    }
    if (currentScreen === "0") {   
        if (value === "."){
            printToScreen(currentScreen+value);
        } else {
            printToScreen(value);
        }
    } 
    // when screen is not zero
    else {
        if (value === ".") {
            if (currentScreen.indexOf(".") === -1) {
                printToScreen(currentScreen+value); 
            } else {
                // khong lam  gi ca
            }
        }
        else  {
            printToScreen(currentScreen+value);
        }
    } 
}


// for (let i = 0; i < numberButton.length; i++) {
//     numberButton[i].addEventListener("click", numberInput)      
// }
numberButton.forEach(button => {
    button.addEventListener("click", () => numberInput(button))
})
        

function operatorInput(btn) {
    let operator = btn.value;
    let currentScreen = getValueFromScreen();
    switch (operator) {
        case "+":
            setResult(Number(currentScreen));
            setOperator("+");
            setCurrentNumber(Number(currentScreen));
            break;
        case "-":
            setResult(Number(currentScreen));
            setOperator("-");
            setCurrentNumber(Number(currentScreen));
            break;
        case "*":
            setResult(Number(currentScreen));
            setOperator("*");
            setCurrentNumber(Number(currentScreen));
            break;
        case "/":
            setResult(Number(currentScreen));
            setOperator("/");
            setCurrentNumber(Number(currentScreen));
            break;
        case "%":
            setResult(Number(currentScreen));
            setOperator("%");
            setCurrentNumber(Number(currentScreen));
            break;
        case "=":
            if (flag === 0) {
                setCurrentNumber(Number(currentScreen));
            }
            calculate();
            
            flag = 1;
            break;
    }
}

operatorButton.forEach(button => {
    button.addEventListener("click", () => operatorInput(button))
})

// Clear All
let clearAll = function(){
    printToScreen ("0");
    setCurrentNumber (0);
    setResult (0);
    setOperator ("");

}

clearButton.addEventListener("click", clearAll);

let deleteOne = function(){
    let screen = document.getElementById("result").value;
    let content = screen.toString().slice(0, -1);
    printToScreen(content);
    
}
deleteButton.addEventListener("click", deleteOne);
