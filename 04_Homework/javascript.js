'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let answer = prompt("Введите обязательную статью расходов в этом месяце", ""),
                answer1 = prompt("Во сколько обойдется?", "");
            if ((typeof (answer)) === 'string' && (typeof (answer)) != null && (typeof (answer1)) != null &&
                answer != '' && answer1 != '' && answer.length < 50) {
                console.log("done");
                appData.expenses[answer] = answer1;
            } else {
                i--;
            }

        }
    },
    detectDayBudget: function () {
        appData.detectDayBudget = (money / 30).toFixed();
        alert("Бюджет на один день  " + appData.money);
    },
    detectLevel: function (moneyDay) {
        if (moneyDay < 100) {
            console.log('минимальный уровень достатка');
        } else if (moneyDay > 100 && moneyDay < 2000) {
            console.log('средний уровень достатка');
        } else if (moneyDay > 2000) {
            console.log('высокий уровень достатка');
        } else {
            console.log('произошла ошибка');
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let answer3 = +prompt('статья необязательных расходов', '');
            appData.optionalExpenses[i] = answer3;
        }
    },
    chooseIncome: function() {            
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');            

        while(typeof(items) != 'string' || items == null || items == '' | items == 'underfind') {
            alert('Введите строку');
            items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');            
        }
        
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
        
        document.write("Способы доп. заработка: <br>");
        appData.income.forEach(function(item, i) {
            document.write( (i+1) + '. ' + item.charAt(0).toUpperCase() + 
                            item.slice(1) + '<br>');
        });        
    }
};



console.log('Наша программа включает в себя данные: ');
for( let key in appData) {
    if (typeof(appData[key]) != 'function') {
        console.log( key + ':' + appData[key]);
    }
};
