//pegando os inputs
const nomeinput = document.getElementById("nome");
const emailinput = document.getElementById("email");
const cnpjinput = document.getElementById("cnpj");
const senhainput = document.getElementById("senha");
const cadastrar = document.getElementById("cadastrar");

//realizando o cadastro
cadastrar.addEventListener('click', ()=> {
  const nome = nomeinput.value;
  const email = emailinput.value;
  const nome = nomeinput.value;
  const cnpj = cnpjinput.value;
  const senha = senhainput.value;

  // Validações
  
  // Email
  if (!validarEmail(cadastrarCliente.email)) {
    console.log("Erro no validar email");
    alert("Endereço de email inválido");
  }

  // Nome
  if(!validarNome()){
    console.log("Erro no validar nome");
    alert("Nome não informado.");
  }
  

  // CNPJ
  if (!validarCNPJ(cnpj)) {
    console.log("Erro no validar cnpj");
    alert("CNPJ inválido.");
  }
  
  // Senha
  if(!validarSenha()){
    console.log("Erro no validar senha");
    alert("Verifique os campos de senha.");
  }

  
  // Checkbox
  if (!validarCheckbox()){
    console.log("Erro no validar check box");
    alert("Você precisa concordar com os termos de uso.");
  }

  else{
    
    console.log(nome, email, cnpj, senha);
  axios.post("http://localhost:3000/criar_cliente", {
    nome: nome,
    email: email,
    cnpj: cnpj,
    senha: senha
  })
  .then((response) => {
    console.log(response);
  });
});


function validarNome(){

  const nome = nomeinput.value;

  if (nome == "") {
    
    return false;
  }
  else{
    return true;
  }
}

function validarCheckbox(){

  if (checkboxInput.checked) {
    
    return true;
  }
  else{
    return false;
  }
}
