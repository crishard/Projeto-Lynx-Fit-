// capturando o token de autenticação
const pegaToken = localStorage.getItem('token');
const token = pegaToken.replace(/^"(.+(?="$))"$/, '$1');
const config = {
    headers: { Authorization: `Bearer ${token}` }
}
function getCliente() {
    axios.get("http://localhost:3000/buscar_cliente",
    config)
      .then(response => {
        const data = response.data
        console.log(data);
        show(data);
      })
}

getCliente();

function show(user) {
    let cnpj = '';
    let nome = '';
    let email = '';

    cnpj+= `${user.cnpj}`
    nome+= `${user.nome}`
    email+= `${user.email}`

    document.getElementById("cnpj").innerHTML = cnpj;
    document.getElementById("nome").innerHTML = nome;
    document.getElementById("email").innerHTML = email;
}

//pegando as informações do cliente
function nomePerfil(){
  axios.get("http://localhost:3000/buscar_cliente",
  config)
    .then(response => {
      const data = response.data
      mostraNome(data);
    })
}
nomePerfil()

//mostrando o nome na tela
function mostraNome(user) {
  let nome = '';

  nome+= `${user.nome}`

  document.getElementById("nome-perfil").innerHTML = nome;
}