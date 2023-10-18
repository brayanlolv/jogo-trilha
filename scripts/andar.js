let position = [2,4]

console.log(position);
const m = position[0] - 1
const n = position[1] - 1


function andar(m, n) {

let result = []

    // testar m
    let l1, l2
    switch (m) {// verifiacao para linha 1 e 7 

        case (0):
        case (6):
            l1 = n + 3
            l1 < 7 ? result.push([m, l1]) : null
            l2 = n - 3
            l2 > -1 ? result.push([m, l2]) : null
            console.log("linha das pontas")
            break

        case (1):
        case (5):

            l1 = n + 2
            l2 = n - 2
            l1 < 6 ? result.push([m, l1]) : null
            l2 > 0 ? result.push([m, l2]) : null
            console.log("linha medianas")
            break

        case (3):

            l1 = n + 1
            l2 = n - 1

            if (l1 < 7 && l1 != 3) { result.push([m, l1]) }
            if (l2 > -1 && l2!=3) { result.push([m, l2]) }
            console.log("linha bem do meio")
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
            console.log("linha das pontas")
            break


        case (1):
        case (5):

            l1 = m + 2
            l2 = m - 2
            l1 < 6 ? result.push([l1, n]) :null
            l2 > 0 ? result.push([l2, n]) : null
            console.log("linha medianas")
            break

            case (3):

            l1 = m + 1
            l2 = m - 1

            if (l1 < 7 && l1 != 3) { result.push([l1,n]) }
            if (l2 > -1 && l2!=3) { result.push([l2,n]) }
            console.log("linha bem do meio")
            break
    }

    return result
}



function  includeArray(arrayPai,m,n){
    let incluso = false
    arrayPai.map((element)=>{
        if(element[0]==m
            &&element[1]==n){incluso = true}
    })

    return incluso
 }


console.log("posicoes vizinhas")

//implementar isso na pratica
export {andar, includeArray}