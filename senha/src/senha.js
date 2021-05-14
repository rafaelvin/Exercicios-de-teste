function verifica_tamanho(senha) {
    if(senha.length >= 8) {
        return true;
    } else { 
        return false;
    }
}

function procura_maiuscula(senha){
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVXZ";
    for (i = 0; i<senha.length;i++) {
        for(j=0;j<maiusculas.length;j++){
            if(senha[i] == maiusculas[j]){
                return true;
            }
        }
    }
    return false;
}

function procura_minuscula(senha){
    const minusculas = "abcdefghijklmnopqrstuvxz";
    for (i = 0; i<senha.length;i++) {
        for(j=0;j<minusculas.length;j++){
            if(senha[i] == minusculas[j]){
                return true;
            }
        }
    }
    return false;
}

function procura_especial(senha){
    const especiais = "!@#$%¨&*()_+-=¹²³£¢¬§{}[]:;.,<>|*ªº?";
    for (i = 0; i<senha.length;i++) {
        for(j=0;j<especiais.length;j++){
            if(senha[i] == especiais[j]){
                return true;
            }
        }
    }
    return false;
}

function procura_numero(senha){
    const numeros = "0123456789";
    for (i = 0; i<senha.length;i++) {
        for(j=0;j<numeros.length;j++){
            if(senha[i] == numeros[j]){
                return true;
            }
        }
    }
    return false;
}

function procura_acento(senha){
    const acentuados = "ÀÁÂÃàáâãÈÉÊèéêÌÍÎìíîÒÓÔÕòóôõÙÚÛùúûÑñç";
    for (i = 0; i<senha.length;i++) {
        for(j=0;j<acentuados.length;j++){
            if(senha[i] == acentuados[j]){
                return false;
            }
        }
    }
    return true;
}

function procura_espaco(senha){
    const espaco = " ";
    for (i = 0; i<senha.length;i++) {
        if(senha[i] == espaco){
            return false;
        }
        
    }
    return true;
}

module.exports = {
    verifica_tamanho,
    procura_maiuscula,
    procura_minuscula,
    procura_especial,
    procura_numero,
    procura_acento,
    procura_espaco
}