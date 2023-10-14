function renderMesas(brancasmesasnumber, pretasmesasnumber, brancasmesasviewer, pretasmesasviewer) {

    brancasmesasviewer.innerHTML = ''
    pretasmesasviewer.innerHTML = ''

    for (let i = 0; i < brancasmesasnumber; i++) {

        brancasmesasviewer.innerHTML += '<div class="pecabranca"></div>'
    }

    for (let i = 0; i < pretasmesasnumber; i++) {

        pretasmesasviewer.innerHTML += '<div class="pecapreta"></div>'
    }
}


let posicoes = document.getElementsByClassName("posicoes")
let buttonposition = [] // exporta esssas variaveis



function initbotoes() {


    console.log("init botoes")

    for (let i = 0; i < posicoes.length; i++) {

        let pos = [parseInt(posicoes[i].innerHTML.charAt(1)),
        parseInt(posicoes[i].innerHTML.charAt(3)),]

        buttonposition.push(pos)

    }

    return posicoes
}

function limparbotoes() {

    for (let i = 0; i < posicoes.length; i++) {

        let name = `div[name='${i}']`

        $(name).replaceWith($(name).clone());
       

    }
}


function setarbotoes(func, param1, param2) {




    console.log("setando")
    let posicoes = document.getElementsByClassName("posicoes")
    for (let i = 0; i < posicoes.length; i++) {

        posicoes[i].addEventListener("click", () => {
            func(i, param1, param2)

        })
    }
}

// function setarbotoes(func,param1,param2){

//     let i = 0;

//      while(i<posicoes.length){

//         let event = ()=> func(i,param1,param2)

//         posicoes[i].addEventListener("click",event)

//      }
// }


export { renderMesas, setarbotoes, initbotoes, posicoes, buttonposition, limparbotoes, } 