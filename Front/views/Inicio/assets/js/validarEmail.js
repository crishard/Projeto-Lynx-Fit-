
function validarEmail(inputTexto){

    var emailFormato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputTexto.value.match(emailFormato)){
        
        cadastrarCliente.email.focus();
        return true;
    }
    else{
        
        cadastrarCliente.email.focus();
        return false;
    }
}
