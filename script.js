let buttonCalculate = document.getElementById("calculate");
let buttonAddToArray = document.getElementById("addToArray");
let buttonRemoveLast = document.getElementById("removeLast");
let buttonClearArray = document.getElementById("clearArray");
let arrayOnPage = document.getElementById("array");

buttonCalculate.addEventListener("click",createLargestNumber);
buttonAddToArray.addEventListener("click",addToArray);
buttonRemoveLast.addEventListener("click",removeLastElemOfArray);
buttonClearArray.addEventListener("click",clearArray);

let array= [];

function createLargestNumber() {
    if (!array.length){
        alert("Array is empty!!");
        return;
    }
    alert("result is " + array.sort(firstNumberToFront).join(''));
}

function addToArray() {
    let num = prompt("input number more or equal to zero");
    if(!/^\d+$/.test(num) || (num.length > 1)&& num[0] == 0) return;
    array.push(num);
    arrayOnPage.innerHTML = array
}
function removeLastElemOfArray() {
    array.pop();
    arrayOnPage.innerHTML = array;
}
function clearArray() {
    array = [];
    arrayOnPage.innerHTML = array;
}

function firstNumberToFront(num1, num2) {
    return (num2.toString() + num1.toString()) - (num1.toString() + num2.toString());
}
