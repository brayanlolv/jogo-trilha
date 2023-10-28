let tela = document.querySelector("#instrucoes h1")
let brancovalue = 3//pecas brancas vao ter o valor na matrix 3
let pretovalue = 4
 

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


export {comerTela, posicionarTela, sideValue,escolhaMoverTela,ondePorTela }






