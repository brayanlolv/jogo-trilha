function somarvector(vector){
    let sum = 0
    for(let i = 0;i < vector.length; i++ ){
        sum += vector[i]
    }
    return sum

}

function somarcoluna(board,coluna){

    let sum = 0

    for(let m = 0;m < board.length;m++ ){
        sum += board[m][coluna]
    }
    return sum

}


function somarlinha(board,linha){
    let sum = 0
    for(let n = 0;n < board.length;n++ ){
        sum += board[linha][n]
    }
    return sum
}

function verifytripla(m,n,board,sidevalue){// side value é o valor q é passado para a matrix de acordo com o lado

    let mTripla,nTrilpla,vetorManipulacao

    console.log("opa")
    //verificar linha
    if(m == 3){
        if(n>=0 && n<= 2){
            vetorManipulacao = [board[m][0],board[m][1],board[m][2]]
            somarvector(vetorManipulacao) == sidevalue * 3 ? mTripla = true: mTripla = false
            console.log("linha meio")
        }

        else if(n>=4 && n<= 6){
            vetorManipulacao = [board[m][4],board[m][5],board[m][6]]
            somarvector(vetorManipulacao) == sidevalue * 3 ? mTripla = true: mTripla = false
 
        }
        //pensa pensa
    }   

    else{ 
        somarlinha(board,m) == sidevalue * 3 ? mTripla = true: mTripla = false 
        console.log("testando a linha")
    }

    //linha
        
    if(n == 3){ // esse aqui resulta o m tripla
        console.log("n = 3")
        if(m>=0 && m<= 2){
            
            vetorManipulacao = [board[0][n],board[1][n],board[2][n]]
            somarvector(vetorManipulacao) == sidevalue * 3 ?nTrilpla = true: nTrilpla = false

            
       
        }

        else if(m>=4 && m<= 6){
            vetorManipulacao = [board[4][n],board[5][n],board[6][n]]
            somarvector(vetorManipulacao) == sidevalue * 3 ? nTrilpla= true: nTrilpla = false
            
        }

        console.log(mTripla)

    }

    else{ 
        
        somarcoluna(board,n) == sidevalue * 3 ? nTrilpla = true: nTrilpla = false 
    }

    return [mTripla,nTrilpla]
    //console.log([mTripla,nTrilpla])
    
}

export {somarvector, somarlinha , somarcoluna, verifytripla }