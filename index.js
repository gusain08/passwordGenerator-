const empty = "", 
uCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
lCase="abcdefghijklmnopqrstuvwxyz",
number="0123456789",
symbol="!@#$%^&*=-_";

const plength = document.getElementById("p-length"),
pUppercase = document.getElementById("p-uppercase"),
plowercase = document.getElementById("p-lowercase"),
pnumber = document.getElementById("p-number"),
psymbols = document.getElementById("p-symbols"),
submit = document.getElementById("generatePass"),
password =  document.getElementById("password"),
copy =  document.getElementById("copy");


submit.addEventListener('click',function(){
let initialPassword = empty;
pUppercase.checked ? (initialPassword += uCase) : "";
plowercase.checked ? (initialPassword += lCase) : "";
pnumber.checked ? (initialPassword += number) : "";
psymbols.checked ? (initialPassword += symbol) : "";
password.value = gereratePassword(plength.value, initialPassword);
});


function gereratePassword(plength , initialPassword){
    let pass = "";
    for(let i=0; i<plength; i++){
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));

      
    }
  return pass;
}


copy.addEventListener('click',function(){
    if(password.value == ''){
        alert("PassWord field Empty");
    }else{
        password.select();
    document.execCommand('copy');
    alert("PassWord Has Been Copied");
    }
    
})

