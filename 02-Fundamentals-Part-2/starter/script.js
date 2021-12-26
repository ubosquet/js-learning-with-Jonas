


let rep1 = 1;
while (rep1 <= 5){
    console.log(`Rep again is : ${rep1}`)
    rep1++;
}

let dice = Math.trunc(Math.random() * 6) +1;

while (dice !==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if (dice === 6) console.log(`Loop is about to end ${dice}`)
}
/*

const ulrichArray = [
    'Rich',
    'Bosquet',
    2022-1990,
    'Programmer',
    ['Maite', 'Lyon', 'Ethan'],
    true
] 

for (let i=0; i< ulrichArray.length; i++) {
    console.log(ulrichArray[i])
}

for ( let rep = 1; rep <= 5; rep++){
    console.log(`Rep is equal L ${rep}`)
    
}

const Mark = {
    Fullname: 'Mark Miller',
    Mass: 78,
    Height: 1.69,
    calcBMI: function (){
        this.bmi = this.Mass / this.Height ** 2;
        return this.bmi;
    }

};

const John = {
    Fullname: 'John Smith',
    Mass: 92,
    Height: 1.95,
    calcBMI: function (){
        this.bmi = this.Mass / this.Height ** 2;
        return this.bmi;
    }

};

 Mark.calcBMI();
 John.calcBMI();
//console.log(`Mark BMI is : ${Mark.bmi}`)
if (John.bmi > Mark.bmi){
    console.log(`${John.Fullname}'s BMI ${John.bmi} is higher than ${Mark.Fullname}'s ${Mark.bmi}!"`)

}
else {
    console.log(`${Mark.Fullname}'s BMI ${Mark.bmi} is higher than ${John.Fullname}'s ${John.bmi}!"`)
}



/*
const calcTip = function (bill){

return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

let arrayBills = [125, 255, 44]
let arrayTips = [calcTip(arrayBills[0]), calcTip(arrayBills[1]), calcTip(arrayBills[2])];

const totalBill = [arrayBills[0] + arrayTips[0], arrayBills[1] + arrayTips[1], arrayBills[2] + arrayTips[2]]
console.log(`Bills : ${arrayBills}, Tips : ${arrayTips} 
Total Bill is : ${totalBill}`)

const calcAverage = (Score1, Score2, Score3) =>{
    return (Score1 + Score2 + Score3) / 3
    
}
const avgDolphins = calcAverage(44,23,71);
console.log(`Dolphins average Score is : ${avgDolphins}`)

const avgKoalas = calcAverage(255,108,100)
console.log(`Koalas average Score is : ${avgKoalas}`)


function checkWinner(avgDolphins, avgKoalas ){
      
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins Win (${avgDolphins} vs. ${avgKoalas})`)
    } 
    else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas Win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log(`It's a Draw. None of the team had 2X average score of the other. 
        Dolphins ${avgDolphins}, Koalas ${avgKoalas}.`) 
    }
}
checkWinner(avgDolphins, avgKoalas);
*/

