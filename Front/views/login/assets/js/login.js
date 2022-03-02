const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const login = document.getElementById("login");

login.addEventListener("click", async function login(){
    const email = emailInput.value;
    const senha = senhaInput.value;
    const response = await axios.post("http://localhost:3000/login", {
        email: email,
        senha: senha
    });
    localStorage.setItem("token", JSON.stringify(response.data.token));
    const tipo = JSON.stringify(response.data.tipo);

    const cliente = document.querySelector(".cliente");
    const usuario = document.querySelector(".usuario");
    if(tipo == 1){
        cliente.classList.add("clienteLogado");       
    }
    if(tipo == 2){
        usuario.classList.add("usuarioLogado");
    }
});
