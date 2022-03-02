const logoff = document.getElementById("sair");

logoff.addEventListener('click', () => {
    localStorage.removeItem("token");
});