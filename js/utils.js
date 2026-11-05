// Funções utilitárias
export const obterElemento = (id) => document.getElementById(id);
export const formataMoeda = (valor) => valor.toFixed(2).replace(".", ",");
export const valorInsuficiente = (valor) => isNaN(valor) || valor < 1;

// Organiza a tabela de preços em um array
const tabelaPrecos = [
    { minimo: 3, preco: 3, minutos: 120 },
    { minimo: 1.75, preco: 1.75, minutos: 60 },
    { minimo: 1, preco: 1, minutos: 30 }
];

// Utiliza a programação funcional para selecionar um plano de acordo com o valor do pagamento
const obterPlano = (valorPagamento) => {
    return tabelaPrecos.find((plano) => valorPagamento >= plano.minimo);
};

export const calcularParquimetro = (valorPagamento) => {
    const plano = obterPlano(valorPagamento);

    return {
        tempo: plano.minutos,
        preco: plano.preco,
        troco: valorPagamento - plano.preco
    };
};