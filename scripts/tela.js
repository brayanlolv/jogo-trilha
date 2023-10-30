let tela = document.querySelector("#instrucoes h1")
let brancovalue = 3//pecas brancas vao ter o valor na matrix 3
let pretovalue = 4
let body = document.querySelector("body")
 
function ganhou(pecasB,pecasV,vencedor){

    if(pecasB < 3 || pecasV < 3){
        let side =vencedor == brancovalue ?  "branca" : "vermelha";
        let x = `<div id="telaVencedor">  <h1> parabens</h1> <br><h2> ${side} ganhou</h2>   <input type="button" id="jogarNovamente" value="jogarNovamente" name="" id="">`
        body.innerHTML+=x
        let playAgain = document.querySelector("#jogarNovamente")
        playAgain.addEventListener("click",()=>{
            window.location.reload()
        })

    }

    
    
    
    
    
    
   




}


function sideValue(sidevalue){
  return sidevalue == brancovalue ?  "branca" : "vermelha";
}

function comerTela(sideValue){
   let [x,y] = sideValue == brancovalue ? ["branca","vermelha"]: ["vermelha","branca"]
    
    tela.innerHTML = ` Peca ${x} escolha uma peca ${y} para comer`
}


function posicionarTela(sidevalue){
    let x
     x = sidevalue == brancovalue ?"branca" :"vermelha"
    tela.innerHTML = `Peça ${x} posicione sua peca`
}

function escolhaMoverTela(sidevalue){
    let a
    a = sidevalue == brancovalue ?"branca" :"vermelha"
    tela.innerHTML =`escolha qual peca ${a} desja mover `
}

function ondePorTela(sidevalue){
    let a
     a = sidevalue == brancovalue ?"branca" :"vermelha"
    tela.innerHTML =`escolha onde deseja posiciona-la ${a}`

}


export {comerTela, posicionarTela, sideValue,escolhaMoverTela,ondePorTela, ganhou }






