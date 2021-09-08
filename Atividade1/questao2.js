// QUESTÃO 2 - ATIVIDADE PRÁTICA

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

// descobrir razão
// an = a1 + (n-1)*r
// 3 = -3 + (50-1)*r

const pa = () => {
    var razao = 6 / 49
    var termos = []


    for (var i = 1; i < 51; i++) {
        var valor = -3 + ((i - 1) * razao)
        // console.log(valor.toFixed(1))
        termos[i - 1] = valor
    }
    return termos
}


const questaoA = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.0
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = logistica((vetor[i] * 0.1) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
0.42556
0.42855
0.43155
0.43456
0.43757
0.44059
0.44361
0.44663
0.44966
0.45269
0.45573
0.45877
0.46181
0.46485
0.46790
0.47095
0.47400
0.47706
0.48011
0.48317
0.48623
0.48929
0.49235
0.49541
0.49847
0.50153
0.50459
0.50765
0.51071
0.51377
0.51683
0.51989
0.52294
0.52600
0.52905
0.53210
0.53515
0.53819
0.54123
0.54427
0.54731
0.55034
0.55337
0.55639
0.55941
0.56243
0.56544
0.56845
0.57145
0.57444
        */
    }
}

const questaoB = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.0
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = logistica((vetor[i] * 0.5) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
0.18243
0.19174
0.20140
0.21143
0.22182
0.23257
0.24367
0.25513
0.26694
0.27909
0.29157
0.30438
0.31750
0.33091
0.34460
0.35856
0.37276
0.38718
0.40180
0.41660
0.43155
0.44663
0.46181
0.47706
0.49235
0.50765
0.52294
0.53819
0.55337
0.56845
0.58340
0.59820
0.61282
0.62724
0.64144
0.65540
0.66909
0.68250
0.69562
0.70843
0.72091
0.73306
0.74487
0.75633
0.76743
0.77818
0.78857
0.79860
0.80826
0.81757
        */
    }
}

const questaoC = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.0
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = logistica((vetor[i] * 0.9) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
0.06297
0.06980
0.07730
0.08554
0.09456
0.10443
0.11519
0.12691
0.13963
0.15340
0.16827
0.18426
0.20140
0.21971
0.23919
0.25981
0.28156
0.30438
0.32820
0.35294
0.37850
0.40475
0.43155
0.45877
0.48623
0.51377
0.54123
0.56845
0.59525
0.62150
0.64706
0.67180
0.69562
0.71844
0.74019
0.76081
0.78029
0.79860
0.81574
0.83173
0.84660
0.86037
0.87309
0.88481
0.89557
0.90544
0.91446
0.92270
0.93020
0.93703
        */
    }
}

const questaoD = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.0
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = tangente((vetor[i] * 0.1) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
-0.14889
-0.14289
-0.13689
-0.13088
-0.12486
-0.11882
-0.11278
-0.10673
-0.10068
-0.09461
-0.08854
-0.08247
-0.07638
-0.07029
-0.06420
-0.05810
-0.05199
-0.04589
-0.03977
-0.03366
-0.02754
-0.02143
-0.01530
-0.00918
-0.00306
0.00306
0.00918
0.01530
0.02143
0.02754
0.03366
0.03977
0.04589
0.05199
0.05810
0.06420
0.07029
0.07638
0.08247
0.08854
0.09461
0.10068
0.10673
0.11278
0.11882
0.12486
0.13088
0.13689
0.14289
0.14889
        */
    }
}

const questaoE = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.0
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = tangente((vetor[i] * 0.5) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
-0.63515
-0.61653
-0.59719
-0.57714
-0.55636
-0.53487
-0.51266
-0.48974
-0.46612
-0.44182
-0.41685
-0.39124
-0.36501
-0.33818
-0.31080
-0.28289
-0.25449
-0.22564
-0.19639
-0.16679
-0.13689
-0.10673
-0.07638
-0.04589
-0.01530
0.01530
0.04589
0.07638
0.10673
0.13689
0.16679
0.19639
0.22564
0.25449
0.28289
0.31080
0.33818
0.36501
0.39124
0.41685
0.44182
0.46612
0.48974
0.51266
0.53487
0.55636
0.57714
0.59719
0.61653
0.63515
        */
    }
}

const questaoF = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.0
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = tangente((vetor[i] * 0.9) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
-0.87405
-0.86040
-0.84540
-0.82893
-0.81088
-0.79115
-0.76962
-0.74618
-0.72074
-0.69320
-0.66347
-0.63148
-0.59719
-0.56058
-0.52163
-0.48037
-0.43688
-0.39124
-0.34360
-0.29411
-0.24300
-0.19050
-0.13689
-0.08247
-0.02754
0.02754
0.08247
0.13689
0.19050
0.24300
0.29411
0.34360
0.39124
0.43688
0.48037
0.52163
0.56058
0.59719
0.63148
0.66347
0.69320
0.72074
0.74618
0.76962
0.79115
0.81088
0.82893
0.84540
0.86040
0.87405
        */
    }
}

