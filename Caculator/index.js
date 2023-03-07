//Number can add on the input
function addNum(s) {
    var input = document.getElementById('input');
    input.value = input.value + s;
}

function frontStr(){
    var input = document.getElementById('input');
    var str = "-" + input.value;
    input.value = str;
}
//Caculating

function calc() {
    var input = document.getElementById('input');
    val = eval(input.value);
    input.value = val;

}

function cl(){
    var input = document.getElementById('input');
    input.value = "";
}



function hundredPercent() {
    var input = document.getElementById('input');
    var str = input.value * 0.01;
    input.value = str;

}