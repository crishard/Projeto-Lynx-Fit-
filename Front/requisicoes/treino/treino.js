const nomeInput = document.getElementById("treino");
const seriesInput = document.getElementById("series");
const repeticoesInput = document.getElementById("repeticoes");
const nome_equipamentoInput = document.getElementById("nome_equipamento");
const nome_usuarioInput = document.getElementById("nome_usuario");

const nome = nomeInput.value;
const series = seriesInput.value;
const repeticoes = repeticoesInput.value;
const nome_equipamento = nome_equipamentoInput.value;
const nome_usuario = nome_usuarioInput.value;

const criar = document.getElementById("cadastrar");

//criar treino
// cadastrar.addEventListener("click", ()=>{
//     axios.post("http://localhost:3000/cliente/criar_treino", {
//         nome: nome, 
//         series: series,
//         repeticoes: repeticoes,
//         nome_equipamento: nome_equipamento,
//         nome_usuario: nome_usuario
//     });    
// });

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

const lim = localStorage.getItem('token');
const bola = lim.replace(/^"(.+(?="$))"$/, '$1');


const config = {
    headers: { Authorization: `Bearer ${bola}` }
}
//buscar treinos
function getUsuarios() {
    axios.get("http://localhost:3000/cliente/buscar_treino",
    config)
      .then(response => {
        const data = response.data
        // renderApiResult.textContent = JSON.stringify(data);
        show(data);
      })
    //   .catch(error => console.log(error))
  }
getUsuarios();

function show(users){
    for (use of users){
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
}
}

