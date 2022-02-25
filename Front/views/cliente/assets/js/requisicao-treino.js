const nomeInput = document.getElementById("equip");
const seriesInput = document.getElementById("salvar");
const repeticoesInput = document.getElementById("equip");
const nome_equipamentoInput = document.getElementById("equip");
const nome_usuarioInput = document.getElementById("equip");

const nome = nomeInput.value;
const series = seriesInput.value;
const repeticoes = repeticoesInput.value;
const nome_equipamento = nome_equipamentoInput.value;
const nome_usuario = nome_usuarioInput.value;

const criar = document.getElementById("cadastrar");

//criar treino
cadastrar.addEventListener("click", ()=>{
    axios.post("http://localhost:3000/cliente/criar_treino", {
        nome: nome, 
        series: series,
        repeticoes: repeticoes,
        nome_equipamento: nome_equipamento,
        nome_usuario: nome_usuario
    });    
});

//apagar treino
const deletar = document.getElementById('deletar');
deletar.addEventListener('click', ()=>{
    console.log('deu certo');
    axios.delete("http://localhost:3000/cliente/deletar_treino/:id")
    .then(response => {
        alert(JSON.stringify("Você apagou o equipamento!"))
    })
    .catch(error => console.error(error));
})

//atualizar treino
const atualizar = document.getElementById("editar"); 
atualizar.addEventListener('click', ()=> {
    axios.put("http://localhost:3000/cliente/atualizar_treino", {
        nome: nome, 
        series: series,
        repeticoes: repeticoes,
        nome_equipamento: nome_equipamento,
        nome_usuario: nome_usuario
    })
    .then(response => {
    alert(JSON.stringify(response.data))
    getUsers()
    })
    .catch(error => console.error(error));
});


//buscar treinos
function getUsuarios() {
    axios.get("http://localhost:3000/cliente/criar_treino")
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

