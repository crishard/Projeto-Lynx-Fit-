// const openModal = () => document.getElementById('modal')
//     .classList.add('active')

// const closeModal = () => document.getElementById('modal')
//     .classList.remove('active')

// document.getElementById('cadastrarCliente')
//     .addEventListener('click', openModal)

// document.getElementById('editar')
//     .addEventListener('click', openModal)

// document.getElementById('modalClose')
//     .addEventListener('click', closeModal)



const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const salvar = document.getElementById("salvar");
console.log("baiano");
//criar usuario
const lim = localStorage.getItem('token');
const bola = lim.replace(/^"(.+(?="$))"$/, '$1');


const config = {
    headers: { Authorization: `Bearer ${bola}` }
}
console.log(config);
salvar.addEventListener("click", ()=>{
    const nome = nomeInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
    


    console.log(nome, email, senha)
    axios.post("http://localhost:3000/cliente/criar_usuario",
    {
        nome: nome, 
        senha: senha,
        email: email
    }, 
    config);




    
    
    
});


//buscar usuarios
function getUsuarios() {
    axios.get("http://localhost:3000/cliente/buscar_usuario",
    config)
      .then(response => {
        const data = response.data;
        // main.textContent = JSON.stringify(data);
        // console.log(data.nome);
        // for (let index = 0; index < data.length; index++) {
            //     const element = data[index];    
            //     console.log(element.nome);
            // }
            
            show(data);
      })
    //   .catch(error => console.log(error))
  }
getUsuarios();


function show(users){
    for (use of users){
        const newRow = document.createElement('tr')
            newRow.innerHTML = `
                <td>${use.nome}</td>
                <td>${use.email}</td>
                <td>
                    <button type="button" class="button green" id="${use.id}">Editar</button>
                    <button type="button" class="button red" id="${use.id}" >Excluir</button>
                </td>
                `
                document.getElementById('mostrar').appendChild(newRow);
    }
}


// const createRow = () => {
//     const newRow = document.createElement('tr')
//     newRow.innerHTML = `
//         <td>${use.nome}</td>
//         <td>${use.email}</td>
//         <td>
//             <button type="button" class="button green" id="${response.data.id}">Editar</button>
//             <button type="button" class="button red" id="delete-" >Excluir</button>
//         </td>
//     `
//     tabelaGet.appendChild(newRow)
// }
// createRow();




// //apagar usuario
// const deletar = document.getElementById('deletar');
// deletar.addEventListener('click', ()=>{
//     console.log('deu certo');
//     axios.delete("http://localhost:3000/cliente/deletar_usuario/:id")
//     .then(response => {
//         alert(JSON.stringify("Você apagou o equipamento!"))
//     })
//     .catch(error => console.error(error));
// })

// //atualizar usuario
// const atualizar = document.getElementById("editar"); 
// atualizar.addEventListener('click', ()=> {
//     axios.put("http://localhost:3000/cliente/atualizar_usuario", {
//         nome: nome, 
//         senha: senha,
//         email: email
//     })
//     .then(response => {
//     alert(JSON.stringify(response.data))
//     getUsers()
//     })
//     .catch(error => console.error(error));
// });


//