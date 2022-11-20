'use strict';

let firstNum = '';
let secondNum = '';
let sign = '';

let finish = false;


const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['+', '-', 'X', '/'];

let outResult = document.querySelector('.calc-screen p');
console.log(outResult);

let ac = document.querySelector('.ac');
ac.addEventListener('click', function () {
    firstNum = '';
    secondNum = '';
    sign = '';
    finish = false;
    outResult.textContent = 0;
});


let buttons = document.querySelector('.buttons');
buttons.addEventListener('click', function (event) {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    // переменная для значений нажатых на определенную кнопку
    const key = event.target.textContent;

    outResult.textContent = '';

    if (digits.includes(key)) {

        if (secondNum == '' && sign == "") {
            firstNum += key;
            outResult.textContent = firstNum;
            console.log(firstNum, sign, secondNum);
        } else if (firstNum !== '' && secondNum !== '' && finish) {
            secondNum = key;
            finish = false;
            outResult.textContent = secondNum;

        }
        else {
            secondNum += key;
            outResult.textContent = secondNum;
            console.log(firstNum, sign, secondNum);
        }
        return;
    }

    if (action.includes(key)) {
        sign = key;
        outResult.textContent = key;
        console.log(firstNum, sign, secondNum);
    }




    if (key === "+/-") {
        if (secondNum == '' && sign == '') {
            firstNum = -firstNum;
            outResult.textContent = firstNum;
            console.log(firstNum, sign, secondNum);
        }
        else if (firstNum !== '' && sign !== '' && finish) {
            firstNum = -firstNum;
            outResult.textContent = firstNum;
            console.log(firstNum, sign, secondNum);
        }
        else {
            secondNum = -secondNum;
            outResult.textContent = secondNum;
        }

    }


    if (key === '=') {
        switch (sign) {
            case '+':
                firstNum = (+firstNum) + (+secondNum);
                break;
            case '-':
                firstNum = firstNum - secondNum;
                break;
            case 'X':
                firstNum = firstNum * secondNum;
                break;
            case '/':
                if (secondNum === '0') {
                    outResult.textContent = 'error';
                    firstNum = '';
                    secondNum = '';
                    sign = '';
                    return;
                }
                firstNum = firstNum / secondNum;
                break;
        }
        outResult.textContent = firstNum;
        console.log(firstNum, sign, secondNum);
        // важно!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        finish = true;
    }

})















/*

let a = ''; //первое число
let b = ''; //второе число
let sign = '';//знак мат операции
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0' ,'.'];
const action = ['/', 'X', '-', '+'];

//экран монитора

let out = document.querySelector('.calc-screen p');
//console.log(out);

*/
//функция не нужна 
/*
function clearAll(){
    let a =''; //первое число 
let b =''; //второе число
let sigh = '';//знак мат операции
let finish = false;
out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
*/

/*
let ac = document.querySelector('.ac');
ac.addEventListener('click', function () {
     a = ''; //первое число 
     b = ''; //второе число
     sign = '';//знак мат операции
     finish = false;
    out.textContent = 0;
});




let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function (event) {
    //нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    //нажата кнопка ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    //получаю нажатую кнопку 
    const key = event.target.textContent;

    //если нажата кнопка 0-9 или .
    if (digit.includes(key)){
        if(b == '' && sign == ''){
        a += key;
        console.log(a, sign, b);
        out.textContent = a;
        }
        else if(a!=='' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else{
            b+= key;
            out.textContent = b;
            console.log(a, sign, b);
        }
        return;
    } 
    
    //если нажата + или - или / или = 
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(a, sign, b);
    }


    //если нажата кнопка +/=
    if(key === '+/-'){
        if(b==''&& sign==""){
            a = -a;
            console.log(a, sign, b);
            out.textContent = a;
        }
        else if(a!=='' && sign!==''&& finish){
            a =-a;
            console.log(a, sign, b);
            out.textContent = a;
        }
    }




    //кнопка =
    
    if(key === '='){
        if(b=== '') b = a;
        switch(sign){
            case'+':
                a = (+a) + (+b);
                break;
            case'-':
                a = a - b;
                break;
            case'X':
                a = a * b;
                break;
            case'/':
            if (b === '0'){
                out.textContent ='Ошибка';
                a = '';
                b = '',
                sign = '';
                return;
            }
                a = a / b;
                break;
        }

    
        finish = true;
        out.textContent = a;
        console.log(a, sign, b);
    }
    

});



*/