// capturando o token de autenticação
const pegaToken = localStorage.getItem('token');
const token = pegaToken.replace(/^"(.+(?="$))"$/, '$1');

const config = {
    headers: { Authorization: `Bearer ${token}` }
}

function getRotina() {
    axios.get("http://localhost:3000/treino_usuario/",
    config)
      .then(response => {
        const data = response.data
        console.log(data);
        show(data);
      })
}

getRotina();

function show(users) {
    for (use of users){
        const newRow = document.createElement('tr')
            newRow.innerHTML = `
                <td>${use.treino}</td>
                <td>${use.series}</td>
                <td>${use.repeticoes}</td>
                <td>${use.nome_equipamento}</td>
                `
                document.getElementById('mostrar').appendChild(newRow);
    }

}

