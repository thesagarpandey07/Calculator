function add(num1,num2){ return num1+num2;}
function subtract(num1,num2){ return num1-num2;}
function multiply(num1,num2){return num1*num2;}
function divide (num1,num2){
    if(num2===0) return "ERROR";
    return num1/num2;
}

let numBeforeOperator=0;
let operator_value="";
let numAfterOperator=1;
let result=0;
let last_Operator="";


const display=document.querySelector("div.display");
display.textContent="";
const nums=document.querySelectorAll(".number1");

const display1=document.querySelector("div.display1");
display1.textContent="";

let displayContent='';
let mode=0;

function listenNumber()
{
    const nummbers=document.querySelectorAll(".keypad .number1");
    nummbers.forEach(number=>{
        number.addEventListener("click",(e)=>{
            if(display1.textContent==="ERROR") AC();
            let target=e.target;
            if(mode===1) display.textContent="";
            display.textContent+=String(target.value);
            display1.textContent+=String(target.value);
            displayContent+=String(target.value);
            mode=0;
        })
    })
}
listenNumber();
function listenOperator()
{
    const operators=document.querySelectorAll(".keypad .operators");
    operators.forEach(operator=>{
        operator.addEventListener("click",(e)=>{
            if(display1.textContent==="ERROR") AC();
            let target=e.target;
            operator_value=String(target.value);
            // console.log(operator_value);
            display1.textContent+=operator_value;
            displayContent+=operator_value;
            console.log(displayContent);
            console.log(Number(displayContent));
            console.log(Number(displayContent===NaN));
            findOut();
            mode=1;
        })
    })
}
listenOperator();

function findOut()
{
    // console.log(display1.textContent);
    const arr=display1.textContent.split(/[+-/*]/);
    const arr1=displayContent.split(/[+-/*]/);
    // console.log(arr);
    if(arr[1]===undefined) {
        // console.log("returned due to arr[0]");
        return;}
    if(arr[1]===""){
        display1.textContent=arr[0]+operator_value;
        displayContent=arr1[0]+operator_value;
        last_Operator=operator_value;
        // console.log("Returned");
        return;
    // console.log("If i am present not returned");
}
    // console.log("Not returned");
    numBeforeOperator=Number(arr[0]);
    numAfterOperator=Number(arr[1]);
    result=operate();
    last_Operator=operator_value;
    // console.log(result);
    display1.textContent=String(result)+operator_value;
    display.textContent=String(result);
    mode=1;
    displayContent=String(result)+operator_value;
    // displayContent=String(result);
    return;
}
function operate()
{
    result=0;
    if(last_Operator==="+") {
        result= add(numBeforeOperator,numAfterOperator);
        // console.log("I am adder");
        // console.log(result);
    return result;}
    if(last_Operator==="-") return subtract(numBeforeOperator,numAfterOperator);
    if(last_Operator==="/") return divide(numBeforeOperator,numAfterOperator);
    if(last_Operator==="*") return multiply(numBeforeOperator,numAfterOperator);
}

const equalsTo=document.querySelector(".equalsto");
equalsTo.addEventListener("click",()=>{
    findOut();
    operator_value="";
    display1.textContent=String(result);
    displayContent=String(result);
})

const clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
    AC();
})

function AC()
{
    display1.textContent="";
    display.textContent="";
    displayContent='';
    numBeforeOperator=0;
    operator_value="";
    numAfterOperator=1;
    result=0;
    last_Operator="";
}
