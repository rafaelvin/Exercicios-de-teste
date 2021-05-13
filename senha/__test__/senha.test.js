const b = require('../src/senha');
const verifica_tamanho = b.verifica_tamanho;

describe('Verifica e-mail', () => {
    
    test('Testa função verifica_tamanho', () => {
        expect(verifica_tamanho("12345678")).toBe(true);
        expect(verifica_tamanho("1234567")).toBe(false);
    })
})