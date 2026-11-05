import { Parquimetro } from "./classes.js";
import { obterElemento, formataMoeda, valorInsuficiente } from "./utils.js";

// Cria uma nova instância
const parquimetro = new Parquimetro();

// Manipulação do DOM
const formulario = document.querySelector("form");
const elementoResultado = obterElemento("resultado");

formulario.addEventListener("submit", (evento) => {
    // Previne o comportamento padrão
    evento.preventDefault();

    const valorPagamento = Number(formulario.elements.valorPagamento.value);

    if (valorInsuficiente(valorPagamento)) {
        elementoResultado.textContent = "Valor insuficiente";
        return;
    }

    const resultado = parquimetro.calcular(valorPagamento);

    elementoResultado.innerHTML =
        `Tempo: ${resultado.tempo} minutos<br>` +
        `Troco: R$ ${formataMoeda(resultado.troco)}`;

    formulario.reset();
});