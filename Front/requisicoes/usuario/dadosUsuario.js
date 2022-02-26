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
        show(data);
      })
}

getUsuario();

function show(user) {
    let nome = '';
    let email = '';

    nome+= `${user.nome}`
    email+= `${user.email}`

    document.getElementById("nome").innerHTML = nome;
    document.getElementById("email").innerHTML = email;



}

