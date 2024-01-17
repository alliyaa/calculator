let sd= document.getElementById("sd");
let ms = document.getElementById("myDiv");

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
    }

    else if(b<0 && a>0){
     subtracti= (a-b);
     result=-1*(subtracti);
    
    }
    
   else if(dispv1===result)
    {
     subtracti= -1*(a-b);
     result=subtracti;
    }

    else {
        subtracti= (a-b);
        result=subtracti;
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


}

let firstButtonClicked=false;
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
    decid=0;
    appendoperater='=';
    displayop(appendoperater);
});
const plus = document.querySelector('#plus');
plus.addEventListener('click',function()
{
decid=0;
firstButtonClicked = true;

if (firstButtonClicked) {
    dispv1=result;
    displayval(dispv1);
} 
    appendoperater='+';
    displayop(appendoperater);
});

const minus = document.querySelector('#minus');
minus.addEventListener('click',function()
{
    decid=0;
    firstButtonClicked = true;

    if (firstButtonClicked) {
        dispv1=result;
        displayval(dispv1);
    } 
        appendoperater='-';
        displayop(appendoperater);
      
});

const multiple = document.querySelector('#multiply');
multiple.addEventListener('click',function()
{
decid=0;
firstButtonClicked = true;

if (firstButtonClicked) {
    dispv1=result;
    displayval(dispv1);
} 
    appendoperater='*';
    displayop(appendoperater);
    
});
const division = document.querySelector('#divide');
division.addEventListener('click',function()
{
decid=0;
firstButtonClicked = true;

if (firstButtonClicked) {
    dispv1=result;
    displayval(dispv1);
} 
    appendoperater='/';
    displayop(appendoperater);
    
});

const del = document.querySelector('#del');
del.addEventListener('click', function()
{
    
    if(dispop===" ")
    {
        deletedispv1();
    }
   
    else
    {
        deletedispv2();
    }
   
});



function deletedispv1()
{
    
    
    if(decid===1)
    {
    dispv=(dispv*10);
    dispv=parseInt(dispv/10);
    sd.innerHTML= ' ';
    count++;
    displayval(dispv);
    }

    else {
    dispv = parseInt(dispv/10);
    sd.innerHTML= ' ';
    count++;
    displayval(dispv);
    }
    


  
}

 function deletedispv2()
 {


    
    if(decid===1)
    {
    dispv1=(dispv1*10);
    dispv1=parseInt(dispv1/10);
  
    ms.innerHTML= ' ';
    count=count*(-1);
    
    displayval(dispv1);
    }

    
    else {
    dispv1 = parseInt(dispv1/10);

    ms.innerHTML= ' ';
    count++;
    displayval(dispv1);
    }

 }
 

