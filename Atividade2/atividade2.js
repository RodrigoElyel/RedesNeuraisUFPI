// QUESTÃO 1 - ATIVIDADE PRÁTICA


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

const calcularU = (entradas, pesos, limiar, beta, qtdEntrada, funcao) => {

    var arm = 0

    for (var i = 0; i < qtdEntrada; i++) {
        arm += (entradas[i] * pesos[i])
    }

    var u = arm - limiar

    u = u.toFixed(2)
    if (funcao === 'degrau') {
        var resultado = degrau(u)
    } else if (funcao === 'tangente') {
        var resultado = tangente(u, beta)
    }else if(funcao === 'linear'){
        var resultado = u
    }

    console.log("-> u = " + u)
    console.log("-> g(u) = " + resultado)
    return resultado
}

const questao6 = (entrada) => {
    var pesoA = [1, 1]
    var pesoB = [1, 1]
    var pesoC = [1, 1]
    var pesoY = [-2, 1, 0.5]
    var limiarA = 1.2
    var limiarB = 0.4
    var limiarC = 2.1
    var limiarY = 0.5


    console.log('RESULTADOS DA ENTRADA ' + '[' + entrada[0] + ',' + entrada[1] + ']')
    console.log('Neurônio A:')
    var neuronioA = calcularU(entrada, pesoA, limiarA, 0, 2, 'degrau')
    console.log('Neurônio B:')
    var neuronioB = calcularU(entrada, pesoB, limiarB, 0, 2, 'degrau')
    console.log('Neurônio C:')
    var neuronioC = calcularU(entrada, pesoC, limiarC, 0, 2, 'degrau')
    console.log('Neurônio Y:')
    var neuronioY = calcularU([neuronioA, neuronioB, neuronioC], pesoY, limiarY, 0, 3, 'degrau')
}

const questao11 = (entrada) => {
   
    var peso = [1, 1, 1]
    var limiar = 0.1

    console.log('RESULTADOS DA ENTRADA ' + '[' + entrada[0] + ',' + entrada[1] + ',' + entrada[2]+']' + ' e LIMIAR: '+limiar)
    var neuronioC = calcularU(entrada, peso, limiar, 0, 3, 'degrau')
}

const questao12 = (entrada) => {
    var pesoA = [1, 1]
    var pesoB = [1, 1]
    var pesoY = [1, 1]
    var limiarA = 2
    var limiarB = 2
    var limiarY = 2



    console.log('RESULTADOS DA ENTRADA ' + '[' + entrada[0] + ',' + entrada[1] + ']' + ' e LIMIAR A: '+limiarA+ ' LIMIAR B: '+limiarB+ ' LIMIAR Y: '+limiarY)
    // console.log('Neurônio A:')
    var neuronioA = calcularU(entrada, pesoA, limiarA, 0, 2, 'degrau')
    // console.log('Neurônio B:')
    var neuronioB = calcularU(entrada, pesoB, limiarB, 0, 2, 'degrau')
    console.log('Neurônio Y:')
    var neuronioY = calcularU([neuronioA, neuronioB], pesoY, limiarY, 0, 2, 'degrau')
    console.log(neuronioY)

}

// const questao13 = (entrada) => {
//     var pesoA = [1, 1]
//     var pesoB = [1, 1]
//     var pesoY = [1, 1]
//     var limiarA = -1
//     var limiarB = -1
//     var limiarY = 1



//     console.log('RESULTADOS DA ENTRADA ' + '[' + entrada[0] + ',' + entrada[1] + ']' + ' e LIMIAR A: '+limiarA+ ' LIMIAR B: '+limiarB+ ' LIMIAR Y: '+limiarY)
//     // console.log('Neurônio A:')
//     var neuronioA = calcularU(entrada, pesoA, limiarA, 0, 2, 'degrau')
//     // console.log('Neurônio B:')
//     var neuronioB = calcularU(entrada, pesoB, limiarB, 0, 2, 'degrau')
//     console.log('Neurônio Y:')
//     var neuronioY = calcularU([neuronioA, neuronioB], pesoY, limiarY, 0, 2, 'degrau')
//     console.log(neuronioY)

