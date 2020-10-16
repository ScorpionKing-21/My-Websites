'use strict'
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let sym="!@#$%^&*''><~`";
let x = document.querySelectorAll('input');
let button = x[5];
let str = '';
function passGen(str){
        if (x[1].checked == true){
            str += lower;
        }
        if (x[2].checked == true){
            str += upper;
        }
        if (x[3].checked == true){
            str += sym;
        }
    if ((x[1].checked == false) && (x[2].checked == false) && (x[3].checked == false)){
        alert ("Please select atleast one type of value.");
    }
	let string = str;
	let passLength = x[0].value;
    let password = "";
    for (let i=0; i<passLength ;i++){
        password += string.charAt(Math.floor(Math.random()*string.length));
    }
      x[4].value = password;
}
button.addEventListener('click', function(){
    passGen(str);
});