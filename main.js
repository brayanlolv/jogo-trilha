
import { vitima  } from "./scripts/funcs.js";
import { renderMesas, setarbotoes, initbotoes, posicoes, buttonposition,limparbotoes} from "./scripts/init.js"
import { verifytripla } from "./scripts/verify.js"
import {brancasmesasviewer,pretasmesasviewer} from "./scripts/variaveis.js"
let btn = document.querySelector("#btnTeste");
btn.addEventListener("click",limparbotoes)



initbotoes() // inicializar os botoes e gerar o array

let brancasmesasnumber = 8
let pretasmesasnumber = 8
var pretasemjogo = 8
var brancaemjogo = 8

var round = 1; // par é peca branca
let player
let brancovalue = 3//pecas brancas vao ter o valor na matrix 3
let pretovalue = 4//pecas pretas vao ter o valor na matrix 5


let tabuleiro = [


    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]



function proximaetapa(){
    console.log("proxima etapa")
}

function primeiraparte() {

  
    setarbotoes(posicionar)
    renderMesas(brancasmesasnumber,pretasmesasnumber,brancasmesasviewer,pretasmesasviewer)

}primeiraparte()




function choiceEat(i,sidevalue,cb){//side value do comedor

 

    let m = buttonposition[i][0] -1
    let n = buttonposition[i][1] -1 
    vitima(sidevalue,brancovalue,pretovalue)

    if(tabuleiro[m][n] == vitima(sidevalue,brancovalue,pretovalue)){

        tabuleiro[m][n] = 0 ;
        posicoes[i].innerHTML = ""
        sidevalue == brancovalue ? pretasemjogo--:brancaemjogo--
        console.log("comeu "+[brancaemjogo,pretasemjogo])

        ////teste
       
        cb()

    }
}

// limpar os event listeners

function comer(sidevalue,cb){

    console.log("lapada seca")
    limparbotoes()

    setarbotoes(choiceEat,sidevalue,cb)

   

    
}








function pecacor(){ // funcao e escreve o nome da peca de acordo com o round index

    if(brancasmesasnumber <1 && pretasmesasnumber<1){
        proximaetapa()
    }

    else if (round % 2 == 0 ){
       brancasmesasnumber--
        return '<div class="pecabranca">b</div>'
    }
    
    else{
        pretasmesasnumber--
        return '<div class="pecapreta">p</div>'
    }

}

function posicionar(i){
    console.log("round"+round)

    let m = buttonposition[i][0] -1
    let n = buttonposition[i][1] -1 
    // conferindo se a  posicao do tabuleiro esta vazia
    if(tabuleiro[m][n] == 0 ){


        

        let sidevalue =  round % 2 == 0 ? brancovalue : pretovalue;
        tabuleiro[m][n] = sidevalue 
        posicoes[i].innerHTML = pecacor();
        round++
        let tripla = verifytripla(m,n,tabuleiro,sidevalue)

        if(tripla[0] == true || tripla[1] == true){
            //chamar funcao de comer peca
            console.log("come")
            comer(sidevalue,primeiraparte)
            
        }
        

        primeiraparte
    }
    
    

    // console.log(tabuleiro)
    renderMesas(brancasmesasnumber,pretasmesasnumber,brancasmesasviewer,pretasmesasviewer)

}