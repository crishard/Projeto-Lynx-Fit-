const emailInput = document.getElementById("equip");
const senhaInput = document.getElementById("salvar");
const cnpjInput = document.getElementById("salvar");
const nomeInput = document.getElementById("salvar");
const salvar = document.getElementById("salvar");
// 
const email = emailInput.value;
const senha = senhaInput.value;
const cnpj = cnpjInput.value;
const nome = nomeInput.value;

//atualizaar cliente
salvar.addEventListener("click", ()=>{
    axios.post("http://localhost:3000/atualizar_cliente/:id", {
        nome: nome, 
        cnpj: cnpj,
        senha: senha,
        email: email
    })
    .then(response => {
        alert(JSON.stringify(response.data))
        getUsers()
        })
        .catch(error => console.error(error));
    
});
//apagar conta do cliente
const deletar = document.getElementById('deletar');
deletar.addEventListener('click', ()=>{
    console.log('deu certo');
    axios.delete("http://localhost:3000/deletar_cliente/:id")
    .then(response => {
        alert(JSON.stringify("Você apagou o equipamento!"))
    })
    .catch(error => console.error(error));
})

//buscar cliente
function getDadosCliente() {
    axios.get("http://localhost:3000/buscar_cliente/:id")
      .then(response => {
        const data = response.data;
        userNome.textContent = data.nome
        userId.textContent = data.cnpj
        userCity.textContent = data.email
        senha.textContent = data.senha
      })
      .catch(error => console.log(error))
}
getDadosCliente();