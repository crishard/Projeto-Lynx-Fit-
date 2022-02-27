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
        const nomeElemento = data.nome;
        console.log(nomeElemento);
    })
    axios.get("http://localhost:3000/treino_usuario/", 
    config,
    {nome_usuaio: nomeElemento}
    )
    .then(response, ()=>{
        const data = response.data
        console.log("bola")
        // show(data);
        console.log(data);
    }
    )

}

getUsuario();

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

