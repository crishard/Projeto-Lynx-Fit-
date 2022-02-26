// capturando o token de autenticação
const pegaToken = localStorage.getItem('token');
const token = pegaToken.replace(/^"(.+(?="$))"$/, '$1');
const config = {
    headers: { Authorization: `Bearer ${token}` }
}

console.log(config);
//buscar treinos
function getEquipamentos() {
    axios.get("http://localhost:3000/cliente/buscar_equipamento",
    config)
      .then(response => {
        const data = response.data
        console.log(data);
        show(data);
      })
}
getEquipamentos();

function show(users){
    for (use of users){
        const newRow = document.createElement('tr')
        newRow.innerHTML = `
            <td>${use.nome_equipamento}</td>
            <td>
                    <button type="button" class="button green" id="${use.id_equipamento}">Editar</button>
                    <button type="button" class="button red" id="${use.id_equipamento}" >Excluir</button>
            </td>
            `
            console.log(users)
        document.getElementById('mostrar').appendChild(newRow);
}}

//criar equipamento
const equipamentoInput = document.getElementById("equipamento");
const cadastrar = document.getElementById("salvar");

cadastrar.addEventListener("click", ()=>{
  const nome_equipamento = equipamentoInput.value;
  console.log(nome_equipamento);
  axios.post("http://localhost:3000/cliente/criar_equipamento",{
        nome_equipamento: nome_equipamento,
    },
    config
    );    
});