// }

const questao14 = (entrada) => {
    var pesoA = [1, 1]
    var pesoB = [1, 1]
    var pesoC = [1, 1]
    var pesoY = [1, 1, 1]
    var limiarA = 0.9
    var limiarB = 0.9
    var limiarC = 0.9
    var limiarY = 0.9


    console.log('RESULTADOS DA ENTRADA ' + '[' + entrada[0] + ',' + entrada[1] + ']'+ ' e LIMIAR A: '+limiarA+ ' LIMIAR B: '+limiarB+ ' LIMIAR C: '+limiarC+ ' LIMIAR Y: '+limiarY)
    // console.log('Neurônio A:')
    var neuronioA = calcularU(entrada, pesoA, limiarA, 0, 2, 'degrau')
    // console.log('Neurônio B:')
    var neuronioB = calcularU(entrada, pesoB, limiarB, 0, 2, 'degrau')
    // console.log('Neurônio C:')
    var neuronioC = calcularU(entrada, pesoC, limiarC, 0, 2, 'degrau')
    console.log('Neurônio Y:')
    var neuronioY = calcularU([neuronioA, neuronioB, neuronioC], pesoY, limiarY, 0, 3, 'degrau')
    console.log(neuronioY)
}



const questao15 = (entrada) => {
   
    var peso = [0.6, 0.64]
    var limiar = 0.86

    console.log('RESULTADOS DA ENTRADA ' + '[' + entrada[0] + ',' + entrada[1] + ']')
    var neuronioY = calcularU(entrada, peso, limiar, 0, 2, 'linear')
    console.log(neuronioY)
}

const questao16 = (entrada) => {
    var pesoA = [0.6, 0.7]
    var pesoB = [0.4, 0.2]
    var pesoC = [0.1, 0.3]
    var pesoY = [0.6, 0.5, 0.4]
    var limiarA = 0.1
    var limiarB = 0.8
    var limiarC = 0.5
    var limiarY = 0.2


    console.log('RESULTADOS DA ENTRADA ' + '[' + entrada[0] + ',' + entrada[1] + ']')
    console.log('Neurônio A:')
    var neuronioA = calcularU(entrada, pesoA, limiarA, 0, 2, 'linear')
    console.log('Neurônio B:')
    var neuronioB = calcularU(entrada, pesoB, limiarB, 0, 2, 'linear')
    console.log('Neurônio C:')
    var neuronioC = calcularU(entrada, pesoC, limiarC, 0, 2, 'linear')
    console.log('Neurônio Y:')
    var neuronioY = calcularU([neuronioA, neuronioB, neuronioC], pesoY, limiarY, 0, 3, 'linear')

}


questao6([0, 0])
// questao6([0, 1])
// questao6([1, 0])
// questao6([1, 1])
// questao11([0, 0, 0])
// questao11([0, 0, 1])
// questao11([0, 1, 0])
// questao11([0, 1, 1])
// questao11([1, 0, 0])
// questao11([1, 0, 1])
// questao11([1, 1, 0])
// questao11([1, 1, 1])
// questao12([0, 0])
// questao12([0, 1])
// questao12([1, 0])
// questao12([1, 1])
// questao14([0, 0])
// questao14([0, 1])
// questao14([1, 0])
// questao14([1, 1])
// questao15([0, 0])
// questao15([0, 0.25])
// questao15([0.25, 0.4])
// questao15([0.90, 0.30])
// questao15([0.55, 0.30])
// questao15([1, 1])
// questao15([0.14, 0.29])
// questao15([0.92, 0.19])
// questao15([0.26, 0.39])
// questao15([0.19, 0.78])
// questao16([0, 0])
// questao16([0, 0.25])
// questao16([0.25, 0.4])
// questao16([0.90, 0.30])
// questao16([0.55, 0.30])
// questao16([1, 1])
// questao16([0.14, 0.29])
// questao16([0.92, 0.19])
// questao16([0.26, 0.39])
// questao16([0.19, 0.78])




