const b = require('../src/senha');
const verifica_tamanho = b.verifica_tamanho;
const procura_maiuscula = b.procura_maiuscula;

describe('Verifica e-mail', () => {
    
    test('Testa função verifica_tamanho', () => {
        expect(verifica_tamanho("12345678")).toBe(true);
        expect(verifica_tamanho("1234567")).toBe(false);
    })
    test('Testa função procura_maiuscula', () => {
        expect(procura_maiuscula("senha")).toBe(false);
        expect(procura_maiuscula("seNha")).toBe(true);
    })
})