function posicionando() { // terminar isso


    let finalizarposicionado

    while (finalizarposicionado != true) {
        renderMesas();
        round % 2 == 0 ? player = 1 : player = 2;

        player == 1 ? display.innerHTML = "posicione sua peca branco" : display.innerHTML = "posicione sua peca preto";


    }
}

export {posicionando}