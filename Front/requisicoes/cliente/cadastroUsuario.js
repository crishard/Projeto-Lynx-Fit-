//capturando token
const buscaToken = localStorage.getItem('token');
const tokenn = buscaToken.replace(/^"(.+(?="$))"$/, '$1');
const configu = {
    headers: { Authorization: `Bearer ${tokenn}` }
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
    // location.reload();
    configu)
    .catch(function(error){
        alert(JSON.stringify("Email ou Usuário já existente"))
    })
    
});


//buscar usuarios
function getUsuarios() {
    axios.get("http://localhost:3000/cliente/buscar_usuario",
    configu)
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
    
    axios.delete("http://localhost:3000/cliente/deletar_usuario/"+`${elemento}`, configu)
    .then(response => {
        alert(JSON.stringify("Usuário apagado, recarregue a página"))
    })
    // .catch(error => console.error(error));
    location.reload();

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
    }, configu)
    .catch(error => console.error(error));
    location.reload();
});


//pegando as informações do cliente
function nomePerfil(){
    axios.get("http://localhost:3000/buscar_cliente",
    configu)
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