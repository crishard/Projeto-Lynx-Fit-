// capturando o token de autenticação
const tokenLocal = localStorage.getItem('token');
const autentica = tokenLocal.replace(/^"(.+(?="$))"$/, '$1');
const permissao = {
    headers: { Authorization: `Bearer ${autentica}` }
}
// console.log(permissao);
function getMedidas() {
    axios.get("http://localhost:3000/usuario/ver_medidas",
    permissao)
      .then(response => {
        const data = response.data
        console.log(data);
        show5(data);
      })
}
getMedidas();

function show5(use5) {
  let torax = '';
  let busto = '';
  let cintura = '';
  let quadril = '';
  let peso = '';
  let altura = '';
  let p_gordura = '';
  
  for (use of use5){
    torax += `${use.torax}`
    busto+= `${use.busto}`
    cintura+= `${use.cintura}`
    quadril+= `${use.quadril}`
    peso+= `${use.peso}`
    altura+= `${use.altura}`
    p_gordura+= `${use.p_gordura}`
  }
  
  document.getElementById("torax").innerHTML = torax;
  document.getElementById("busto").innerHTML = busto;
  document.getElementById("cintura").innerHTML = cintura;
  document.getElementById("quadril").innerHTML = quadril;
  document.getElementById("peso").innerHTML = peso;
  document.getElementById("p_gordura").innerHTML = p_gordura;
  document.getElementById("altura").innerHTML = altura;
  document.getElementById("id_medida").innerHTML = id_medida;
}
//capturando campos de input
const toraxInput = document.getElementById("toraxInput");
const bustoInput = document.getElementById("bustoInput");
const cinturaInput = document.getElementById("cinturaInput");
const p_gorduraInput = document.getElementById("p_gorduraInput");
const quadrilInput = document.getElementById("quadrilInput");
const pesoInput = document.getElementById("pesoInput");
const alturaInput = document.getElementById("alturaInput");
const salvar = document.getElementById("salvar");

salvar.addEventListener("click", ()=>{
    //pegando os valores
    const toraxStr = toraxInput.value;
    const bustoStr = bustoInput.value;
    const cinturaStr = cinturaInput.value;
    const  p_gordura = p_gorduraInput.value;
    const quadrilStr = quadrilInput.value;
    const pesoStr = pesoInput.value;
    const alturaStr = alturaInput.value;

    const torax = parseFloat(toraxStr);
    const busto= parseFloat(bustoStr);
    const cintura = parseFloat(cinturaStr);
    const quadril = parseFloat(quadrilStr);
    const peso = parseFloat(pesoStr);
    const altura = parseFloat(alturaStr);

    const a = document.getElementById('p_gordura').textContent;
    const id_medida = document.getElementById('id_medida').textContent;
    if (a == ''){
    
    axios.post("http://localhost:3000/usuario/adicionar_medidas",
    {
      torax: torax, 
      busto: busto,
      cintura: cintura,
      quadril: quadril,
      peso: peso,
      p_gordura: p_gordura,
      altura: altura
    }, 
    permissao);
    location.reload();
  }
  else{
    axios.put("http://localhost:3000/usuario/atualizar_medidas/"+`${id_medida}`, 
    {
      torax: torax,
      busto: busto, 
      cintura: cintura,
      quadril: quadril,
      peso: peso,
      p_gordura: p_gordura,
      altura: altura
    }, permissao)
    location.reload();
  }
});