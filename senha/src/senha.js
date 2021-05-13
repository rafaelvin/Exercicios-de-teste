function verifica_tamanho(senha) {
    if(senha.length >= 8) {
        return true;
    } else { 
        return false;
    }
}

function procura_maiuscula(senha){
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVXZ"
    for (i = 0; i<senha.length;i++) {
        for(j=0;j<maiusculas.length;j++){
            if(senha[i] == maiusculas[j]){
                return true;
            }
        }
    }
    return false;
}

console.log(procura_maiuscula("senha"))


module.exports = {
    verifica_tamanho,
    procura_maiuscula
}