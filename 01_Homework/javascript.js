'use strict';
let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

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
    if ( (typeof(a))=== 'string' && (typeof(answer)) != null && (typeof(answer1)) != null
        && answer != '' && answer1 != '' && answer.length<50) {
        console.log("done");
        appData.expenses[answer] = answer1;    
    } else {

    }    

  
};

console.log(money);
console.log(time);    
console.log(appData.expenses);
    

alert(money/30);