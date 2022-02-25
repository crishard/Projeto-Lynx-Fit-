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


    
    const jubileu = document.querySelector(".cliente");
    const vnne = document.querySelector(".usuario");
    if(tipo == 1){
        jubileu.classList.add("clienteLogado");       
    }
    if(tipo == 2){
        vnne.classList.add("usuarioLogado");
    }
});
// export default function salvaTOken(){

//     const token = {
//         headers: {Authorization: `Bearer ${response.data.token}`}  
//     }
//     return token;
// };

