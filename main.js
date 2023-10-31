
import { vitima } from "./scripts/funcs.js";
import { renderMesas, setarbotoes, initbotoes, buttonposition, limparbotoes } from "./scripts/init.js"
import { verifytripla } from "./scripts/verify.js"
import { brancasmesasviewer, pretasmesasviewer } from "./scripts/variaveis.js"
import { andar, includeArray, temPraOndeIr } from "./scripts/andar.js"
import { comerTela, posicionarTela, escolhaMoverTela, ondePorTela, ganhou } from "./scripts/tela.js";



let comecarBtn = document.querySelector("#comecar")
comecarBtn.addEventListener("click", () => {
    document.querySelector("#comecaDiv").remove()
    primeiraparte()
})
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
let brancovalue = 3//pecas brancas vao ter o valor na matrix 3
let pretovalue = 4//pecas pretas vao ter o valor na matrix 5

// ganhou(2,5,brancovalue)


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
    let brancadiv = '<div class="pecabranca"></div>'
    let pretadiv = '<div class="pecapreta" ></div>'
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
    if (!ganhou(brancaemjogo, pretasemjogo)) {
        part1()

    }

    
    function escolha(i) {

        const m = buttonposition[i][0] - 1;
        const n = buttonposition[i][1] - 1;

        const posicoesPossiveis = andar(m,n)
        console.log(temPraOndeIr(tabuleiro, posicoesPossiveis))//apagar
        if (tabuleiro[m][n] == pecaidround() &&      //por a resolucao pra resolver o problema de logica
            temPraOndeIr(tabuleiro, posicoesPossiveis)) {
            tabuleiro[m][n] = 0;
            posicoes[i].innerHTML = incresepeca()
            part2(i)
        }
    }

    function novapocisao(i, i0) {
        //pondo a peca no lucar

        // console.log("parte2")

        const mfinal = buttonposition[i][0] - 1;
        const nfinal = buttonposition[i][1] - 1;
        const m0 = buttonposition[i0][0] - 1;
        const n0 = buttonposition[i0][1] - 1;

        const posicoesPossiveis = andar(m0,n0)

        // console.log(includeArray(posicoesPossiveis,m0,n0) )
        // console.log(tabuleiro[mfinal][nfinal] == 0)

        if (includeArray(posicoesPossiveis, mfinal, nfinal) && tabuleiro[mfinal][nfinal] == 0) {

            tabuleiro[mfinal][nfinal] = pecaidround();
            posicoes[i].innerHTML = pecacor();
            posicoes[i0].innerHTML = "";

            let sidevalue = round % 2 == 0 ? brancovalue : pretovalue

            //let tem = verifytripla(mfinal, nfinal, tabuleiro, sidevalue)
            //if (tem[0]==true || tem[1] == true) {
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
        let brancadiv = '<div class="pecabranca" style="border: 3px solid red" ></div>'
        let pretadiv = '<div class="pecapreta"  style="border: 3px solid white"></div>'

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
    posicionarTela(sideValue())

    if (brancasmesasnumber < 1 && pretasmesasnumber < 1) {
        segundaparte()
    } else if (!ganhou(brancaemjogo, pretasemjogo)) {
        setarbotoes(posicionar)
        renderMesas(brancasmesasnumber, pretasmesasnumber, brancasmesasviewer, pretasmesasviewer)
    }
}


function choiceEat(i, sidevalue, cb) {//side value do comedor

    const m = buttonposition[i][0] - 1
    const n = buttonposition[i][1] - 1

    if (tabuleiro[m][n] == vitima(sidevalue, brancovalue, pretovalue)) {

        console.log(posicoes[i].innerHTML)
        posicoes[i].innerHTML = ""
        tabuleiro[m][n] = 0;
        sidevalue == brancovalue ? pretasemjogo-- : brancaemjogo--
        round++

        cb()
    }
}

function comer(sidevalue, cb) {
    comerTela(sidevalue)
    limparbotoes()
    setarbotoes(choiceEat, sidevalue, cb)

}

function posicionar(i) {
    const m = buttonposition[i][0] - 1
    const n = buttonposition[i][1] - 1

    // conferindo se a  posicao do tabuleiro esta vazia
    if (tabuleiro[m][n] == 0) {

        let sidevalue = sideValue()

        tabuleiro[m][n] = sidevalue
        posicoes[i].innerHTML = pecacor();

        if (verifytripla(m, n, tabuleiro, sidevalue).includes(true)) {
            comer(sidevalue, primeiraparte)
        }
        else {

            primeiraparte()
            round++
            posicionarTela(sideValue())

        }
    }
    renderMesas(brancasmesasnumber, pretasmesasnumber, brancasmesasviewer, pretasmesasviewer)

}

function sideValue() {
    return round % 2 == 0 ? brancovalue : pretovalue
}