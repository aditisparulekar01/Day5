function can(){
 let num1=document.querySelector("#n1").value;
 let oper=document.getElementById("opr").value;
 let num2=document.querySelector("#n2").value;
 let res;
 if(oper=='+'){
  res=parseFloat(num1)+parseFloat(num2);
  document.getElementById("opt").innerHTML = "Your ans is" + " " + res ;
 }
 else if(oper=='-'){
    res=parseFloat(num1)-parseFloat(num2);
  document.getElementById("opt").innerHTML = "Your ans is" + " " + res ;
 }
 
 else if(oper=='*'){
    res=parseFloat(num1)*parseFloat(num2);
  document.getElementById("opt").innerHTML = "Your ans is" + " " + res ;
 }
 else{
    res=parseFloat(num1)/parseFloat(num2);
  document.getElementById("opt").innerHTML = "Your ans is" + " " + res ;
 }
}
