// capturando o token de autenticação
const pegaToken = localStorage.getItem('token');
const token = pegaToken.replace(/^"(.+(?="$))"$/, '$1');
const config = {
    headers: { Authorization: `Bearer ${token}` }
}
//buscar treinos
function getEquipamentos() {
    axios.get("http://localhost:3000/cliente/buscar_equipamento",
    config)
      .then(response => {
        const data = response.data
        show(data);
        mostrarEquipamentos(data);
      })
}
getEquipamentos();

function show(users){
    for (use of users){
        const newRow = document.createElement('tr')
        newRow.innerHTML = `
            <td>${use.nome_equipamento}</td>
            `
            console.log(users)
        document.getElementById('mostrar').appendChild(newRow);
}}
//criar equipamento
const equipamentoInput = document.getElementById("equipamento");
const cadastrar = document.getElementById("salvar");
cadastrar.addEventListener("click", ()=>{
  const nome_equipamento = equipamentoInput.value;
  axios.post("http://localhost:3000/cliente/criar_equipamento",{
        nome_equipamento: nome_equipamento,
    },
    config
    );    
});
//apagar equipamento
const deletar = document.getElementById('comfirmar-excluir');
const treinoEscolhido = document.getElementById('excluirOp')

deletar.addEventListener('click', ()=>{
    const elemento = treinoEscolhido.value;
    axios.delete("http://localhost:3000/cliente/deletar_equipamento/"+`${elemento}`, 
    config)
    .then(response => {
      location.reload()
    })
})
//opitions do equipamentos para apagar
function mostrarEquipamentos(users2){
  let equipamentos = "";
  for(use2 of users2){
    equipamentos += `<option value="${use2.id_equipamento}">${use2.nome_equipamento}</option>`;
  }
  document.getElementById("excluirOp").innerHTML = equipamentos;
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