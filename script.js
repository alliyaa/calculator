
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


