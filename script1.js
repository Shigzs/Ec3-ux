function addDisplay(value) {
    let display = document.getElementById('display');

    if(display.value == 'Impossivel dividir por 0'){
        display.value = '';
        display.value += value;
    }
    else{
        document.getElementById('display').value += value;
    }
        
}