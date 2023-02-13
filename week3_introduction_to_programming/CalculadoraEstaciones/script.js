let mesInput = document.getElementById('mes');
let calcularBottom = document.getElementById('calcular')
let resetBottom = document.getElementById('reiniciar')
let resultOutput = document.getElementById('resultado')

function calcularEstacion () {
    let mes = mesInput.value
   

    if(mes == 12 || mes == 1 || mes == 2 || mes == 'Diciembre'
    || mes == 'Enero' || mes == 'Febrero' || mes == 'diciembre' || mes == 'enero' || mes == 'febrero'){
    resultOutput.innerHTML = 'Es invierno'
    alert('Es invierno')
    alert('Luis David hernandez Garcia:11003143')
    } else if (mes == 3 || mes == 4 || mes == 5 || mes == 'Marzo'
    || mes == 'Abril' || mes == 'Mayo' || mes == 'marzo' || mes == 'abril' || mes == 'mayo'){
    resultOutput.innerHTML = 'Es Primavera'
    alert('Es Primavera')   
    alert('Luis David hernandez Garcia:11003143') 
    } else if (mes == 6 || mes == 7 || mes == 8 || mes == 'Junio'
    || mes == 'Julio' || mes == 'Agosto' || mes == 'junio' || mes == 'julio' || mes == 'agosto'){
    resultOutput.innerHTML = 'Es Verano'
    alert('Es verano') 
    alert('Luis David hernandez Garcia:11003143') 
    } else if (mes == 9 || mes == 10 || mes == 11 || mes == 'Septiembre'
    || mes == 'Octubre' || mes == 'Noviembre' || mes == 'noviembre' || mes == 'septiembre' || mes == 'octubre'){
    resultOutput.innerHTML = 'Es Oto;o'
    alert('Es oto;o') 
    alert('Luis David hernandez Garcia:11003143') 
    } else {
    resultOutput.innerHTML = 'Invalid'
    alert('Valor invalido "verifique que el numero sea del 1 al 12 o que el nombre ingresado sea un mes"') 
    alert('Luis David hernandez Garcia:11003143') 
    }
}

function resetEstacion() {
   mesInput.value = ''
   resultOutput.innerHTML = ''
}


calcularBottom.addEventListener('click', calcularEstacion)

resetBottom.addEventListener('click', resetEstacion)