function separa_email(email) {
    const arroba = email.indexOf("@");
    if(arroba == -1){
        return "E-mail inválido: não possui @";
    } else{
        var array_email = email.split("@");
        return array_email;
    }
    
}

function valida_tamanho_usuario(user) {
    if (user.length < 2) {
        return "Usuário inválido";
    } else {
        return "Usuário válido";
    }
}

function valida_tamanho_dominio(domain) {
    if (domain.length < 3) {
        return "Domínio inválido";
    } else {
        return "Domínio válido";
    }
}

var separado = separa_email("nome_testedominio_teste.com");
console.log(separado);
console.log(valida_tamanho_usuario(separado[0]));
console.log(valida_tamanho_dominio(separado[1]));


module.exports = {
    separa_email, 
    valida_tamanho_usuario,
    valida_tamanho_dominio
}
