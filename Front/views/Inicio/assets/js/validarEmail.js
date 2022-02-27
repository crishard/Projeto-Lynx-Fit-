
function ValidateEmail(inputText){

    console.log("Validate")
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        alert("Endereço de email válido!");
        document.cadastrarCliente.email.focus();
        return true;
    }
    else{
        alert("Endereço de email inválido");
        document.cadastrarCliente.email.focus();
        return false;
    }
}

