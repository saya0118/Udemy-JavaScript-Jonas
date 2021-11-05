//Challenge #1
const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;

const aveDolphins = calcAverage(44,23,71);
const aveKoalas = calcAverage(65,54,49);
function checkWinner(aveDolphins, aveKoalas) {
    if(aveDolphins>=aveKoalas*2){
        console.log(`Dolphins win (${aveDolphins} vs. ${aveKoalas})`);
    }if(aveKoalas>=aveDolphins*2){
        console.log(`Koalas win (${aveDolphins}) vs. ${aveKoalas}`);
    }else{
        console.log("Neither win");
    }
    return checkWinner;
}

checkWinner(aveDolphins, aveKoalas);


