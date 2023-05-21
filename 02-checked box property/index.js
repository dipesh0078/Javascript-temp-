let visaBtn=document.getElementById("visaBtn");
let mastercardBtn=document.getElementById("mastercardBtn");
let paypalBtn=document.getElementById("paypalBtn");
document.getElementById("myButton").onclick=function(){
    
if(visaBtn.checked){
    console.log("payment is done through visa card");
}
else if(mastercardBtn.checked)
{
    console.log("Payment is done through masterCard");
}
else if(paypalBtn.checked){
    console.log("Payment is done thorugh paypal");
}
else{
    console.log("Please select any payment method");
}
}
  