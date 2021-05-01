const a = require('../src/email');
const separa_email = a.separa_email;
const valida_tamanho_usuario = a.valida_tamanho_usuario;
const valida_tamanho_dominio = a.valida_tamanho_dominio;


describe('Verifica e-mail', () => {
    test('Testa saída da função que separa usuário e domínio', () => {
        expect(separa_email("nome@email.com")).toStrictEqual(["nome", "email"]);
    }),
    test('Testa função tamanho usuário', () => {
        expect(valida_tamanho_usuario('rafael')).toBe('Usuário válido');
        expect(valida_tamanho_usuario("a")).toBe('Usuário inválido');
    })
    test("Testa função tamanho domínio", () => {
        expect(valida_tamanho_dominio("abc")).toBe('Domínio válido');
        expect(valida_tamanho_dominio("ab")).toBe('Domínio inválido');
    })
})

