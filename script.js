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

    if(b>a && b>0 && a>0)
    {
     subtracti= (a-b);
     result=subtracti;
     console.log("c1");
    }

    else if(b<0 && a>0){
     subtracti= (a-b);
     result=-1*(subtracti);
     console.log("c3");
    
    }
    
   else if(dispv1===result)
    {
     subtracti= -1*(a-b);
     result=subtracti;
     console.log("c4");
    }

    else{
        subtracti= (a-b);
        result=subtracti;
        console.log("c2");
    }
   

   
   return result;
}

let dividei;
function divide(a, b)
{

    if(dispv1===result)
    {
   dividei = b/a; 
    }
    else{
    dividei = a/b;
    }
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
    firstButtonClicked = true;
    console.log(firstButtonClicked);
    console.log('Button 1 for minus clicked');
        appendoperater='-';
        displayop(appendoperater);
        console.log(firstButtonClicked);
});

const multiple = document.querySelector('#multiply');
multiple.addEventListener('click',function()
{
    
firstButtonClicked = true;
console.log(firstButtonClicked);
console.log('Button 1 clicked');
    appendoperater='*';
    displayop(appendoperater);
    console.log(firstButtonClicked);
});
const division = document.querySelector('#divide');
division.addEventListener('click',function()
{
    
firstButtonClicked = true;
console.log(firstButtonClicked);
console.log('Button 1 clicked');
    appendoperater='/';
    displayop(appendoperater);
    console.log(firstButtonClicked);
});

const del = document.querySelector('#del');
del.addEventListener('click', function()
{
    deleteLastDigit();
});

const btn1= document.querySelector('#one');
btn1.addEventListener('click',function()
{
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 
firstButtonClicked = false;

if(dispv!==0 && count%2==0 && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+1;
    dispv=appendinput;
    console.log(appendinput);
}
else{
appendinput=1;
}
displayval(appendinput);
}
);
const btn2= document.querySelector('#two');
btn2.addEventListener('click',function()
{
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 
firstButtonClicked = false;
if(dispv!==0 && count%2==0 && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+2;
    dispv=appendinput;
    console.log(appendinput);
}
else{
appendinput=2;
}
displayval(appendinput);
}
);
const btn3= document.querySelector('#three');
btn3.addEventListener('click',function()
{
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 
firstButtonClicked = false;
if(dispv!==0 &&count%2==0 && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+3;
    dispv=appendinput;
    console.log(appendinput);
}
else{
appendinput=3;
}
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
    if(dispv!==0 &&count%2==0  && dispop===" ")
    {  
        count--;
        sd.innerHTML=' ';
        appendinput=(dispv*10)+4;
        dispv=appendinput;
        console.log(appendinput);
    }
    else{
    appendinput=4;
    }
    displayval(appendinput);
}
);
const btn5= document.querySelector('#five');
btn5.addEventListener('click',function()
{ console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    }
    if(dispv!==0 &&count%2==0  && dispop===" ")
    {  
        count--;
        sd.innerHTML=' ';
        appendinput=(dispv*10)+5;
        dispv=appendinput;
        console.log(appendinput);
    }
    else{
    appendinput=5;
    }
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
if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+6;
    dispv=appendinput;
    console.log(appendinput);
}
else{
appendinput=6;
}
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
if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+7;
    dispv=appendinput;
    console.log(appendinput);
}
else{
appendinput=7;
}
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
if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+8;
    dispv=appendinput;
    console.log(appendinput);
}
else{
appendinput=8;
}
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
if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+9;
    dispv=appendinput;
    console.log(appendinput);
}
else{
appendinput=9;
}
displayval(appendinput);
}
);
const btn0= document.querySelector('#zero');
btn0.addEventListener('click',function()
{
    console.log(firstButtonClicked);
    if (firstButtonClicked) {
        dispv1=result;
    } 
firstButtonClicked = false;
if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+0;
    dispv=appendinput;
    console.log(appendinput);
}
else{
appendinput=0;
}
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
    console.log("in the displayval function dispv is" + dispv)
    sd.innerHTML+= dispv;
    return dispv;
   } 
   else if(count>0 && count%2==0) {

        count++;
        dispv1=appendinput;
        console.log("in the displayval function dispv1 is" + dispv1)
        sd.innerHTML+="<h4>" + dispv1 + "</h4>";
        return dispv1;
    }

    else{
        displayvaldot1(appendinput);
    }
    
      
}



let currentText;
function deleteLastDigit() {
    if(count===-1 && count%2!=0) {
        currentText= displayvaldot(appendinput);
        }

   else if(count%2!=0 && count>0)
   {
    count++;
    dispv=appendinput;
    currentText=  dispv;
   } 
   else if(count>0 && count%2==0) {

        count++;
        dispv1=appendinput;
        currentText= dispv1;
        
    }

    else{
        currentText=displayvaldot1(appendinput);
    }
    

    if (currentText.length > 0) {
        // Remove the last character
        var newText = currentText.slice(0, -1);
        console.log(newText);
        currentText = newText;
       sd.innerHTML+= currentText ;
    }
}

let dispop=' ';
function displayop(appendoperater)
{
    if(appendoperater==='=')
    {
        count=1;
    
        firstButtonClicked=false;
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
dispop=" ";

}





function clearf()
{
    dispv=0;
    dispv1=0;
    count=1;
    sd.innerHTML=' ';
   
}

