const excluir = document.getElementById("excluir-equipamento");

excluir.addEventListener('click', ()=>{
    document.getElementById("excluir-modal").classList.add("excluir-ativado")
    console.log("mamão")
})
const closeExcluir = document.getElementById("comfirmar-excluir");
closeExcluir.addEventListener('click', ()=>{
    document.getElementById("excluir-modal").classList.remove("excluir-ativado")
})