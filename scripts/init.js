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
    for (let i = 0; i < posicoes.length; i++) {

        let pos = [parseInt(posicoes[i].innerHTML.charAt(1)),
        parseInt(posicoes[i].innerHTML.charAt(3)),]

        buttonposition.push(pos)

        posicoes[i].innerHTML = ""//tirando os numeros das pocisicoes

    }

    return posicoes
}

function limparbotoes() {

    for (let i = 0; i < posicoes.length; i++) {

        let name = `div[name='${i}']`

        $(name).replaceWith($(name).clone());
       

    }
    return true
}


function setarbotoes(func, param1, param2) {
    let posicoes = document.getElementsByClassName("posicoes")
    for (let i = 0; i < posicoes.length; i++) {

        posicoes[i].addEventListener("click", () => {
            func(i, param1, param2)

        })
    }
}
export { renderMesas, setarbotoes, initbotoes, posicoes, buttonposition, limparbotoes, } 