const questaoG = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.0
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = logistica(((vetor[i] * 0.1) + (vetor[i] * 0.7)) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
0.08317
0.09095
0.09938
0.10850
0.11835
0.12896
0.14037
0.15261
0.16571
0.17970
0.19460
0.21041
0.22715
0.24480
0.26336
0.28280
0.30308
0.32417
0.34599
0.36847
0.39155
0.41512
0.43908
0.46333
0.48776
0.51224
0.53667
0.56092
0.58488
0.60845
0.63153
0.65401
0.67583
0.69692
0.71720
0.73664
0.75520
0.77285
0.78959
0.80540
0.82030
0.83429
0.84739
0.85963
0.87104
0.88165
0.89150
0.90062
0.90905
0.91683
        */
    }
}

const questaoH = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.0
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = logistica(((vetor[i] * 0.5) + (vetor[i] * 0.5)) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
0.04743
0.05327
0.05980
0.06707
0.07515
0.08411
0.09404
0.10500
0.11708
0.13034
0.14486
0.16070
0.17790
0.19652
0.21658
0.23807
0.26099
0.28529
0.31090
0.33772
0.36563
0.39447
0.42406
0.45421
0.48470
0.51530
0.54579
0.57594
0.60553
0.63437
0.66228
0.68910
0.71471
0.73901
0.76193
0.78342
0.80348
0.82210
0.83930
0.85514
0.86966
0.88292
0.89500
0.90596
0.91589
0.92485
0.93293
0.94020
0.94673
0.95257
        */
    }
}

const questaoI = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.0
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = logistica(((vetor[i] * 0.7) + (vetor[i] * 0.1)) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
0.08317
0.09095
0.09938
0.10850
0.11835
0.12896
0.14037
0.15261
0.16571
0.17970
0.19460
0.21041
0.22715
0.24480
0.26336
0.28280
0.30308
0.32417
0.34599
0.36847
0.39155
0.41512
0.43908
0.46333
0.48776
0.51224
0.53667
0.56092
0.58488
0.60845
0.63153
0.65401
0.67583
0.69692
0.71720
0.73664
0.75520
0.77285
0.78959
0.80540
0.82030
0.83429
0.84739
0.85963
0.87104
0.88165
0.89150
0.90062
0.90905
0.91683
        */
    }
}

const questaoJ = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.25
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = logistica(((vetor[i] * 0.1) + (vetor[i] * 0.7)) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
0.06599
0.07229
0.07914
0.08658
0.09465
0.10338
0.11282
0.12300
0.13397
0.14575
0.15837
0.17187
0.18626
0.20157
0.21779
0.23494
0.25300
0.27196
0.29178
0.31243
0.33385
0.35598
0.37874
0.40205
0.42581
0.44991
0.47426
0.49872
0.52320
0.54756
0.57170
0.59550
0.61886
0.64168
0.66388
0.68537
0.70610
0.72601
0.74506
0.76322
0.78046
0.79679
0.81219
0.82668
0.84027
0.85298
0.86484
0.87589
0.88615
0.89567
        */
    }
}

const questaoK = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.25
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = logistica(((vetor[i] * 0.5) + (vetor[i] * 0.5)) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
0.03733
0.04199
0.04720
0.05302
0.05951
0.06675
0.07479
0.08372
0.09360
0.10452
0.11655
0.12976
0.14423
0.16001
0.17716
0.19572
0.21571
0.23715
0.26001
0.28425
0.30981
0.33658
0.36445
0.39325
0.42282
0.45295
0.48342
0.51403
0.54452
0.57469
0.60431
0.63319
0.66114
0.68801
0.71367
0.73802
0.76100
0.78255
0.80267
0.82135
0.83862
0.85451
0.86908
0.88239
0.89452
0.90553
0.91549
0.92450
0.93261
0.93991
        */
    }
}

const questaoL = () => {
    var vetor = pa()
    var vetorGrafico = []
    var limiar = 0.25
    var beta = 1

    for (var i = 0; i < 50; i++) {
        vetorGrafico[i] = logistica(((vetor[i] * 0.7) + (vetor[i] * 0.1)) - limiar, beta)
        console.log(vetorGrafico[i])
    }
    // tem que fazer o plot no gráfico
    {
        /*
0.06599
0.07229
0.07914
0.08658
0.09465
0.10338
0.11282
0.12300
0.13397
0.14575
0.15837
0.17187
0.18626
0.20157
0.21779
0.23494
0.25300
0.27196
0.29178
0.31243
0.33385
0.35598
0.37874
0.40205
0.42581
0.44991
0.47426
0.49872
0.52320
0.54756
0.57170
0.59550
0.61886
0.64168
0.66388
0.68537
0.70610
0.72601
0.74506
0.76322
0.78046
0.79679
0.81219
0.82668
0.84027
0.85298
0.86484
0.87589
0.88615
0.89567
        */
    }
}

// questaoA()
// questaoB()
// questaoC()
// questaoD()
// questaoE()
// questaoF()
// questaoG()
// questaoH()
// questaoI()
// questaoJ()
// questaoK()
// questaoL()
pa()