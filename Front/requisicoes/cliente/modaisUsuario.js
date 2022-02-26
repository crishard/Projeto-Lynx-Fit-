const editar = document.getElementById("editar");
const excluir = document.getElementById("excluir");

editar.addEventListener('click', ()=>{
    document.getElementById("editar-modal").classList.add("editar-ativado")
    console.log("mamão")
})

excluir.addEventListener('click', ()=>{
    document.getElementById("excluir-modal").classList.add("excluir-ativado")
    console.log("mamão")
})


const closeEditar = document.getElementById("comfirmar-editar");
const closeExcluir = document.getElementById("comfirmar-excluir");

closeEditar.addEventListener('click', ()=>{
    document.getElementById("editar-modal").classList.remove("editar-ativado")
})
closeExcluir.addEventListener('click', ()=>{
    document.getElementById("excluir-modal").classList.remove("excluir-ativado")
})