const btn1= document.querySelector('#one');
btn1.addEventListener('click',function()
{  

firstButtonClicked = false;
if(dispv!==0 && count%2==0 && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+1;
    dispv=appendinput;
}
else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
{
    count--;
    ms.innerHTML=" ";
    appendinput=(doubledigits*10)+1;
    dispv1=appendinput;
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
     
firstButtonClicked = false;
if(dispv!==0 && count%2==0 && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+2;
    dispv=appendinput;
}
else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
{
    count--;
    ms.innerHTML=" ";
    appendinput=(doubledigits*10)+2;
    dispv1=appendinput;
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
    
firstButtonClicked = false;
if(dispv!==0 &&count%2==0 && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+3;
    dispv=appendinput;
}
else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
{
    count--;
    ms.innerHTML=" ";
    appendinput=(doubledigits*10)+3;
    dispv1=appendinput;

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
    firstButtonClicked=false;
    if(dispv!==0 &&count%2==0  && dispop===" ")
    {  
        count--;
        sd.innerHTML=' ';
        appendinput=(dispv*10)+4;
        dispv=appendinput;
    }

    else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
{
    count--;
    ms.innerHTML=" ";
    appendinput=(doubledigits*10)+4;
    dispv1=appendinput;

}
    else{
    appendinput=4;
    }
    displayval(appendinput);
}
);
const btn5= document.querySelector('#five');
btn5.addEventListener('click',function()
{ 
    firstButtonClicked=false;
    if(dispv!==0 && count%2==0  && dispop===" ")
    {  
        count--;
        sd.innerHTML=' ';
        
        appendinput=(dispv*10)+5;
        dispv=appendinput;
        
    }

    else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
    {
        count--;
        ms.innerHTML=" ";
        appendinput=(doubledigits*10)+5;
        dispv1=appendinput;
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
    firstButtonClicked = false;

if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+6;
    dispv=appendinput;
}

else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
{
    count--;
    ms.innerHTML=" ";
    appendinput=(doubledigits*10)+6;
    dispv1=appendinput;
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
     
firstButtonClicked = false;
if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+7;
    dispv=appendinput;
    console.log(appendinput);
}


else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
{
    count--;
    ms.innerHTML=" ";
    appendinput=(doubledigits*10)+7;
    dispv1=appendinput;
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
    
firstButtonClicked = false;
if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+8;
    dispv=appendinput;
}

else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
{
    count--;
    ms.innerHTML=" ";
    appendinput=(doubledigits*10)+8;
    dispv1=appendinput;
}

else
{
appendinput=8;
}

displayval(appendinput);
}
);
const btn9= document.querySelector('#nine');
btn9.addEventListener('click',function()
{
    
firstButtonClicked = false;
if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+9;
    dispv=appendinput;
}
else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
{
    count--;
    ms.innerHTML=" ";
    appendinput=(doubledigits*10)+9;
    dispv1=appendinput;
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
   
firstButtonClicked = false;
if(dispv!==0 &&count%2==0  && dispop===" ")
{  
    count--;
    sd.innerHTML=' ';
    appendinput=(dispv*10)+0;
    dispv=appendinput;
}
else if(dispv1!==0 && count%2!==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*")))
{
    count--;
    appendinput=(doubledigits*10)+0;
    dispv1=appendinput;
}
else{
appendinput=0;
}
displayval(appendinput);
});



let dispv=0;  
let dispv1=0;
let count=1;


const decimalpt= document.querySelector('#decimal');
decimalpt.addEventListener('click',function()
{
  appendoperater=".";
    displayop(appendoperater);

    if(count%2==0)
   { count=-1;
   
   }
    else if (count%2!=0)
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
ms.innerHTML=" ";
dispv1=(((dispv1*10)+appendinput)/10);
ms.innerHTML+=dispv1;
return dispv1;
}


let dotnumber;
let doubledigits;
function displayval(appendinput)
{
   

    if(count===-1 && count%2!=0 && (dispop===" " || dispop===".")){
       displayvaldot(appendinput);
    }
    

   else if(count%2!==0 && count>0 && (dispop===" " || dispop==="."))
   {
    sd.innerHTML= ' ';
    ms.innerHTML =' ';
    count++;
    dispv=appendinput;
    sd.innerHTML+= dispv;
   } 
   else if (count>0 && count%2==0 && ((dispop==="+") || (dispop==="-") || (dispop==="/") || (dispop==="*"))) {

        count++;
        dispv1=appendinput;
        
        ms.innerHTML += dispv1;
        doubledigits=dispv1;
        return dispv1;
    }

    else if  (count<0 && count%2==0) {
        displayvaldot1(appendinput);
    }

   

    
    
      
}





let dispop=' ';
let decid=0;
function displayop(appendoperater)
{
     if(appendoperater==='.'){
    decid=1;
   
    }

    else if(appendoperater==='=')
    {
        count=1;
        firstButtonClicked=false;
        displayresult();
    }
   
    else{
    dispop=appendoperater;
    sd.innerHTML+= dispop;
    return dispop;
    }
}



function displayresult(){

let result = operaterx(dispop,dispv,dispv1);

sd.innerHTML;
ms.innerHTML+=  "=" 
ms.innerHTML+= result;

ms.innerHTML+= "<br>";
sd.innerHTML+= "<br>";



console.log(result);
dispop=" ";




}





function clearf()
{
    dispv=0;
    dispv1=0;
    count=1;
    ms.innerHTML = ' ';
    sd.innerHTML='  ';
   
   
}

