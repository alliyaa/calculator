let sd= document.getElementById("sd");
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



let appendinput;
let appendoperater;
const clear = document.querySelector('#clear');
clear.addEventListener('click',function()
{ 
    clearf()
});
const equal = document.querySelector('#equal');
equal.addEventListener('click',function()
{
    appendoperater='=';
    displayop(appendoperater);
});
const plus = document.querySelector('#plus');
plus.addEventListener('click',function()
{
    appendoperater='+';
    displayop(appendoperater);
});

const minus = document.querySelector('#minus');
minus.addEventListener('click',function()
{
    appendoperater='-';
    displayop(appendoperater);
});

const multiple = document.querySelector('#multiply');
multiple.addEventListener('click',function()
{
    appendoperater='*';
    displayop(appendoperater);
});
const division = document.querySelector('#divide');
division.addEventListener('click',function()
{
    appendoperater='/';
    displayop(appendoperater);
});

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
});




let dispv=0;  
let dispv1=0;
let storev;
let count=1;

const decimalpt= document.querySelector('#decimal');
decimalpt.addEventListener('click',function()
{
    if(count%2==0)
   { count=-1;
   }
   else if(count%2!=0)
   { count=-2;
   }
    displayop('.');
});



function displayvaldot(appendinput)
{
count+=3;
dispv=(((dispv*10)+appendinput)/10);
console.log(dispv);
sd.innerHTML+=dispv;
console.log("in display valdot function  count"+ count);
return dispv;
}

function displayvaldot1(appendinput)
{
//count--;
console.log(dispv1);
console.log(appendinput);
dispv1=(((dispv1*10)+appendinput)/10);
console.log(dispv1);
sd.innerHTML+=dispv1;
console.log("in display valdot function 1 count"+ count);
return dispv1;
}


let dotnumber;
function displayval(appendinput)
{
   

 if(count===-1 && count%2!=0) {
        displayvaldot(appendinput);
        }

   else if(count%2!=0 && count>0)
   {
    count++;
    console.log("in display val function 1 count"+ count);
    dispv=appendinput;
    sd.innerHTML+="<h4>" + dispv + "</h4>";
    return dispv;
   }

    else if(count>0 && count%2==0) {

        count++;
        console.log("in display val function 2 count"+ count);
        dispv1=appendinput;
        sd.innerHTML+="<h4>" + dispv1 + "</h4>";
        return dispv1;
    }

    else{
        displayvaldot1(appendinput);
    }
      
}

let dispop=' ';
function displayop(appendoperater)
{
    if(appendoperater==='=')
    {
        displayresult();
        //clearf();
    }
    /*else if(appendoperater==='.')
    {
       
        console.log(appendoperater);
        console.log(count);
        dispop=appendoperater;
        sd.innerHTML+="<h4>" + dispop + "</h4>";
        return dispop;
    }*/
    else{
    console.log(appendoperater);
    dispop=appendoperater;
    sd.innerHTML+="<h4>" + dispop + "</h4>";
    return dispop;
    }
}



function displayresult(){

let result = operaterx(dispop,dispv,dispv1);
sd.innerHTML+= '=' + result;
console.log(result);
}



function clearf()
{
    count=0;
    sd.innerHTML=' ';
}

