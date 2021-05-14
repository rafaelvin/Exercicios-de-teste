function testa_email(email) {
    const arroba = email.indexOf("@");
    if(arroba == -1){
        return "E-mail inválido";
    } else{
        var array_email = email.split("@");
        tamanho_usuário = valida_tamanho_usuario(array_email[0]);
        if(tamanho_usuário == false) {
            return "E-mail inválido";
        } else {
            tamanho_dominio = valida_tamanho_dominio(array_email[1]);
            if(tamanho_dominio == false) {
                return "E-mail inválido";
            } else if(verifica_caracteres(email) == false) {
                return "E-mail inválido";
            } else {
                return "E-mail válido";
            }
        }
    }   
}

function valida_tamanho_usuario(user) {
    if (user.length < 2) {
        return false;
    } else {
        return true;
    }
}

function valida_tamanho_dominio(domain) {
    const ponto = domain.indexOf(".");
    if(ponto < 3) {
        return false;
    } else {
        return true;
    }
}

function verifica_caracteres(email) {
    for(i = 0; i<email.length; i++) {
        const caracteres = " !#$%¨&*()+-='´`^~:;<>,|*ªº";
        for(j=0; j<caracteres.length;){
            if(email[i] == caracteres[j]) {
                return false
            } else {
                j++;
            }
        }
    }
    return true;
}



console.log(testa_email("nome@email.br"))


module.exports = {
    testa_email, 
    valida_tamanho_usuario,
    valida_tamanho_dominio,
    verifica_caracteres
}
