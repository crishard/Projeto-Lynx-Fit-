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

    console.log(response.data);
    localStorage.setItem("token", JSON.stringify(response.data.token));
    const tipo = JSON.stringify(response.data.tipo);
    console.log(tipo);

    if(tipo == 1){
        
    }
    if(tipo == 2){

    }
});