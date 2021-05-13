const a = require('../src/email');
const testa_email = a.testa_email;
const valida_tamanho_usuario = a.valida_tamanho_usuario;
const valida_tamanho_dominio = a.valida_tamanho_dominio;
const verifica_caracteres = a.verifica_caracteres;


describe('Verifica e-mail', () => {
    
    test('Testa função tamanho usuário', () => {
        expect(valida_tamanho_usuario('rafael')).toBe(true);
        expect(valida_tamanho_usuario("a")).toBe(false);
    })
    test("Testa função tamanho domínio", () => {
        expect(valida_tamanho_dominio("abc.com")).toBe(true);
        expect(valida_tamanho_dominio("ab.com")).toBe(false);
    })
    test("Testa função verifica caracteres", () => {
        expect(verifica_caracteres("nome@email.com")).toBe(true);
        expect(verifica_caracteres("nome!@email.com")).toBe(false);
    })
    test("Testa a função testa_email", () => {
        expect(testa_email("nome@email.com")).toBe("E-mail válido");
        expect(testa_email("nomeemail.com")).toBe("E-mail inválido");
    })
    
    
})

