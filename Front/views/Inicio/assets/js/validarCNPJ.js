function validarCNPJ(cnjp) {
    let numeros = cnjp.split("-")[0].replace(/[.|\/]/g, "");


    let digitos = cnjp.split("-")[1];
    

    if (validaPrimeiroDigito(numeros) != digitos[0]) {
        return false;
    }

    if (validaSegundoDigito(numeros+""+digitos[0]) != digitos[1]) {
        return false;
    }

    return true;
}

function validaPrimeiroDigito(numeros) {
    let pesos = 2;
    let resultado = 0;

    for (let cont = numeros.length - 1; cont >= 0; cont--){

        resultado += pesos * numeros[cont];
        
        pesos = (pesos >= 9 ? 2 : pesos + 1);
        
    }

    modulo = resultado % 11;
    

    resultado = (modulo < 2 ? 0 : 11 - modulo);
    

    return resultado;
}

function validaSegundoDigito(numeros) {
    let pesos = 2;
    let resultado = 0;

    for (let cont = numeros.length - 1; cont >= 0; cont--){

        resultado += pesos * numeros[cont];
        
        pesos = (pesos >= 9 ? 2 : pesos + 1);
        
    }

    modulo = resultado % 11;
    

    resultado = (modulo < 2 ? 0 : 11 - modulo);
    

    return resultado;
}

