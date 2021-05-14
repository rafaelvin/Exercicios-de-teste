const b = require('../src/senha');
const verifica_tamanho = b.verifica_tamanho;
const procura_maiuscula = b.procura_maiuscula;
const procura_minuscula = b.procura_minuscula;
const procura_especial = b.procura_especial;
const procura_numero = b.procura_numero;
const procura_acento = b.procura_acento;
const procura_espaco = b.procura_espaco;
const verifica_senha = b.verifica_senha;

describe('Verifica e-mail', () => {
    
    test('Testa função verifica_tamanho', () => {
        expect(verifica_tamanho("12345678")).toBe(true);
        expect(verifica_tamanho("1234567")).toBe(false);
    })
    test('Testa função procura_maiuscula', () => {
        expect(procura_maiuscula("senha")).toBe(false);
        expect(procura_maiuscula("seNha")).toBe(true);
    })
    test('Testa função procura_minuscula', () => {
        expect(procura_minuscula("SENHA")).toBe(false);
        expect(procura_minuscula("SENHa")).toBe(true);
    })
    test('Testa função procura_especial', () => {
        expect(procura_especial("senha")).toBe(false);
        expect(procura_especial("senha#")).toBe(true);
    })
    test('Testa função procura_numero', () => {
        expect(procura_numero("senha")).toBe(false);
        expect(procura_numero("senha2")).toBe(true);
    })
    test('Testa função procura_acento', () => {
        expect(procura_acento("senhañ")).toBe(false);
        expect(procura_acento("senha2")).toBe(true);
    })
    test('Testa função procura_espaco', () => {
        expect(procura_espaco("senha ")).toBe(false);
        expect(procura_espaco("senha")).toBe(true);
    })
    test('Testa função verifica_senha', () => {
        expect(verifica_senha("Senha123")).toBe("Senha inválida");
        expect(verifica_senha("Senh@123")).toBe("Senha válida");
    })
})