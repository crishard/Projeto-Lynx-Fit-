const url = "http://localhost:3000/buscar_cliente"

function getUsers() {
  axios.get(url)
    .then(response => {
      const data = response.data
      renderApiResult.textContent = JSON.stringify(data);
      show(data);
    })
    .catch(error => console.log(error))
}

function getUser() {
  axios.get(`${url}/3cf7fd5f-f066-4a2f-9251-3c4c1928e5d8`)
    .then(response => {
      const data = response.data;
      userNome.textContent = data.nome
      userId.textContent = data.cnpj
      userCity.textContent = data.email
      senha.textContent = data.senha
    })
    .catch(error => console.log(error))
}
//mais de um usuário
getUsers();

//só da conta de quem tiver logado
getUser();

function show(users){
    let out = ''
    for (use of users){
            out += `<li>${use.nome}</li>`
            out += `<li>${use.email}</li>`
            out += `<li>${use.cnpj}</li>`
    }
    document.getElementById('teste').innerHTML = out;
}