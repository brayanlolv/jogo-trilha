let tela = document.querySelector("#instrucoes h1")
let brancovalue = 3//pecas brancas vao ter o valor na matrix 3
let pretovalue = 4
let body = document.querySelector("body")

function ganhou(pecasB, pecasV) {
    if (pecasB < 3 || pecasV < 3) {
        let vencedor = pecasB < 3 ? "vermelha" : "branca"
        let x = `<div id="telaVencedor">
                     <div id="vencDentro"> 
                     <h1> parabens!! <br> ${vencedor} ganhou</h1> 
                    <input type="button" id="jogarNovamente" value="jogarNovamente" name="" id="">
                    <div/>
                <div/>`
        body.innerHTML += x
        let playAgain = document.querySelector("#jogarNovamente")
        playAgain.addEventListener("click", () => {
            window.location.reload()
        })

        return true
    } else {
        return false
    }
}


function sideValue(sidevalue) {
    return sidevalue == brancovalue ? "branca" : "vermelha";
}

function comerTela(sideValue) {
    let [x, y] = sideValue == brancovalue ? ["branca", "vermelha"] : ["vermelha", "branca"]

    tela.innerHTML = ` Peca ${x} escolha uma peca ${y} para comer`
}

function posicionarTela(sidevalue) {

    let x = sidevalue == brancovalue ? "branca" : "vermelha"
    tela.innerHTML = `Peça ${x} posicione sua peca`
}

function escolhaMoverTela(sidevalue) {
    let a
    a = sidevalue == brancovalue ? "branca" : "vermelha"
    tela.innerHTML = `escolha qual peca ${a} deseja mover `
}

function ondePorTela(sidevalue) {
    let a
    a = sidevalue == brancovalue ? "branca" : "vermelha"
    tela.innerHTML = `escolha onde deseja posiciona-la ${a}`
}


export { comerTela, posicionarTela, sideValue, escolhaMoverTela, ondePorTela, ganhou }






