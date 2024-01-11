let sd= document.getElementById("sd");
let addi;
let result;
function add(a, b)
{
   addi = a+b;
   result =addi
   return result ;

}

let subtracti;
function subtract(a, b)
{
   subtracti = a-b;
   result=subtracti;
   return result;
}
let dividei;
function divide(a, b)
{
    dividei = a/b;
    result=dividei;
    return result;
}

let multiplyi;
function multiply(a, b)
{
    multiplyi = a*b;
    result=multiplyi;
    return result;
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

let firstButtonClicked=true;
let appendinput;
let appendoperater;
const clear = document.querySelector('#clear'); //when AC button is pressed 
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
    
firstButtonClicked = true;
console.log(firstButtonClicked);
console.log('Button 1 clicked');
    appendoperater='+';
    displayop(appendoperater);
    console.log(firstButtonClicked);
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

const del = document.querySelector('#del');
del.addEventListener('click', deleteLastDigit())

const btn1= document.querySelector('#one');
btn1.addEventListener('click',function()
{
    firstButtonClicked = false;
    console.log(firstButtonClicked);
   


appendinput=1;
displayval(appendinput);
}
);
const btn2= document.querySelector('#two');
btn2.addEventListener('click',function()
{
    firstButtonClicked = false;
    console.log(firstButtonClicked='true');
    if (firstButtonClicked) {
        dispv1=result;
    } 

console.log(firstButtonClicked);
appendinput=2;
displayval(appendinput);
}
);
const btn3= document.querySelector('#three');
btn3.addEventListener('click',function()
{
    firstButtonClicked = false;
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 

console.log(firstButtonClicked);
appendinput=3;
displayval(appendinput);
}
);
const btn4= document.querySelector('#four');
btn4.addEventListener('click',function()
{
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 
firstButtonClicked = false;
console.log(firstButtonClicked);
appendinput=4;
displayval(appendinput);
}
);
const btn5= document.querySelector('#five');
btn5.addEventListener('click',function()
{ console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    }

firstButtonClicked = false;
console.log(firstButtonClicked);
appendinput=5;
displayval(appendinput);

}
);
const btn6= document.querySelector('#six');
btn6.addEventListener('click',function()
{
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 
firstButtonClicked = false;
console.log(firstButtonClicked);
appendinput=6;
displayval(appendinput);
}
);
const btn7= document.querySelector('#seven');
btn7.addEventListener('click',function()
{
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 
firstButtonClicked = false;
console.log(firstButtonClicked);
appendinput=7;
displayval(appendinput);
}
);
const btn8= document.querySelector('#eight');
btn8.addEventListener('click',function()
{
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 
firstButtonClicked = false;
console.log(firstButtonClicked);
appendinput=8;
displayval(appendinput);
}
);
const btn9= document.querySelector('#nine');
btn9.addEventListener('click',function()
{
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 
firstButtonClicked = false;
console.log(firstButtonClicked);
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

  
});



function displayvaldot(appendinput)
{
sd.innerHTML=' ';
count+=3;
dispv=(((dispv*10)+appendinput)/10);
sd.innerHTML+=dispv;
return dispv;
}

function displayvaldot1(appendinput)
{
dispv1=(((dispv1*10)+appendinput)/10);
sd.innerHTML+=dispv1;
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
    dispv=appendinput;
    sd.innerHTML+="<h4>" + dispv + "</h4>";
    return dispv;
   } 
   else if(count>0 && count%2==0) {

        count++;
        dispv1=appendinput;
        sd.innerHTML+="<h4>" + dispv1 + "</h4>";
        return dispv1;
    }

    else{
        displayvaldot1(appendinput);
    }
    
      
}

/*let currentText;
function deleteLastDigit() {
    if(count===-1 && count%2!=0) {
        currentText= displayvaldot(appendinput);
        }

   else if(count%2!=0 && count>0)
   {
    count++;
    dispv=appendinput;
    currentText= "<h4>" + dispv + "</h4>";
   } 
   else if(count>0 && count%2==0) {

        count++;
        dispv1=appendinput;
        currentText=  "<h4>" + dispv1 + "</h4>";
        
    }

    else{
        currentText=displayvaldot1(appendinput);
    }
    

    if (currentText.length > 0) {
        // Remove the last character
        var newText = currentText.slice(0, -1);
        currentText = newText;
        displayval(currentText);
    }
}*/

let dispop=' ';
function displayop(appendoperater)
{
    if(appendoperater==='=')
    {
        
        //firstButtonClicked=false;
        displayresult();
        console.log(firstButtonClicked);
        //clearf();
    }
   
    else{
    console.log(appendoperater);
    dispop=appendoperater;
    sd.innerHTML+="<h4>" + dispop + "</h4>";
    return dispop;
    }
}



function displayresult(){

let result = operaterx(dispop,dispv,dispv1);
console.log(dispop);
console.log(dispv);
console.log(dispv1);
sd.innerHTML+= '=' + result;
console.log(result);

}





function clearf()
{
    count=1;
    sd.innerHTML=' ';
   
}

