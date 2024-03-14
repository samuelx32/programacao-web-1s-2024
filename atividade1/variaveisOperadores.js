let num_1 = [2,3,4,15]
let num_2 = [4,3,2,3]
let resultado = []
let operacao = ['soma','subtração','multiplicação','divisão']

for (i=0; i < 4; i++){
    if (operacao[i] == 'soma') {
        resultado[i] = num_1[i] + num_2[i]
    }else if (operacao[i] == 'subtração'){
        resultado[i] = num_1[i] - num_2[i]
    }else if (operacao[i] == 'multiplicação'){
        resultado[i] = num_1[i] * num_2[i]
    }else if (operacao[i] == 'divisão'){
        resultado[i] = num_1[i] / num_2[i]
    }

    console.log(`O resultado da ${operacao[i]} entre ${num_1[i]} e ${num_2[i]} é ${resultado[i]}`)
}





