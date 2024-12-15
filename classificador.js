// Variáveis
let nomeHeroi = "Felipão Guerreiro"
let xpHeroi = 9500
let rankHeroi;

// Estrutura de Decisão
if(xpHeroi <= 1001 && xpHeroi <= 2000){
    rankHeroi = "Bronze"
}else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    rankHeroi = "Prata"
}else if(xpHeroi >= 5001 && xpHeroi <= 7000){
    rankHeroi = "Ouro"
}else if(xpHeroi >= 7001 && xpHeroi <= 8000){
    rankHeroi = "Platina"
}else if(xpHeroi >= 8001 && xpHeroi <= 9001){
    rankHeroi = "Ascendente"
}else if(xpHeroi >= 9001 && xpHeroi <= 10000){
    rankHeroi = "Imortal"
}else if(xpHeroi >= 10001){
    rankHeroi = "Radiante"
}else{
    rankHeroi = "Ferro"
}

// Sáidas
console.log("O Herói de nome " + nomeHeroi + " Está no nível " + rankHeroi)