function add(num1,num2){ return num1+num2;}
function subtract(num1,num2){ return num1-num2;}
function multiply(num1,num2){return num1*num2;}
function divide (num1,num2){
    if(num2===0) return "ERROR";
    return num1/num2;
}

function AC()
{
    display.textContent="0";
    displayContent='0';
    numBeforeOperator=0;
    operator_value="";
    numAfterOperator=1;
    ans_result=result;
    result=0;
    last_Operator="";
    backgroundColorToNormal();
    isFirst=0;
}

function backgroundColorToNormal()
{
    operators.forEach(operator=>{
                operator.style.backgroundColor="white";
            })
}

function listenNumber()
{
    const nummbers=document.querySelectorAll(".keypad .number1");
    nummbers.forEach(number=>{
        number.addEventListener("click",(e)=>{
            if(displayContent==="ERROR") AC();
            let target=e.target;
            if(displayContent!=="-")
            if(mode===1) display.textContent="";
            if(equalsToMode===1) AC();
            equalsToMode=0;
            display.textContent+=String(target.value);
            displayContent+=String(target.value);
            mode=0;
        })
    })
}

function listenOperator()
{
    // const operators=document.querySelectorAll(".keypad .operators");
    operators.forEach(operator=>{
        equalsToMode=0;
        operator.addEventListener("click",(e)=>{
            // operators.style.backgroundColor="white";
            equalsToMode=0;
           backgroundColorToNormal();
            if(displayContent==="ERROR") AC();
            let target=e.target;
            target.style.backgroundColor="red";
            operator_value=String(target.value);
            displayContent+=operator_value;
            findOut();
            mode=1;
        })
    })
}

function findOut()
{
    const arr=displayContent.split(/[+/*-]/);
    if(arr[0]==="" && arr[1]===""){
        AC();
        return;
    }

    if(arr[1]===undefined) {
        result=Number(arr[0]);
        // console.log("returned due to arr[0]");
        return;}
    if(arr[1]===""){
        displayContent=arr[0]+operator_value;
        last_Operator=operator_value;
        // console.log("Returned");
        return;
    // console.log("If i am present not returned");
}

    
    // console.log("Not returned");
    if(isFirst===0 || isFirst===1)
{    numBeforeOperator=Number(arr[0]);
    numAfterOperator=Number(arr[1]);

    result=operate();
    last_Operator=operator_value;
    if(arr[0]==="" && arr[2]===""){
        result=-Number(arr[1]);
        last_Operator=operator_value;
    }
    else if(arr[0]===""){
        numBeforeOperator=-Number(arr[1]);
        numAfterOperator=Number(arr[2]);
        
        result=operate();
        last_Operator=operator_value;
        
    }
    console.log(result);
    if(!Number.isInteger(result)) result=result.toFixed(2);
    display.textContent=String(result);
    mode=1;
    displayContent=String(result)+operator_value;
    display.textContent=String(result);
    }
    else{
        console.log("else is  working");
        numBeforeOperator=result;
        numAfterOperator=Number(arr[1]);
        console.log(numBeforeOperator,numAfterOperator,last_Operator);
        result=operate();
        if(arr[0]==="" && arr[2]===""){
        result=-Number(arr[1]);
        last_Operator=operator_value;
    }
        else if(arr[0]===""){
        numBeforeOperator=-Number(arr[1]);
        numAfterOperator=Number(arr[2]);
        
        result=operate();
        last_Operator=operator_value;
        
    }
        last_Operator=operator_value;
        if(!Number.isInteger(result)) result=result.toFixed(2);
    display.textContent=String(result);
    mode=1;
    displayContent=String(result)+operator_value;
    display.textContent=String(result);
    }
    isFirst++;
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

const arr_operators=["+","-","/","*"]
let numBeforeOperator=0;
let operator_value="";
let numAfterOperator=1;
let result=0;
let last_Operator="";
let isFirst=0;


const display=document.querySelector("div.display");
display.textContent="0";

const nums=document.querySelectorAll(".number1");

let displayContent='0';
let mode=0;
let equalsToMode=0;

const operators=document.querySelectorAll(".keypad .operators");

const equalsTo=document.querySelector(".equalsto");
equalsTo.addEventListener("click",()=>{
    equalsToMode=1;
    backgroundColorToNormal();
    findOut();
    operator_value="";
    display.textContent=String(result);
    displayContent=String(result);
})

const clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
    AC();
})

const del=document.querySelector(".delete");
del.addEventListener("click",()=>{
    console.log("del is clicked");
    if(equalsToMode===1) AC();
    if(display.textContent==="0") return;
    if(arr_operators.includes([...displayContent].pop())) return;
    const arr=[...display.textContent];
    arr.pop();
    display.textContent=arr.join("");
    const arr1=[...displayContent];
    arr1.pop();
    displayContent=arr1.join("");
})

listenNumber();

listenOperator();
