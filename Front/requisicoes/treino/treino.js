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
const nome_equipamentoInput = document.getElementById("get-equipamentos");
const nome_usuarioInput = document.getElementById("get-usuarios");
const cadastrar = document.getElementById("salvar");
const nome_usuario = nome_usuarioInput.value;
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
        mostraOpcoes(data);
      })
}
getTreino();
//função pra imprimir a tabela
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
}}
//mostrar os usuarios na opition
function mostraOpcoes(users2){
  let usuario = "";
  for(use2 of users2){
      usuario += `<option value="${use2.id}">Dia: ${use2.dia}, Exercício: ${use2.treino}, Usuário: ${use2.nome_usuario}</option>`;
  }
  document.getElementById("excluirOp").innerHTML = usuario;
}
//apagar treino
const deletar = document.getElementById('comfirmar-excluir');
const treinoEscolhido = document.getElementById('excluirOp')

deletar.addEventListener('click', ()=>{
    const elemento = treinoEscolhido.value;
    axios.delete("http://localhost:3000/cliente/deletar_treino/"+`${elemento}`, 
    config)
    location.reload();
})
//imprimindo select de usuarios
function getUsuarios() {
  axios.get("http://localhost:3000/cliente/buscar_usuario",
  config)
  .then(response => {
      const data = response.data
      mostrarUsuarios(data);
    })
}
getUsuarios();

function mostrarUsuarios(users2){
  let usuario = "";
  for(use2 of users2){
      usuario += `<option value="${use2.nome}">${use2.nome}</option>`;
  }
  document.getElementById("get-usuarios").innerHTML = usuario;
}
//imprimindo select de equipamentos
function getEquipamentos() {
  axios.get("http://localhost:3000/cliente/buscar_equipamento",
  config)
  .then(response => {
      const data = response.data
      mostrarEquipamentos(data);
    })
}
getEquipamentos();

function mostrarEquipamentos(users3){
  let usuario = "";
  for(use3 of users3){
      usuario += `<option value="${use3.nome_equipamento}">${use3.nome_equipamento}</option>`;
  }
  document.getElementById("get-equipamentos").innerHTML = usuario;
}
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