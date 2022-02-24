//pegando os inputs
const nomeinput = document.getElementById("nome1");
const emailinput = document.getElementById("email1");
const cnpjinput = document.getElementById("cnpj1");
const senhainput = document.getElementById("senha1");
const submit = document.getElementById('btn-submit');

//realizando o cadastro
submit.addEventListener('click', ()=> {
  const nome = nomeinput.value;
  const email = emailinput.value;
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
