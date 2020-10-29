'use strict'
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let sym="!@#$%^&*''><~";
let inp = $("input");
let button = inp[5];
let str = '';
let rangeValue = $("span")[0];


$(inp[0]).change(function(){
    rangeValue.textContent = inp[0].value;
})

function passGen(str){
        if (inp[1].checked == true){
            str += lower;
        }
        if (inp[2].checked == true){
            str += upper;
        }
        if (inp[3].checked == true){
            str += sym;
        }
    if ((inp[1].checked == false) && (inp[2].checked == false) && (inp[3].checked == false)){
        alert ("Please select atleast one type of value.");
    }
	let string = str;
	let passLength = inp[0].value;
    let password = "";
    for (let i=0; i<passLength ;i++){
        password += string.charAt(Math.floor(Math.random()*string.length));
    }
      inp[4].value = password;
}
button.addEventListener('click', function(){
    passGen(str);
});
