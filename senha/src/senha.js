function verifica_tamanho(senha) {
    if(senha.length >= 8) {
        return true;
    } else { 
        return false;
    }
}


module.exports = {
    verifica_tamanho
}