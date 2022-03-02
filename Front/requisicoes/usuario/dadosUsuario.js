// capturando o token de autenticação
const pegaToken = localStorage.getItem('token');
const token = pegaToken.replace(/^"(.+(?="$))"$/, '$1');
const config = {
    headers: { Authorization: `Bearer ${token}` }
}

function getUsuario() {
    axios.get("http://localhost:3000/usuario/dados",
    config)
      .then(response => {
        const data = response.data
        console.log(data);
        show2(data);
      })
}

getUsuario();

function show2(user2) {
    let nome = '';
    let email = '';

    nome+= `${user2.nome}`
    email+= `${user2.email}`

    document.getElementById("nome").innerHTML = nome;
    document.getElementById("email").innerHTML = email;
}
