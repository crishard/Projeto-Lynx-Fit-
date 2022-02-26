//capturando token
const pegaToken = localStorage.getItem('token');
const token = pegaToken.replace(/^"(.+(?="$))"$/, '$1');
const config = {
    headers: { Authorization: `Bearer ${token}` }
}

//capturando campos de input
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const salvar = document.getElementById("salvar");


salvar.addEventListener("click", ()=>{
    //pegando os valores
    const nome = nomeInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
    //realizando o cadastro
    axios.post("http://localhost:3000/cliente/criar_usuario",
    {
        nome: nome, 
        senha: senha,
        email: email
    }, 
    config);
});


//buscar usuarios
function getUsuarios() {
    axios.get("http://localhost:3000/cliente/buscar_usuario",
    config)
      .then(response => {
        const data = response.data;
        show(data);
      })
  }
getUsuarios();

function show(users){
    for (use of users){
        const newRow = document.createElement('tr')
            newRow.innerHTML = `
                <td>${use.nome}</td>
                <td>${use.email}</td>
                <td>
                    <button type="button" class="button green" id="${use.id}">Editar</button>
                    <button type="button" class="button red" id="${use.id}" >Excluir</button>
                </td>
                `
                document.getElementById('mostrar').appendChild(newRow);
    }
}

// //apagar usuario
// const deletar = document.getElementById('deletar');
// deletar.addEventListener('click', ()=>{
//     console.log('deu certo');
//     axios.delete("http://localhost:3000/cliente/deletar_usuario/:id")
//     .then(response => {
//         alert(JSON.stringify("Você apagou o equipamento!"))
//     })
//     .catch(error => console.error(error));
// })

// //atualizar usuario
// const atualizar = document.getElementById("editar"); 
// atualizar.addEventListener('click', ()=> {
//     axios.put("http://localhost:3000/cliente/atualizar_usuario", {
//         nome: nome, 
//         senha: senha,
//         email: email
//     })
//     .then(response => {
//     alert(JSON.stringify(response.data))
//     getUsers()
//     })
//     .catch(error => console.error(error));
// });