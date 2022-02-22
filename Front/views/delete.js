const deletar = document.getElementById('deletar');


deletar.addEventListener('click', ()=>{
    console.log('deu certo');
    axios.delete("http://localhost:3000/deletar_cliente/0236dc2d-74c6-4315-8ad9-b11a06327142")
    .then(response => {
        alert(JSON.stringify("Você apagou sua conta!"))
    })
    .catch(error => console.error(error));
})