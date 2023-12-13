
let addi;
function add(a, b)
{
   addi = a+b;
   return addi;

}

let subtracti;
function subtract(a, b)
{
   subtracti = a-b;
   return subtracti;
}
let dividei;
function divide(a, b)
{
    dividei = a/b;
    return dividei;
}

let multiplyi;
function multiply(a, b)
{
    multiplyi = a*b;
    return multiplyi;
}

let operator;

function operaterx (operator,a,b)
{
if(operator==='+' && typeof(a)==="number" && typeof(b)==="number")
{
    return add(a,b);
}
else if(operator==='-' && typeof(a)==="number" && typeof(b)==="number")
{
    return subtract(a,b);
}
else if(operator==='/' && typeof(a)==="number" && typeof(b)==="number")
{
    return divide(a,b);
}
else if(operator==='*' && typeof(a)==="number" && typeof(b)==="number")
{
    return multiply(a,b);
}
else {
    console.log('Invalid operator or operands');
}

}

operaterx('-', 8, 1);

let appendinput;
let appendoperater;

const btn1= document.querySelector('#one');
btn1.addEventListener('click',function()
{
appendinput=1;
displayval(appendinput);
}
);
const btn2= document.querySelector('#two');
btn2.addEventListener('click',function()
{
appendinput=2;
displayval(appendinput);
}
);
const btn3= document.querySelector('#three');
btn3.addEventListener('click',function()
{
appendinput=3;
displayval(appendinput);
}
);
const btn4= document.querySelector('#four');
btn4.addEventListener('click',function()
{
appendinput=4;
displayval(appendinput);
}
);
const btn5= document.querySelector('#five');
btn5.addEventListener('click',function()
{
appendinput=5;
displayval(appendinput);
}
);
const btn6= document.querySelector('#six');
btn6.addEventListener('click',function()
{
appendinput=6;
displayval(appendinput);
}
);
const btn7= document.querySelector('#seven');
btn7.addEventListener('click',function()
{
appendinput=7;
displayval(appendinput);
}
);
const btn8= document.querySelector('#eight');
btn8.addEventListener('click',function()
{
appendinput=8;
displayval(appendinput);
}
);
const btn9= document.querySelector('#nine');
btn9.addEventListener('click',function()
{
appendinput=9;
displayval(appendinput);
}
);
const btn0= document.querySelector('#zero');
btn0.addEventListener('click',function()
{
appendinput=0;
displayval(appendinput);
}
);
let dispv;

let sd= document.getElementById("sd");
//sd.innerHTML+="<p> ji </p>";

function displayval(appendinput)
{
    sd.innerHTML= ' ';
    console.log(appendinput);
    dispv=appendinput;
    sd.innerHTML+="<h4>" + dispv + "</h4>";
    return dispv;
}


