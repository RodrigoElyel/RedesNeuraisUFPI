
const degrau = (u) => {
    if (u < 0) {
        return 0
    } else {
        return 1
    }
}

const tangente = (u, b) => {

    var g = ((1 - Math.exp((-b) * u)) / (1 + Math.exp((-b) * u)))
    return (g.toFixed(5))
}

const logistica = (u, b) => {

    var g = ((1) / (1 + Math.exp((-b) * u)))
    return (g.toFixed(5))
}

const calcularU = (entradas, pesos, limiar, beta, qtdEntrada, funcao) => {

    var arm = 0

    for (var i = 0; i < qtdEntrada; i++) {
        // console.log(entradas[i] + '*' + pesos[i])
        arm += (entradas[i] * pesos[i])
        // console.log(arm)
    }

    var u = arm - limiar

    u = u.toFixed(2)
    if (funcao === 'degrau') {
        var resultado = degrau(u)
    } else if (funcao === 'tangente') {
        var resultado = tangente(u, beta)
    } else if (funcao === 'linear') {
        var resultado = u
    } else if (funcao === 'logistica') {
        var resultado = logistica(u, beta)
    }

    // console.log("-> u = " + u)
    // console.log("-> g(u) = " + resultado)
    return resultado
}


const camadaSimples = (qtdEntrada, qtdCamadasSaída, entradas, pesos, limiar, beta, funcao) => {

    var camada = []

    for (var i = 0; i < qtdCamadasSaída; i++) {
        // console.log('|Saída : y(' + i + ')|')
        camada[i] = calcularU(entradas, pesos[i], limiar[i], beta, qtdEntrada, funcao)
        console.log(camada[i]+',')
    }
}

const multiCamadas = (qtdEntrada, vetorQtdCamadas, entradas, vetorPesos, limiar, beta, funcao) => {



    var camada = []

    // PRIMEIRA CAMADA
    for (var j = 0; j < vetorQtdCamadas.length; j++) {
        console.log('|Camada ' + j + '|')
        var aux = camada
        console.log('novas entradas: ' + aux)
        for (var i = 0; i < vetorQtdCamadas[j]; i++) {
            if (j === 0) {
                console.log('Neurônio (' + i + ')')
                camada[i] = calcularU(entradas, vetorPesos[j][i], limiar[j][i], beta, qtdEntrada, funcao)
            } else {
                console.log('Neurônio (' + i + ')')
                // console.log(vetorQtdCamadas[j-1])
                camada[i] = calcularU(aux, vetorPesos[j][i], limiar[j][i], beta, vetorQtdCamadas[j - 1], funcao)
            }
        }
    }


}

// descobrir razão
// an = a1 + (n-1)*r
// 1 = 0 + (20-1)*r

const pa = () => {
    var razao = 1 / 19
    var termos = []


    for (var i = 1; i < 21; i++) {
        var valor = 0 + ((i - 1) * razao)
        // console.log(valor.toFixed(1))
        termos[i - 1] = valor.toFixed(5)
    }
    return termos
}

const questao1 = () => {

    var vetor = pa()

    for (var i = 0; i < 20; i++) {

        camadaSimples(
            2,                                // qtd entradas
            3,                                // qtd camadas
            [vetor[i], vetor[i]],                           // entrada
            [
                [1, 1], [1, 1], [1, 1]        //pesos
            ],
            [1.2, 0.4, 2.1],                  //limiar
            1,                                //beta 
            'logistica'                          //funcao
        )
    }
}


// console.log(pa())
questao1()















// TESTES

// camadaSimples(
//     2,                                // qtd entradas
//     3,                                // qtd camadas
//     [0, 0],                           // entrada
//     [
//         [1, 1], [1, 1], [1, 1]        //pesos
//     ],
//     [1.2, 0.4, 2.1],                  //limiar
//     0,                                //beta 
//     'degrau'                          //funcao
// )

// multiCamadas(
//     2,                                // qtd entradas
//     [3, 4, 2],                        // qtd camadas
//     [0, 0],                           // entrada
//     [
//         [[1, 1], [1, 1], [1, 1]],           //pesos primeira camada
//         [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]],   //pesos segunda camada 
//         [[1, 1, 1, 1], [1, 1, 1, 1]]                    //pesos camada saída
//     ],
//     [
//         [1.2, 0.4, 2.1],                    //limiar primeira camada
//         [1.2, 0.4, 2.1, 2.1],               //limiar segunda camada
//         [1.2, 0.4]                          //limiar camada saída
//     ],
//     0,                                //beta 
//     'degrau'                          //funcao
// )



    // for (var i = 0; i < vetorQtdCamadas[0]; i++) {
    //     console.log('Neurônio (' + i + ')')
    //     camada1[i] = calcularU(entradas, vetorPesos[0][i], limiar[0][i], beta, qtdEntrada, funcao)
    // }
    // console.log(camada1)

    // //SEGUNDA CAMADA
    // console.log('|Saída Segunda Camada|')
    // for (var i = 0; i < vetorQtdCamadas[1]; i++) {
    //     console.log('Neurônio (' + i + ')')
    //     camada2[i] = calcularU(camada1, vetorPesos[1][i], limiar[1][i], beta, vetorQtdCamadas[0], funcao)
    // }
    // console.log(camada2)

    // //CAMADA SAÍDA
    // console.log('|Camada de Saída|')
    // for (var i = 0; i < vetorQtdCamadas[2]; i++) {
    //     console.log('Neurônio (' + i + ')')
    //     camada3[i] = calcularU(camada2, vetorPesos[2][i], limiar[2][i], beta, vetorQtdCamadas[1], funcao)
    // }
    // console.log(camada3)