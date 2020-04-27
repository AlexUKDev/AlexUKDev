let money, time;

function  start() {
    money = +prompt("Ваш бюджет на месяц?",'');
    while(isNaN(money) || (money == "") || (money == null)) {
        money = +prompt("Ваш бюджет на месяц?",'');
    }
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
}
start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,

    // Функция выявления обязательных расходов у пользователя
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let exp = prompt("Введите обязательную статью расходов в этом месяце", ''), 
                cos = prompt("Во сколько обойдется?", '');
            
            if ( typeof(exp) === 'string' && typeof(exp) != null && typeof(cos) != null &&
            exp != '' && cos != '' && exp.length < 50 ) {
                console.log('Done!');
                appData.expenses[exp] = cos;
            } else {
                console.log('Inserted incorrect value');
                alert('Не верно ввели значение. Будьте внимательней!');
                i--;
            }
            
        }
    },

    //  Функция расчета ежедневного бюджета. Использовал метод Math.round для округления вместо toFixed()
    detectDayBudget: function() {
        appData.moneyPerDay = Math.round(appData.budget / 30);
        alert("Ежедневный бюджет на день составдяет: " + appData.moneyPerDay + 'грн');
    },
    
    // Функция достатка (detectLevel)
    detectLevel: function() {
        if (appData.moneyPerDay < 100 ) {
            console.log('У Вас минимальный уровень достатка');
            alert('Минимальный уровень достатка');
            } else if (appData.moneyPerDay < 300) {
            console.log('Средний уровень достатка');
            alert('Средний уровень достатка');
            } else if (appData.moneyPerDay > 300) {
            console.log('У Вас высокий уровень достатка');
            alert('Позравляем! Высокий уровень достатка');
            } else {
            console.log('Что-то пошло не так, произошла ошибка');
            alert('Что-то пошле не так, произошла ошибка');
            }
    },

    // Функция выявления (проверки наличия) паcсивного или дополнительного дохда у пользователя
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какая сумма сбережений на депозите?"),
                percent = +prompt("Какой процент?");
    
                appData.monthIncome = Math.round(save/100/12*percent);
                alert(" Пассивный ежемесячный доход составлят: " + appData.monthIncome);
        }
    },
    
    // Функция для определения не объязательных расходов
    chooseOptExpenses: function() {
        for ( let j=0 ; j <= 3 ; j++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?','');
            appData.optionalExpenses[j] = questionOptExpenses;
            console.log(questionOptExpenses);
        }
    },
    chooseIncome: function() {
        
            let items = prompt('Что приносит допонительный доход? ( Печерислите через запятую )', '');
            
            if ( typeof(items) != 'string' || typeof(items) == null || typeof(items) == '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
            } else {
                appData.income = items.split(',');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            }
            appData.income.forEach (function (itemmassive, i) {
                alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}





