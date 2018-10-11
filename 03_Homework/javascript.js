'use strict';
let money,time;
function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
     
    while(isNaN(money) || money =="" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }

}
start(); 




let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let answer = prompt("Введите обязательную статью расходов в этом месяце", ""),
        answer1 = prompt("Во сколько обойдется?", "");
    if ( (typeof(answer))=== 'string' && (typeof(answer)) != null && (typeof(answer1)) != null
        && answer != '' && answer1 != '' && answer.length<50) {
        console.log("done");
        appData.expenses[answer] = answer1;    
    } else { i--;

    }    
}

function detectDayBudget(budget){
    appData.detectDayBudget = (money/30).toFixed();
    alert("Бюджет на один день  " +appData.money);
}
detectDayBudget(appData.money);
function detectLevel(moneyDay){
    if(moneyDay < 100){
        console.log('минимальный уровень достатка');
    } else if (moneyDay > 100 && moneyDay <2000){
        console.log('средний уровень достатка');
    } else if (moneyDay > 2000) {
        console.log('высокий уровень достатка');
    } else {
        console.log('произошла ошибка');
    }
}
detectLevel(appData.moneyDay);

function chooseOptExpenses(nonBindingExpenses) {
    for( let i = 0; i < 3; i++) {
        let answer3 = + prompt('статья необязательных расходов', '');
        appData.optionalExpenses[i] = answer3;        
    }
    console.log(appData.optionalExpenses);
}
chooseOptExpenses();



console.log(money);
console.log(time);    
console.log(appData.expenses);
    

alert(money/30);