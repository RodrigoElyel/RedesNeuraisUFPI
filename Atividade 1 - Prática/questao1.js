// QUESTÃO 1 - ATIVIDADE PRÁTICA


const degrau = (u) => {
    if (u < 0) {
        return 0
    } else {
        return 1
    }
}

const tangente = (u, b) => {

    var g = ((1 - Math.exp((-b)*u)) / (1 + Math.exp((-b)*u)))
    return(g.toFixed(5))
}

const questao4 = () => {
    var entradas = [0, 1]
    var pesos = [1, 1]
    var limiar = 1.1
    


    var u = ((entradas[0] * pesos[0]) + (entradas[1] * pesos[1])) - limiar
    u = u.toFixed(2)


    var resultado = degrau(u)
    console.log("resultado questão 4:")
    console.log("-> u = "+u)
    console.log("-> g(u) = "+resultado)


}

const questao5 = () => {
    var entradas = [0, 1]
    var pesos = [0.2, 0.8]
    var limiar = 0.1
    


    var u = ((entradas[0] * pesos[0]) + (entradas[1] * pesos[1])) - limiar
    u = u.toFixed(2)


    var resultado = degrau(u)
    console.log("resultado questão 5:")
    console.log("-> u = "+u)
    console.log("-> g(u) = "+resultado)


}

const questao7= () => {
    var entradas = [0.3, 0.7]
    var pesos = [0.4, 0.5]
    var limiar = 0.2
    var beta = 1


    var u = ((entradas[0] * pesos[0]) + (entradas[1] * pesos[1])) - limiar
    u = u.toFixed(2)

    var resultado = tangente(u, beta)
    console.log("resultado questão 7:")
    console.log("-> u = "+u)
    console.log("-> g(u) = "+resultado)


}

const questao8= () => {
    var entradas = [0.3, 0.7]
    var pesos = [0.6, 0.7]
    var limiar = 0.3
    var beta = 1


    var u = ((entradas[0] * pesos[0]) + (entradas[1] * pesos[1])) - limiar
    u = u.toFixed(2)

    var resultado = tangente(u, beta)
    console.log("resultado questão 8:")
    console.log("-> u = "+u)
    console.log("-> g(u) = "+resultado)


}

const questao9= () => {
    var entradas = [0.3, 0.7]
    var pesos = [0.8, 0.3]
    var limiar = 0.4
    var beta = 1


    var u = ((entradas[0] * pesos[0]) + (entradas[1] * pesos[1])) - limiar
    u = u.toFixed(2)

    var resultado = tangente(u, beta)
    console.log("resultado questão 9:")
    console.log("-> u = "+u)
    console.log("-> g(u) = "+resultado)


}

const questao10= () => {
    var entradas = [0.26, 0.35, 0.05]
    var pesos = [0.6, 0.2, 0.7]
    var limiar = -0.7
    var beta = 1

    var u = ((entradas[0] * pesos[0]) + (entradas[1] * pesos[1]) + (entradas[2] * pesos[2])) - limiar
    u = u.toFixed(2)

    var resultado = tangente(u, beta)
    console.log("resultado questão 10:")
    console.log("-> u = "+u)
    console.log("-> g(u) = "+resultado)


}

const questao11= () => {
    var entradas = [0.26, 0.35, 0.05]
    var pesos = [0.7, 0.2, 0.8]
    var limiar = -0.3
    var beta = 1


    var u = ((entradas[0] * pesos[0]) + (entradas[1] * pesos[1]) + (entradas[2] * pesos[2])) - limiar
    u = u.toFixed(2)

    var resultado = tangente(u, beta)
    console.log("resultado questão 11:")
    console.log("-> u = "+u)
    console.log("-> g(u) = "+resultado)


}

const questao12= () => {
    var entradas = [0.74, 0.53]
    var pesos = [0.8, 0.5]
    var limiar = 0.1
    var beta = 1


    var u = ((entradas[0] * pesos[0]) + (entradas[1] * pesos[1])) - limiar
    u = u.toFixed(2)

    var resultado = tangente(u, beta)
    console.log("resultado questão 12:")
    console.log("-> u = "+u)
    console.log("-> g(u) = "+resultado)

}

questao4()
questao5()
questao7()
questao8()
questao9()
questao10()
questao11()
questao12()
