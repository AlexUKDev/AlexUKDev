
let money = +prompt("Ваш бюджет на месяц?",''),
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
       
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};


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

// Используя цикл WHILE
    // let i = 0;
    // while ( i < 2) {
    //     let exp = prompt("Введите обязательную статью расходов в этом месяце", ''), 
    //         cos = prompt("Во сколько обойдется?", '');
        
    //     if ( typeof(exp) === 'string' && typeof(exp) != null && typeof(cos) != null &&
    //     exp != '' && cos != '' && exp.length < 50 ) {
    //         console.log('Done!');
    //         appData.expenses[exp] = cos;
    //     } else {
    //         console.log('Inserted incorrect value');
    //         alert('Не верно ввели значение. Будьте внимательней!');
    //         i--;
    //     }
    //     i++;
    // }

    // Исользуя цикл DO WHILE
    // let i = 0;
    // do {
    //     let exp = prompt("Введите обязательную статью расходов в этом месяце", ''), 
    //         cos = prompt("Во сколько обойдется?", '');
        
    //     if ( typeof(exp) === 'string' && typeof(exp) != null && typeof(cos) != null &&
    //     exp != '' && cos != '' && exp.length < 50 ) {
    //         console.log('Done!');
    //         appData.expenses[exp] = cos;
    //     } else {
    //         console.log('Inserted incorrect value');
    //         alert('Не верно ввели значение. Будьте внимательней!');
    //         i--;
    //     }
    //     i++;
    // }
    // while ( i < 2);


    appData.moneyPerDay = appData.budget / 30;
    alert("Ежедневный бюджет на день составдяет: " + Math.round(appData.moneyPerDay) + 'грн');

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