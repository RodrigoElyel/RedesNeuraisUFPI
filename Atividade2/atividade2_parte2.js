
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


const camadaSimples = (qtdEntrada, qtdCamadasSaida, entradas, pesos, limiar, beta, funcao) => {

    var camada = []

    for (var i = 0; i < qtdCamadasSaida; i++) {
        // console.log('|Saída : y(' + i + ')|')
        camada[i] = calcularU(entradas, pesos[i], limiar[i], beta, qtdEntrada, funcao)
    }
    // console.log(camada)
    return camada
}

const multiCamadas = (qtdEntrada, vetorQtdCamadas, entradas, vetorPesos, limiar, beta, funcao) => {

    

    var camada = []

    // PRIMEIRA CAMADA
    for (var j = 0; j < vetorQtdCamadas.length; j++) {
        // console.log('|Camada ' + j + '|')
        var aux = camada
        camada = []
        // console.log('novas entradas: ' + aux)
        for (var i = 0; i < vetorQtdCamadas[j]; i++) {
            if (j === 0 && i === 0) {
                // console.log('Neurônio (' + i + ')')
                camada[i] = calcularU(entradas, vetorPesos[j][i], limiar[j][i], beta, qtdEntrada, funcao)
            } else {
                // console.log('Neurônio (' + i + ')')
                // console.log(vetorQtdCamadas[j-1])
                camada[i] = calcularU(aux, vetorPesos[j][i], limiar[j][i], beta, vetorQtdCamadas[j - 1], funcao)

            }
        }
    }

    // console.log(camada)
    return camada

}

const multiCamadasB = (qtdEntrada, vetorQtdCamadas, entradas, vetorPesos, limiar, beta, funcao) => {

    

    var camada = []

    // PRIMEIRA CAMADA
    for (var j = 0; j < vetorQtdCamadas.length; j++) {
        // console.log('|Camada ' + j + '|')
        var aux = camada
        camada = []
        // console.log('novas entradas: ' + aux)
        for (var i = 0; i < vetorQtdCamadas[j]; i++) {
            if(j === 1){
                funcao = 'tangente'
            }else{
                funcao = 'linear'
            }
            

            if (j === 0 && i === 0) {
                // console.log('Neurônio (' + i + ')')
                camada[i] = calcularU(entradas, vetorPesos[j][i], limiar[j][i], beta, qtdEntrada, funcao)
            } else {
                // console.log('Neurônio (' + i + ')')
                // console.log(vetorQtdCamadas[j-1])
                camada[i] = calcularU(aux, vetorPesos[j][i], limiar[j][i], beta, vetorQtdCamadas[j - 1], funcao)

            }
        }
    }

    // console.log(camada)
    return camada

}

function getRandomInt(min, max) {
    var resultado = Math.random() * (max - min) + min;
    return resultado.toFixed(5)
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
    var data = []

    data.push(['X1', 'X2', 'Saída'])

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            data.push([parseFloat(vetor[i]), parseFloat(vetor[j]), parseFloat(camadaSimples(
                2,                                // qtd entradas
                1,                                // qtd camadas
                [vetor[i], vetor[i]],                           // entrada
                [
                    [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)]        //pesos
                ],
                [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)],                  //limiar
                1,                                //beta 
                'logistica'                          //funcao
            ))]
            )
        }

    }

    console.table(data)
    return data
}

const questao2 = () => {

    var vetor = pa()
    var data = []

    data.push(['X1', 'X2', 'Saída'])

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            data.push([parseFloat(vetor[i]), parseFloat(vetor[j]), parseFloat(camadaSimples(
                2,                                // qtd entradas
                1,                                // qtd camadas
                [vetor[i], vetor[i]],                           // entrada
                [
                    [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)]        //pesos
                ],
                [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)],                  //limiar
                1,                                //beta 
                'tangente'                          //funcao
            ))]
            )
        }

    }

    console.table(data)
    return data
}

const questao3 = () => {

    var vetor = pa()
    var data = []

    data.push(['X1', 'X2', 'Saída'])

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            data.push([parseFloat(vetor[i]), parseFloat(vetor[j]), parseFloat(multiCamadas(
                2,                                // qtd entradas
                [3, 2, 1],                        // qtd camadas
                [vetor[i], vetor[j]],                           // entrada
                [
                    [[getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)]],           //pesos primeira camada
                    [[getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)]],   //pesos segunda camada 
                    [[getRandomInt(0, 5), getRandomInt(0, 5)]]                    //pesos camada saída
                ],
                [
                    [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)],                    //limiar primeira camada
                    [getRandomInt(0, 5), getRandomInt(0, 5)],               //limiar segunda camada
                    [getRandomInt(0, 5)]                          //limiar camada saída
                ],
                1,                                //beta 
                'logistica'                          //funcao
            ))]
            )
        }

    }

    console.table(data)
    return data
}

