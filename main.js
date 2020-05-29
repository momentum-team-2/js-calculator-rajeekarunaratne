// display value
let displayValue = ""

let sevenButton = document.querySelector("#seven");
sevenButton.addEventListener("click", function (){
    displayValue = displayValue + "7"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let eightButton = document.querySelector("#eight");
eightButton.addEventListener("click", function (){
    displayValue = displayValue + "8"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let nineButton = document.querySelector("#nine");
nineButton.addEventListener("click", function (){
    displayValue = displayValue + "9"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", function (){
    displayValue = displayValue + "/"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let fourButton = document.querySelector("#four");
fourButton.addEventListener("click", function (){
    displayValue = displayValue + "4"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let fiveButton = document.querySelector("#five");
fiveButton.addEventListener("click", function (){
    displayValue = displayValue + "5"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let sixButton = document.querySelector("#six");
sixButton.addEventListener("click", function (){
    displayValue = displayValue + "6"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", function (){
    displayValue = displayValue + "X"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let oneButton = document.querySelector("#one");
oneButton.addEventListener("click", function (){
    displayValue = displayValue + "1"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let twoButton = document.querySelector("#two");
twoButton.addEventListener("click", function (){
    displayValue = displayValue + "2"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let threeButton = document.querySelector("#three");
threeButton.addEventListener("click", function (){
    displayValue = displayValue + "3"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let minusButton = document.querySelector("#minus");
minusButton.addEventListener("click", function (){
    displayValue = displayValue + "-"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", function (){
    displayValue = displayValue + "0"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", function (){
    displayValue = displayValue + "."
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

let addButton = document.querySelector("#add");
addButton.addEventListener("click", function (){
    displayValue = displayValue + "+"
    console.log(displayValue)
    let displayElement = document.querySelector("#display");
    displayElement.innerText = displayValue
}); 

// not sure about these

let equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", math)
;

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearDisplay)
;

function clearDisplay() {
    displayValue = ""
    displayValue.innerHTML = ""
}

// function math() {
