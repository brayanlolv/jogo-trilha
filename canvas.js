




const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let createRect = (x, y, width, height, color)=>{
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height, color)
}



let [player1,player2] = [3,5]
let blocksize = 20
let color = "black"

let tabuleiro = [


    [1, 0, 0,  1,  0, 0, 1],
    [0, 1, 0,  1,  0, 1, 0],
    [0, 0, 1,  5,  1, 0, 0],
    [1, 1, 1,  0,  5, 1, 1],
    [0, 0, 1,  1,  1, 0, 0],
    [0, 1, 0,  5,  0, 1, 0],
    [1, 0, 0,  1,  0, 0, 1]
]


let draw = ()=>{ 
    drawwalls()
}

let renderizartabuleiro = ()=>{
    
    for(let i = 0 ; i < tabuleiro.length; i++){
        for(let j = 0; j < tabuleiro[0].length; j++){
            if (tabuleiro[i][j] == 1 ){ 
                createRect(j*blocksize,i*blocksize,blocksize,blocksize,"black")
            }
            else if(tabuleiro[i][j] == 5 ){
                createRect(j*blocksize,i*blocksize,blocksize,blocksize,"f red")


            }
        }
    }
}

console.log(tabuleiro[3][2])

renderizartabuleiro()
