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

function listenNumber()
{
    const nummbers=document.querySelectorAll(".keypad .number1");
    nummbers.forEach(number=>{
        number.addEventListener("click",(e)=>{
            let target=e.target;
            display.textContent+=String(target.value);
            display1.textContent+=String(target.value);
            displayContent+=String(target.value);
        })
    })
}
listenNumber();
function listenOperator()
{
    const operators=document.querySelectorAll(".keypad .operators");
    operators.forEach(operator=>{
        operator.addEventListener("click",(e)=>{
            let target=e.target;
            operator_value=String(target.value);
            console.log(operator_value);
            display1.textContent+=operator_value;
            findOut();
            
        })
    })
}
listenOperator();

function findOut()
{
    console.log(display1.textContent);
    const arr=display1.textContent.split(/[+-/*]/);
    if(arr[1]===""){
        display1.textContent=arr[0]+operator_value;
        last_Operator=operator_value;
        console.log("Returned");
        return;
    console.log("If i am present not returned");}
    console.log("Not returned");
    numBeforeOperator=Number(arr[0]);
    numAfterOperator=Number(arr[1]);
    result=operate();
    last_Operator=operator_value;
    console.log(result);
    display1.textContent=String(result)+operator_value;
    displayContent=String(result);
    return;
}
function operate()
{
    result=0;
    if(last_Operator==="+") {
        result= add(numBeforeOperator,numAfterOperator);
        console.log("I am adder");
        console.log(result);
    return result;}
    if(last_Operator==="-") return subtract(numBeforeOperator,numAfterOperator);
    if(last_Operator==="/") return divide(numBeforeOperator,numAfterOperator);
    if(last_Operator==="*") return multiply(numBeforeOperator,numAfterOperator);
    
}


