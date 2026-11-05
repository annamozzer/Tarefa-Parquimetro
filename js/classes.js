import { calcularParquimetro } from "./utils.js";

// Define a classe "Parquímetro"
export class Parquimetro {
    // Encapsulamento
    #tempo;
    #preco;
    #troco;

    constructor() {
        this.#tempo = null;
        this.#preco = null;
        this.#troco = null;
    }

    // Getters
    get tempo() {
        return this.#tempo;
    }

    get preco() {
        return this.#preco;
    }

    get troco() {
        return this.#troco;
    }

    // Métodos
    calcular(valorPagamento) {
        const resultado = calcularParquimetro(valorPagamento);

        this.#tempo = resultado.tempo;
        this.#preco = resultado.preco;
        this.#troco = resultado.troco;

        return resultado;
    }
}

