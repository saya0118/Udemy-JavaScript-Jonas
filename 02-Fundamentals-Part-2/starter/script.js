//Challenge #1------------------------------------------
// const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;

// const aveDolphins = calcAverage(44,23,71);
// const aveKoalas = calcAverage(65,54,49);
// function checkWinner(aveDolphins, aveKoalas) {
//     if(aveDolphins>=aveKoalas*2){
//         console.log(`Dolphins win (${aveDolphins} vs. ${aveKoalas})`);
//     }if(aveKoalas>=aveDolphins*2){
//         console.log(`Koalas win (${aveDolphins}) vs. ${aveKoalas}`);
//     }else{
//         console.log("Neither win");
//     }
//     return checkWinner;
// }

// checkWinner(aveDolphins, aveKoalas);

//Challenge #2------------------------------------------

// function calcTip(bill){
//     if(5<=bill<=300){
//         return bill*0.15;
//     }else{
//         return bill*0.2;
//     }
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips)
// const total = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];
// console.log(total);

//Challenge #3------------------------------------------
const Mark = {
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI :function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}
const John = {
    fullName:'John Smith',
    mass:92,
    height:1.95,
    calcBMI:function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}

Mark.calcBMI();
John.calcBMI();

console.log(Mark.bmi, John.bmi);

if(Mark.bmi>John.bmi){
    console.log(`${Mark.fullName}'s BMI(${Mark.bmi}) is higher than ${John.fullName}'s BMI(${John.bmi})`)
}else if(John.bmi>Mark.bmi){
    console.log(`${John.fullName}'s BMI(${John.bmi}) is higher than ${Mark.fullName}'s BMI(${Mark.bmi})`)
}