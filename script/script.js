const subhalallahDisplay = document.getElementById('subhalallahDisplay');
const subhanallahIncrimentBtn = document.getElementById('subhanallahIncrimentBtn');
const subhanallahDicrimentBtn = document.getElementById('subhanallahDicrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillaIncrimentBtn = document.getElementById('alhamdulillaIncrimentBtn');
const alhamdulillaDicrimentBtn = document.getElementById('alhamdulillaDicrimentBtn');

const allahuakhberDisplay = document.getElementById('allahuakhberDisplay');
const allahuakhberIncrimentBtn = document.getElementById('allahuakhberIncrimentBtn');
const allahuakhberDicrimrntBtn = document.getElementById('allahuakhberDicrimrntBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuakhberInitialValue = 0;

subhanallahIncrimentBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 33){
        return alert ('Subhan Allah Compelete')
    }
    subhanAllahInitialValue += 1
    subhalallahDisplay.innerText = subhanAllahInitialValue;
})
subhanallahDicrimentBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert ('you cant added nagetive value')
    }
    subhanAllahInitialValue -= 1;
    subhalallahDisplay.innerText = subhanAllahInitialValue;

    
})

alhamdulillaIncrimentBtn.addEventListener('click', function(){
    if (alhamdulillahInitialValue === 33){
        return alert ('Alhamdulillah Compelete')
    }
    alhamdulillahInitialValue += 1
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})
alhamdulillaDicrimentBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 0){
        return alert ('you cant added nagetive value')
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
    
})


allahuakhberIncrimentBtn.addEventListener('click', function(){
    if(allahuakhberInitialValue === 33){
        return alert ('SubhanAllah Compelete')
    }
    allahuakhberInitialValue += 1;
    allahuakhberDisplay.innerText = allahuakhberInitialValue;
})
allahuakhberDicrimrntBtn.addEventListener('click', function(){
    if(allahuakhberInitialValue === 0){
        return alert ('you cant added nagetive value')
    }
    allahuakhberInitialValue -= 1;
    allahuakhberDisplay.innerText = allahuakhberInitialValue;
})

resetBtn.addEventListener('click', function(){
    subhalallahDisplay.innerText = '0'
    alhamdulillahDisplay.innerText = '0'
    allahuakhberDisplay.innerText = '0'
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuakhberInitialValue = 0;
    
})