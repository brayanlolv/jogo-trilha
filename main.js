
import { vitima, select } from "./scripts/funcs.js";
import { renderMesas, setarbotoes, initbotoes, buttonposition, limparbotoes } from "./scripts/init.js"
import { verifytripla } from "./scripts/verify.js"
import { brancasmesasviewer, pretasmesasviewer } from "./scripts/variaveis.js"
import { andar, includeArray } from "./scripts/andar.js"
import { comerTela, posicionarTela, escolhaMoverTela, ondePorTela, sideValue } from "./scripts/tela.js";
let btn = document.querySelector("#btnTeste");
btn.addEventListener("click", segundaparte)
let tela = document.querySelector("#instrucoes")
//btn.addEventListener("click", limparbotoes)
let posicoes = document.getElementsByClassName("posicoes")
//teste
initbotoes() // inicializar os botoes e gerar o array


let brancasmesasnumber = 8
let pretasmesasnumber = 8
var pretasemjogo = 8
var brancaemjogo = 8

var round = 1; // par é peca branca
let player
let brancovalue = 3//pecas brancas vao ter o valor na matrix 3
let pretovalue = 4//pecas pretas vao ter o valor na matrix 5

posicionarTela(pretovalue)//tratar isso depois com a tela de inicio

let tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

function pecacor() { // funcao e escreve o nome da peca de acordo com o round index
    let brancadiv = '<div class="pecabranca" >b</div>'
    let pretadiv = '<div class="pecapreta" >p</div>'

    if (round % 2 == 0) {
        brancasmesasnumber--
        return brancadiv
    }

    else {
        pretasmesasnumber--
        return pretadiv
    }
}

function segundaparte() {

    //pegando a peca pra mover
    console.log("segunda parte")
    part1()

    let [m0, n0] = [0, 0]
    function escolha(i) {

        m0 = buttonposition[i][0] - 1;
        n0 = buttonposition[i][1] - 1;
        let i0 = i;

        //console.log("posicao inicial \n" + [m0, n0])
        if (tabuleiro[m0][n0] == pecaidround()) {
            tabuleiro[m0][n0] = 0;
            posicoes[i].innerHTML = incresepeca()
            part2(i0)
        }
    }


    function novapocisao(i, i0) {
        //pondo a peca no lucar

        let m0 = buttonposition[i0][0] - 1;
        let n0 = buttonposition[i0][1] - 1;
        let posicoesPossiveis = andar(m0, n0)

        let mfinal = buttonposition[i][0] - 1;
        let nfinal = buttonposition[i][1] - 1;
        console.log(includeArray(posicoesPossiveis, mfinal, nfinal))


        if (includeArray(posicoesPossiveis, mfinal, nfinal) && tabuleiro[mfinal][nfinal] == 0) {

            tabuleiro[mfinal][nfinal] = pecaidround();
            posicoes[i].innerHTML = pecacor();
            posicoes[i0].innerHTML = "";

            let sidevalue = round % 2 == 0 ? brancovalue : pretovalue

            if (verifytripla(mfinal, nfinal, tabuleiro, sidevalue).includes(true)) {
                console.log("come")
                comer(sidevalue, segundaparte)

            } else {
                segundaparte()
                round++
                let x = round % 2 == 0 ? brancovalue : pretovalue
        escolhaMoverTela(x)
            }
        }
    }


    function part1() {
        let x = round % 2 == 0 ? brancovalue : pretovalue
        escolhaMoverTela(x)

        limparbotoes()
        setarbotoes(escolha)
    }
    function part2(i0, posicoesPossiveis) {
        let x = round % 2 == 0 ? brancovalue : pretovalue
        ondePorTela(x)
        limparbotoes()
        setarbotoes(novapocisao, i0)
    }

    function pecaidround() {// retorna qual valor da peca do round atual na matrix
        if (round % 2 == 0) {
            return brancovalue
        }
        else { return pretovalue }
    }

    function incresepeca() {
        //style="border-color: brown"
        let brancadiv = '<div class="pecabranca" style="border-color: red" >foi</div>'
        let pretadiv = '<div class="pecapreta" >foi</div>'

        if (round % 2 == 0) {
            brancasmesasnumber--
            return brancadiv
        }

        else {
            pretasmesasnumber--
            return pretadiv
        }

    }



}

function primeiraparte() {

    let x = round % 2 == 0 ? brancovalue : pretovalue
    posicionarTela(x)

    if (brancasmesasnumber < 1 && pretasmesasnumber < 1) {
        console.log("acabou a primeira parte")
        return segundaparte()
    }

    else {
        setarbotoes(posicionar)
        renderMesas(brancasmesasnumber, pretasmesasnumber, brancasmesasviewer, pretasmesasviewer)
    }

} primeiraparte()


function choiceEat(i, sidevalue, cb) {//side value do comedor

    let m = buttonposition[i][0] - 1
    let n = buttonposition[i][1] - 1

    if (tabuleiro[m][n] == vitima(sidevalue, brancovalue, pretovalue)) {

        console.log(posicoes[i].innerHTML)
        posicoes[i].innerHTML = ""
        tabuleiro[m][n] = 0;
        sidevalue == brancovalue ? pretasemjogo-- : brancaemjogo--
        console.log("comeu " + [brancaemjogo, pretasemjogo])
        round++



        cb()

    }
}

// limpar os event listeners

async function comer(sidevalue, cb) {
    console.log("come")
    console.log(sidevalue)
    comerTela(sidevalue)
    let x = await limparbotoes()
    if (x) setarbotoes(choiceEat, sidevalue, cb)

}

function posicionar(i) {
    //console.log("round" + round)

    let m = buttonposition[i][0] - 1
    let n = buttonposition[i][1] - 1
    // conferindo se a  posicao do tabuleiro esta vazia
    if (tabuleiro[m][n] == 0) {

        let sidevalue = round % 2 == 0 ? brancovalue : pretovalue;
        tabuleiro[m][n] = sidevalue
        posicoes[i].innerHTML = pecacor();

        if (verifytripla(m, n, tabuleiro, sidevalue).includes(true)) {

            comer(sidevalue, primeiraparte)
        }
        else {

            primeiraparte()
            round++
            let x = round % 2 == 0 ? brancovalue : pretovalue
            posicionarTela(x)

        }
    }
    // console.log(tabuleiro)
    renderMesas(brancasmesasnumber, pretasmesasnumber, brancasmesasviewer, pretasmesasviewer)

}