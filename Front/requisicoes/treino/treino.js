//capturando token
const pegaToken = localStorage.getItem('token');
const token = pegaToken.replace(/^"(.+(?="$))"$/, '$1');
const config = {
    headers: { Authorization: `Bearer ${token}` }
}

//capturando campos de input
const diaInput = document.getElementById("dia");
const treinoInput = document.getElementById("treino");
const seriesInput = document.getElementById("series");
const repeticoesInput = document.getElementById("repeticoes");
const nome_equipamentoInput = document.getElementById("nome_equipamento");
const nome_usuarioInput = document.getElementById("nome_usuario");


const cadastrar = document.getElementById("salvar");

// criar treino
cadastrar.addEventListener("click", ()=>{
  //capturando os valores
    const diaString =  diaInput.value;
    const treino = treinoInput.value;
    const seriesString = seriesInput.value;
    const repeticoesString = repeticoesInput.value;
    const nome_equipamento = nome_equipamentoInput.value;
    const nome_usuario = nome_usuarioInput.value;

    const dia = parseInt(diaString);
    const series = parseInt(seriesString);
    const repeticoes = parseInt(repeticoesString);

    console.log(typeof(dia, series, repeticoes))
  //realizando os cadastro
    axios.post("http://localhost:3000/cliente/criar_treino", {
        dia: dia,
        treino: treino, 
        series: series,
        repeticoes: repeticoes,
        nome_equipamento: nome_equipamento,
        nome_usuario: nome_usuario
    }, 
    config
    );    
});

//buscar treinos
function getTreino() {
    axios.get("http://localhost:3000/cliente/buscar_treino",
    config)
    .then(response => {
        const data = response.data
        show(data);
      })
}
getTreino();
  
function show(users){
    console.log("mamao")
    for (use of users){
        console.log(use)
        const newRow = document.createElement('tr')
        newRow.innerHTML = `
            <td>${use.dia}</td>
            <td>${use.treino}</td>
            <td>${use.series}</td>
            <td>${use.repeticoes}</td>
            <td>${use.nome_equipamento}</td>
            <td>${use.nome_usuario}</td>
            `
            document.getElementById('mostrar').appendChild(newRow);
}}


// //apagar treino
// const deletar = document.getElementById('deletar');
// deletar.addEventListener('click', ()=>{
//     console.log('deu certo');
//     axios.delete("http://localhost:3000/cliente/deletar_treino/:id")
//     .then(response => {
//         alert(JSON.stringify("Você apagou o equipamento!"))
//     })
//     .catch(error => console.error(error));
// })

// //atualizar treino
// const atualizar = document.getElementById("editar"); 
// atualizar.addEventListener('click', ()=> {
//     axios.put("http://localhost:3000/cliente/atualizar_treino", {
//         nome: nome, 
//         series: series,
//         repeticoes: repeticoes,
//         nome_equipamento: nome_equipamento,
//         nome_usuario: nome_usuario
//     })
//     .then(response => {
//     alert(JSON.stringify(response.data))
//     getUsers()
//     })
//     .catch(error => console.error(error));
// });