const questao4 = () => {


    var vetor = pa()
    var data = []

    data.push(['X1', 'X2', 'Saída'])

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            data.push([parseFloat(vetor[i]), parseFloat(vetor[j]), parseFloat(multiCamadas(
                2,                                // qtd entradas
                [3, 10, 1],                        // qtd camadas
                [vetor[i], vetor[j]],                           // entrada
                [
                    [[getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)]],           //pesos primeira camada
                    [[getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)]],   //pesos segunda camada 
                    [[getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)]]                    //pesos camada saída
                ],
                [
                    [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)],                    //limiar primeira camada
                    [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)],               //limiar segunda camada
                    [getRandomInt(0, 5)]                          //limiar camada saída
                ],
                1,                                //beta 
                'logistica'                          //funcao
            ))]
            )
        }

    }

    console.table(data)
    return data
}


const questao5 = () => {

    var vetor = pa()
    var data = []

    data.push(['X1', 'X2', 'Saída'])

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            data.push([parseFloat(vetor[i]), parseFloat(vetor[j]), parseFloat(multiCamadas(
                2,                                // qtd entradas
                [2, 2, 1],                        // qtd camadas
                [vetor[i], vetor[j]],                           // entrada
                [
                    [[getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)]],           //pesos primeira camada
                    [[getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)]],   //pesos segunda camada 
                    [[getRandomInt(0, 5), getRandomInt(0, 5)]]                    //pesos camada saída
                ],
                [
                    [getRandomInt(0, 5), getRandomInt(0, 5)],                    //limiar primeira camada
                    [getRandomInt(0, 5), getRandomInt(0, 5)],               //limiar segunda camada
                    [getRandomInt(0, 5)]                          //limiar camada saída
                ],
                1,                                //beta 
                'logistica'                          //funcao
            ))]
            )
        }

    }

    console.table(data)
    return data
}

const questao6 = () => {

    var vetor = pa()
    var data = []

    data.push(['X1', 'X2', 'Saída'])

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            data.push([parseFloat(vetor[i]), parseFloat(vetor[j]), parseFloat(multiCamadas(
                2,                                // qtd entradas
                [10, 5, 1],                        // qtd camadas
                [vetor[i], vetor[j]],                           // entrada
                [
                    [[getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5)]],           //pesos primeira camada
                    [[getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)], [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)]],   //pesos segunda camada 
                    [[getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)]]                    //pesos camada saída
                ],
                [
                    [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)],                    //limiar primeira camada
                    [getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5), getRandomInt(0, 5)],               //limiar segunda camada
                    [getRandomInt(0, 5)]                          //limiar camada saída
                ],
                1,                                //beta 
                'logistica'                          //funcao
            ))]
            )
        }

    }

    console.table(data)
    return data
}

const praticoB = () => {
    var vetor =
        [
            -0.6508,
            -1.4492,
            2.0850,
            0.2626,
            0.6418,
            0.2569,
            1.1155,
            0.0914,
            0.0121,
            -0.0429,
            0.4340,
            0.2735,
            0.4839,
            0.4089,
            1.4391,
            -0.9115,
            0.3654,
            0.2144,
            0.2013,
            0.6483,
            -0.1147,
            -0.7970,
            -1.0625,
            0.5307,
            -1.2200,
            0.3957,
            -0.1013,
            2.4482,
            2.0149,
            0.2012
        ]
    var data = []

    data.push(['X1', 'Saída'])

    for (var i = 0; i < 30; i++) {

        data.push([parseFloat(vetor[i]), parseFloat(multiCamadasB(
            1,                                // qtd entradas
            [1, 3, 1],                        // qtd camadas
            [vetor[i]],                           // entrada
            [
                [[1]],
                [[0.962803], [1.88752], [2.51054]], //pesos
                [[-1.9956, 1.62524, 0.88538]]
                        
            ],
            [
                [0],
                [3.38888, 11.0847, 1.55095],
                [-0.4186]
            ],                  //limiar
            1,                                //beta 
            'logistica'                          //funcao
        ))]
        )


    }

    console.table(data)
    return data
}

// console.log(pa())
// questao1()
// questao2()
// questao3()
// questao4()
// questao5()
praticoB()













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