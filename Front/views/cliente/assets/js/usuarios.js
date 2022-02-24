const nomeInput = document.getElementById("equip");
const emailInput = document.getElementById("salvar");
const senhaInput = document.getElementById("equip");

const cadastrar = document.getElementById("cadastrar");


//criar usuario
cadastrar.addEventListener("click", ()=>{
    axios.post("http://localhost:3000/cliente/criar_usuario", {
        nome: nome, 
        senha: senha,
        email: email
    });    
});

//apagar usuario
const deletar = document.getElementById('deletar');
deletar.addEventListener('click', ()=>{
    console.log('deu certo');
    axios.delete("http://localhost:3000/cliente/deletar_usuario/:id")
    .then(response => {
        alert(JSON.stringify("Você apagou o equipamento!"))
    })
    .catch(error => console.error(error));
})

//atualizar usuario
const atualizar = document.getElementById("editar"); 
atualizar.addEventListener('click', ()=> {
    axios.put("http://localhost:3000/cliente/atualizar_usuario", {
        nome: nome, 
        senha: senha,
        email: email
    })
    .then(response => {
    alert(JSON.stringify(response.data))
    getUsers()
    })
    .catch(error => console.error(error));
});


//buscar usuarios
function getUsuarios() {
    axios.get("http://localhost:3000/cliente/buscar_usuario")
      .then(response => {
        const data = response.data
        renderApiResult.textContent = JSON.stringify(data);
        show(data);
      })
      .catch(error => console.log(error))
  }
getUsuarios();

function show(users){
    let out = ''
    for (use of users){
            out += `<li>${use.nome}</li>`
            out += `<li>${use.email}</li>`
            out += `<li>${use.cnpj}</li>`
    }
    document.getElementById('teste').innerHTML = out; 
}