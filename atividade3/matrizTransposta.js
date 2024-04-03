function vizualizacao(A){
    for (elemento in A) {
        console.log(A[elemento])
    }
}

function transporMatriz(A){
    B = new Array()
    for (x in A[0]) {
        B[x] = new Array()
        for (j in A){
            B[x][j] = 0
        }
    }
    
    for (x in A[0]) {
        for (j in  A){
            B[x][j] = A[j][x]
        }
    }
    
    return B
}

//matriz = [
//    [1,2,4,5],
//    [3,4,6,7]
//]

matriz = [
    [1,2],
    [3,4],
    [5,6]
]

console.log("- Fase 1 -")
vizualizacao(matriz)

console.log("- Transpondo... -")
vizualizacao(transporMatriz(matriz))