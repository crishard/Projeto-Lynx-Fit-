const nomeinput = document.getElementById("nome1");
const emailinput = document.getElementById("email1");

const cnpjinput = document.getElementById("cnpj1");
const senhainput = document.getElementById("senha1");
const submit = document.getElementById('btn-submit');


submit.addEventListener('click', ()=> {
    const nome = nomeinput.value;
    const email = emailinput.value;
    const cnpj = cnpjinput.value;
    const senha = senhainput.value;



    axios.put("http://localhost:3000/atualizar_cliente/3cf7fd5f-f066-4a2f-9251-3c4c1928e5d8", {
        nome: nome,
        email: email,
        cnpj: cnpj,
        senha: senha})
        .then(response => {
        alert(JSON.stringify(response.data))
        getUsers()
        })
        .catch(error => console.error(error));
});