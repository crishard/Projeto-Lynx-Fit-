// Configuração de Menu
const btnMobile = document.getElementById('btn-mobile');
function botaoMenu(event){
    if(event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', botaoMenu);
btnMobile.addEventListener('touchstart', botaoMenu);
//função para coletar o valor clicado e mostrá-lo na tela
function insert(num){ 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
//função para limpar a calculadora
function clean(){
    document.getElementById('resultado').innerHTML = " ";
}
//função para apagar último dígito
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
//função que vai calcular todos os valores
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;   
    //verifica se existe algum valor escolhido e realiza o cálculo
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}