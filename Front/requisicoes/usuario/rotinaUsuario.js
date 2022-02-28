// capturando o token de autenticação
const pegaToken = localStorage.getItem('token');
const token = pegaToken.replace(/^"(.+(?="$))"$/, '$1');

const config = {
    headers: { Authorization: `Bearer ${token}` }
}
console.log(config);

function getUsuario() {
    axios.get("http://localhost:3000/usuario/dados",
    config)
      .then(response => {
        const data = response.data
        mostrarUsuarios(data)
    })

}
getUsuario();



function mostrarUsuarios(users2){
    let usuario = "";
    usuario += `<option value="${users2.nome}" id="nomeUser">Mostrar Rotina</option> 
    <option value="esconder" id="esconder">Esconder Rotina</option>`
    document.getElementById("usuarioOp").innerHTML = usuario;
}



const vizualizar = document.getElementById('comfirmar');
const usuarioEscolhido = document.getElementById('usuarioOp')

vizualizar.addEventListener('click', ()=>{
    const elemento = usuarioEscolhido.value;
    const nome_usuario = elemento
    
    if(elemento != "esconder"){
        console.log(nome_usuario);
         
        axios.get("http://localhost:3000/treino_usuario/"+`${nome_usuario}`)
        .then(response => {
            const data = response.data;
            console.log(data);
            // alert(JSON.stringify("Usuário apagado, recarregue a página"))
        })
        .catch(error => console.error(error));
    }

    if(elemento == "esconder"){
        document.getElementById("mostrar").classList.add("tabela-desativada")
    }

})







// function opitionEscondida(nome){
//     let usuario = "";
//         usuario += `<a value="${nome.nome}" id="salvou"></a>`;
//     document.getElementById("some").innerHTML = usuario;
//     // console.log(usuario)
// }



// const vizualizar = document.getElementById("salvou");
// const bip = vizualizar.value;
// // const nomeMatheux = document.getElementById("salvou");
// // const nome = nomeMatheux.value;
// console.log(bip);



// function show(users) {
//     for (use of users){
//         const newRow = document.createElement('tr')
//             newRow.innerHTML = `
//                 <td>${use.treino}</td>
//                 <td>${use.series}</td>
//                 <td>${use.repeticoes}</td>
//                 <td>${use.nome_equipamento}</td>
//                 `
//                 document.getElementById('mostrar').appendChild(newRow);
//     }

// }

