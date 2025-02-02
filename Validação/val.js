function validarBandeiraCartao(numero) {
    const bandeiras = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
        // Adicione outras bandeiras conforme necessário
    };

    for (let bandeira in bandeiras) {
        if (bandeiras[bandeira].test(numero)) {
            return bandeira;
        }
    }

    return 'Bandeira desconhecida';
}

// Exemplo de uso
let numeroCartao = '4111111111111111';
let bandeira = validarBandeiraCartao(numeroCartao);
console.log(`A bandeira do cartão é: ${bandeira}`);
