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
