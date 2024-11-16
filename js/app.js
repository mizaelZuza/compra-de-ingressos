let pista = parseInt(document.getElementById("qtd-pista").innerText);
let inferior = parseInt(document.getElementById("qtd-inferior").innerText);
let superior = parseInt(document.getElementById("qtd-superior").innerText);

function comprar() {
    const inputTipoIngresso = document.getElementById("tipo-ingresso").value;
    const quantidadeIngresso = document.getElementById("qtd").value;

    switch (inputTipoIngresso) {
        case "pista":
            calcularEstoquePista(quantidadeIngresso);
            break;
        case "inferior":
            calcularEstoqueInferior(quantidadeIngresso);
            break;
        case "superior":
            calcularEstoqueSuperior(quantidadeIngresso);
            break;
    }
}

function calcularEstoquePista(quantidade) {
    let liQtdPista = document.getElementById("qtd-pista");
    if (pista == 0) {
        alert("Não há estoque disponível! ");
        return;
    } else if (quantidade > pista) {
        alert("Não há estoque disponível! Escolha uma quantidade menor de ingressos");
    } else {
        alert("Compra realizada com sucesso!");
        pista -= quantidade;
        liQtdPista.textContent = pista;
    }
}

function calcularEstoqueInferior(quantidade) {
    let liQtdInferior = document.getElementById("qtd-inferior");
    if (inferior == 0) {
        alert("Não há estoque disponível! ");
        return;
    } else if (quantidade > inferior) {
        alert("Não há estoque disponível! Escolha uma quantidade menor de ingressos");
    } else {
        alert("Compra realizada com sucesso!");
        inferior -= quantidade;
        liQtdInferior.textContent = inferior;
    }

}
function calcularEstoqueSuperior(quantidade) {
    let liQtdSuperior = document.getElementById("qtd-superior");
    if (superior == 0) {
        alert("Não há estoque disponível! ");
        return;
    } else if (quantidade > superior) {
        alert("Não há estoque disponível! Escolha uma quantidade menor de ingressos");
    } else {
        alert("Compra realizada com sucesso!");
        superior -= quantidade;
        liQtdSuperior.textContent = superior;
    }
}