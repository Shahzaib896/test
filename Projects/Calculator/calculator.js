function numPad(x){

    let y= document.getElementById('numInput').innerText; 
    document.getElementById('numInput').innerText=y+x; 
    
}
function op(x){
    
    document.getElementById('opInput').innerText = x;
    let num = document.getElementById('numInput').innerText;
    document.getElementById('holder').innerText = num;
    document.getElementById('numInput').innerText = "";

}
function eqBtn(){

    let x=document.getElementById('numInput').innerText;
    let y=document.getElementById('holder').innerText;
    let op=document.getElementById('opInput').innerText;
    
    let z=0;

    if(op=='+'){
        z= parseInt(x) + parseInt(y);
    }
    else if(op=='-'){
        z= parseInt(y) - parseInt(x);
    }
    else if(op=='x'){
        z= parseInt(x) * parseInt(y);
    }
    else if(op=='/'){
        z= parseInt(y) / parseInt(x);
    }

    document.getElementById('numInput').innerText=z;

}
function clearAll(){

    document.getElementById('numInput').innerText="";
    document.getElementById('opInput').innerText="";
    document.getElementById('holder').innerText="";

}
function oneDividedby(){

    let y= document.getElementById('numInput').innerText;
    document.getElementById('numInput').innerText=1/y;

}
function sqr(){

    let z= document.getElementById('numInput').innerText;
    document.getElementById('numInput').innerText=z*z;

}
function squareRoot(){

    let s= document.getElementById('numInput').innerText;
    document.getElementById('numInput').innerText=Math.sqrt(s);

}
function minus(){

    let p= document.getElementById('numInput').innerText;

    if(p>0){
       document.getElementById('numInput').innerText=-p; 
    }

}
