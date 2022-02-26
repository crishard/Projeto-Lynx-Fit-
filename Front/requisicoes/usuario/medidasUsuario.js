// capturando o token de autenticação
const pegaToken = localStorage.getItem('token');
const token = pegaToken.replace(/^"(.+(?="$))"$/, '$1');
const config = {
    headers: { Authorization: `Bearer ${token}` }
}

function getMedidas() {
    axios.get("http://localhost:3000/usuario/ver_medidas",
    config)
      .then(response => {
        const data = response.data
        console.log(data);
        show(data);
      })
}

getMedidas();

function show(user) {
    let torax = '';
    let busto = '';
    let cintura = '';
    let quadril = '';
    let peso = '';
    let altura = '';
    let p_gordura = '';

    torax+= `${user.torax}`
    busto+= `${user.busto}`
    cintura+= `${user.cintura}`
    quadril+= `${user.quadril}`
    peso+= `${user.peso}`
    altura+= `${user.altura}`
    p_gordura+= `${user.p_gordura}`

    document.getElementById("torax").innerHTML = torax;
    document.getElementById("busto").innerHTML = busto;
    document.getElementById("cintura").innerHTML = cintura;
    document.getElementById("quadril").innerHTML = quadril;
    document.getElementById("peso").innerHTML = peso;
    document.getElementById("p_gordura").innerHTML = p_gordura;
    document.getElementById("altura").innerHTML = altura;

}

