// Variáveis
let nomeHeroi = "Felipão Guerreiro"
let xpHeroi = 100010
let rankHeroi;

// Estrutura de Decisão
switch(true){
    case xpHeroi >= 0 && xpHeroi <= 1000:
    rankHeroi = "Ferro";
    break;

    case xpHeroi >= 1001 && xpHeroi <= 2000:
    rankHeroi = "Bronze";
    break;

    case xpHeroi >= 2001 && xpHeroi <= 5000:
    rankHeroi = "Prata";
    break;

    case xpHeroi >= 5001 && xpHeroi <= 7000:
    rankHeroi = "Ouro";
    break;

    case xpHeroi >= 7001 && xpHeroi <= 8000:
    rankHeroi = "Platina";
    break;

    case xpHeroi >= 9001 && xpHeroi <= 10000:
    rankHeroi = "Imortal";
    break;

    case xpHeroi >= 10001:
    rankHeroi = "Radiante";
    break;

    default:
    rankHeroi = "Erro: Não é possivel classificar seu Ranking de Herói";
}

// Sáidas
console.log("O Herói de nome " + nomeHeroi + " Está no nível " + rankHeroi)