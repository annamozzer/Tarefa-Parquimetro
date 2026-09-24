// Definir classe "Parquímetro"
class Parquimetro {
    // Propriedades
    #tempo;
    #troco;

    constructor() {
        this.#tempo = null;
        this.#troco = null;
    }

    // Métodos
    calcular() {
        // Obtém o valor do pagamento
        const valorPagamento = parseFloat(document.getElementById("valorPagamento").value);

        // Calcula tempo e troco
        if (isNaN(valorPagamento) || valorPagamento < 1) { this.#tempo = "Valor insuficiente" }

        else if (valorPagamento >= 1 && valorPagamento < 1.75) {
            this.#tempo = "30 minutos";
            this.#troco = valorPagamento - 1;
        }

        else if (valorPagamento >= 1.75 && valorPagamento < 3) {
            this.#tempo = "60 minutos";
            this.#troco = valorPagamento - 1.75;
        }

        else if (valorPagamento >= 3) {
            this.#tempo = "120 minutos";
            this.#troco = valorPagamento - 3;
        }

        this.mostrarResultado();
    }

    mostrarResultado() {
        const resultado = document.getElementById("resultado");

        if (this.#troco > 0 && this.#tempo !== "Valor insuficiente") {
            resultado.innerHTML = `Tempo: ${this.#tempo}<br>Troco: R$ ${this.#troco.toFixed(2)}`
        }

        else { resultado.textContent = `${this.#tempo}` }
    }
}

// Criar instâncias
const estacionar = new Parquimetro();