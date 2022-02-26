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
        mostrarUsuarios(data);
      })
  }
getUsuarios();

function show(users){
    for (use of users){
        const newRow = document.createElement('tr')
            newRow.innerHTML = `
                <td>${use.nome}</td>
                <td>${use.email}</td>
                `
                document.getElementById('mostrar').appendChild(newRow);
    }
}

function mostrarUsuarios(users2){
    console.log("balde");
    let usuario = "";

    for(use2 of users2){
        usuario += `<option value="${use2.id}">${use2.nome}</option>`;
    }
    document.getElementById("editarOp").innerHTML = usuario;
    document.getElementById("excluirOp").innerHTML = usuario;
}

//apagar usuario
const deletar = document.getElementById('comfirmar-excluir');
const usuarioEscolhido = document.getElementById('excluirOp')

deletar.addEventListener('click', ()=>{
    const elemento = usuarioEscolhido.value;
    console.log(elemento);
    
    axios.delete("http://localhost:3000/cliente/deletar_usuario/"+`${elemento}`)
    .then(response => {
        alert(JSON.stringify("Usuário apagado, recarregue a página"))
    })
    .catch(error => console.error(error));

})

//atualizar usuario
const atualizar = document.getElementById("comfirmar-editar");
const usuarioatualiza = document.getElementById("editarOp");

const novoNomeInput = document.getElementById("novo-nome");
const novoEmailInput = document.getElementById("novo-email");
const novaSenhaInput = document.getElementById("nova-senha");

atualizar.addEventListener('click', ()=> {

    const elemento = usuarioatualiza.value;
    const novoNome = novoNomeInput.value;
    const novoEmail = novoEmailInput.value;
    const novaSenha = novaSenhaInput.value;

    axios.put("http://localhost:3000/cliente/atualizar_usuario",{
        id: elemento,
        nome: novoNome, 
        senha: novaSenha,
        email: novoEmail
    })
    .then(response => {
    alert(JSON.stringify("Usuário atualizado, recarregue a página"))
    })
    .catch(error => console.error(error));
});


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