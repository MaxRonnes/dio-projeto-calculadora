const entrada = require('prompt-sync')({sigint: true});

var vitorias = entrada("Informe a quantidade de virórias: ")
var derrotas = entrada("Informe a quantidade de derrotas: ")

//conversao de dados que entram como strings para Inteiros caso o usuário queira fazer
// a soma e não a subtraçao
var vitorias = parseInt(vitorias)
var derrotas = parseInt(derrotas)

function calculoRank(vitorias, derrotas){
    return saldoDeVitoria = vitorias - derrotas

}

if(calculoRank(vitorias,derrotas) <= 10){
    console.log("Jogador tem saldo de vitória de " +saldoDeVitoria + " esta no Rank Ferro")
}else if(calculoRank(vitorias,derrotas) >=11 && calculoRank(vitorias,derrotas) <=10){
    console.log("Jogador tem saldo de vitória de " +saldoDeVitoria + " esta no Bronze")
}else if(calculoRank(vitorias,derrotas) >=21 && calculoRank(vitorias,derrotas) <=50){
    console.log("Jogador tem saldo de vitória de " +saldoDeVitoria + " esta no Prata")
}else if(calculoRank(vitorias,derrotas) >=51 && calculoRank(vitorias,derrotas) <=80){
    console.log("Jogador tem saldo de vitória de " +saldoDeVitoria + " esta no Ouro")
}else if(calculoRank(vitorias,derrotas) >=81 && calculoRank(vitorias,derrotas) <=90){
    console.log("Jogador tem saldo de vitória de " +saldoDeVitoria + " esta no Diamante")
}else if(calculoRank(vitorias,derrotas) >=91 && calculoRank(vitorias,derrotas) <=100){
    console.log("Jogador tem saldo de vitória de " +saldoDeVitoria + " esta no Ledário")
}else if(calculoRank(vitorias,derrotas) >=101){
    console.log("Jogador tem saldo de vitória de " +saldoDeVitoria + " esta no Imortal")
}

