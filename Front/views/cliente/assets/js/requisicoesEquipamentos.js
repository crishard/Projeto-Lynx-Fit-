const buscaTokenLS = localStorage.getItem('token');
const replaceToken = buscaTokenLS.replace(/^"(.+(?="$))"$/, '$1');
const tokenPermissao = {
    headers: { Authorization: `Bearer ${replaceToken}` }
}
async function getCOntet(){
    const response = await axios.get( 'http://localhost:3000/cliente/buscar_equipamento',
    tokenPermissao
    )
}
getCOntet();