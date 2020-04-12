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
    savings : false
};

function chooseExpenses () {
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
}

chooseExpenses();

//  Функция расчета ежедневного бюджета. Использовал метод Math.round для округления вместо toFixed()
 function detectDayBudget() {
    appData.moneyPerDay = Math.round(appData.budget / 30);
    alert("Ежедневный бюджет на день составдяет: " + appData.moneyPerDay + 'грн');
 }
 detectDayBudget();


// Создал функцию достатка (detectLevel)

function detectLevel() {
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
}
detectLevel();

// Функция пасивного дохда (по депозиту) 

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какая сумма сбережений на депозите?"),
            percent = +prompt("Какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert(": " + appData.monthIncome);
    }
}
checkSavings();

// Функция для определения не объязательных расходов

function chooseOptExpenses() {
    for ( let j=0 ; j <= 3 ; j++) {
        let questionOptExpenses = prompt('Статья необязательных расходов?','');
        appData.ptionalExpenses[j] = questionOptExpenses;
        console.log(questionOptExpenses);
    }
}
chooseOptExpenses();