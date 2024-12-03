let num1;
let num2;
let name;
let pass;
document.querySelector("#button1").onclick=()=>{
    nums();
    alert(Number(num1)+Number(num2))
}
document.querySelector("#button2").onclick = ()=>{
    nums();
    alert(Number(num1)*Number(num2))
};
document.querySelector("#button3").onclick=()=>{
    nums();
    alert(Number(num1)**Number(num2))
}
function nums(){
    num1=document.querySelector("#text1").value
    num2=document.querySelector("#text2").value 
}
function name_pass(){
    name=document.querySelector("#text3").value||"אורח"
    pass=document.querySelector("#text4").value 
}
document.querySelector("#button4").onclick=()=>{
    name_pass();
    let a=name+" "+pass;
    alert(a)
}

