// const equipamentoInput = document.getElementById("equip");
// const salvar = document.getElementById("salvar");


// const equipamento = equipamentoInput.value;

// //criar o equipamento
// salvar.addEventListener("click", ()=>{
//     axios.post("http://localhost:3000/cliente/criar_equipamento", {
//         nome_equipamento: equipamento
//     });
    
// });

// //apagar equipamento
// const deletar = document.getElementById('deletar');
// deletar.addEventListener('click', ()=>{
//     console.log('deu certo');
//     axios.delete("http://localhost:3000/cliente/deletar_equipamento/:id_equipamento")
//     .then(response => {
//         alert(JSON.stringify("Você apagou o equipamento!"))
//     })
//     .catch(error => console.error(error));
// })

// //atualizar equipamento
// submit.addEventListener('click', ()=> {
//     axios.put("http://localhost:3000/cliente/atualizar_equipamento:id_equipamento", {
//         nome_equipamento: equipamento
//     })
//     .then(response => {
//     alert(JSON.stringify(response.data))
//     getUsers()
//     })
//     .catch(error => console.error(error));
// });


// //buscar equipamento
// function getEquipamentos() {
//     axios.get("http://localhost:3000/cliente/buscar_equipamento")
//       .then(response => {
//         const data = response.data
//         renderApiResult.textContent = JSON.stringify(data);
//         show(data);
//       })
//       .catch(error => console.log(error))
// }
// getUsers();

// function show(){
//     let out = ''
//     for (use of users){
//             out += `<li>${use.nome}</li>`
//             out += `<li>${use.email}</li>`
//             out += `<li>${use.cnpj}</li>`
//     }
//     document.getElementById('teste').innerHTML = out; 
// }

const lim = localStorage.getItem('token');
const bola = lim.replace(/^"(.+(?="$))"$/, '$1');


const config = {
    headers: { Authorization: `Bearer ${bola}` }
}
console.log(config)

async function getCOntet(){
    const response = await axios.get( 'http://localhost:3000/cliente/buscar_equipamento',
    config
    )
    console.log(response.data);
}
getCOntet();