//capturando token
const localToken = localStorage.getItem('token');
const autenticacao = localToken.replace(/^"(.+(?="$))"$/, '$1');
const configuracao = {
    headers: { Authorization: `Bearer ${autenticacao}` }
}
function nomePerfil(){
    axios.get("http://localhost:3000/usuario/dados",
    configuracao)
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