
function validarSenha(){
    var senha = cadastrarCliente.senha;
    var confirme = cadastrarCliente.confirmarSenha;

    if (senha.value == "") {
        alert("A senha não foi inserida.");
        senha.focus();
        return false;
    }

    else if (confirme.value == "") {
        alert("O campo de confirmação de senha está vazio.");
        confirme.focus();
        return false;
    }

    else if (confirme.value == senha.value) {
        confirme.focus();
        senha.focus();
        return true;
    }

    else{
        alert("As senhas inseridas não são iguais.");
        return false;
    }
}

