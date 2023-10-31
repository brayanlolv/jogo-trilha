function andar(m, n) {

    let result = []
     let l1, l2
    switch (m) {// verifiacao para linha 1 e 7 

        case (0):
        case (6):
            l1 = n + 3
            l1 < 7 ? result.push([m, l1]) : null
            l2 = n - 3
            l2 > -1 ? result.push([m, l2]) : null
            break

        case (1):
        case (5):

            l1 = n + 2
            l2 = n - 2
            l1 < 6 ? result.push([m, l1]) : null
            l2 > 0 ? result.push([m, l2]) : null
            break

        case (2):
        case (4):
            l1 = n + 1
            l2 = n - 1
            l1 < 5 ? result.push([m, l1]) : null
            l2 > 1 ? result.push([m, l2]) : null
            break

        case (3):

            l1 = n + 1
            l2 = n - 1

            if (l1 < 7 && l1 != 3) { result.push([m, l1]) }
            if (l2 > -1 && l2 != 3) { result.push([m, l2]) }
            break
    }

    //testar N

    switch (n) {// verifiacao para linha 1 e 7 

        case (0):
        case (6):
            l1 = m + 3
            l1 < 7 ? result.push([l1, n]) : null
            l2 = m - 3
            l2 > -1 ? result.push([l2, n]) : null
            break


        case (1):
        case (5):

            l1 = m + 2
            l2 = m - 2
            l1 < 6 ? result.push([l1, n]) : null
            l2 > 0 ? result.push([l2, n]) : null
            break

        case (2):   
        case (4):
            l1 = m + 1
            l2 = m - 1
            l1 < 5 ? result.push([l1,n]) : null
            l2 > 1 ? result.push([l2, n]) : null
            break

        case (3):

            l1 = m + 1
            l2 = m - 1
            if (l1 < 7 && l1 != 3) { result.push([l1, n]) }
            if (l2 > -1 && l2 != 3) { result.push([l2, n]) }
            break
    }

    return result
}

function includeArray(arrayPai, m, n) {
    let incluso = false
    arrayPai.map((element) => {
        if (element[0] == m
            && element[1] == n) { incluso = true }
    })

    return incluso
}

function temPraOndeIr(tabuleiro,array){
    let x = false
    array.map((element)=>{
        if(tabuleiro[element[0]][element[1]]==0){
            x = true
        }
    })
    return x
}
export { andar, includeArray, temPraOndeIr }