

let money = prompt("Ваш бюджет на месяц?",''),
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
           
let appData = {
        budget : money,
        timeData : time,
        expenses : {},
        optionalExpenses : {},
        income : [],
        savings : false
};

let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ''), 
    cos1 = prompt("Во сколько обойдется?", ''),
    exp2 = prompt("Введите обязательную статью расходов в этом месяце", ''), 
    cos2 = prompt("Во сколько обойдется?", '');
    
appData.expenses[exp1] = cos1;
appData.expenses[exp2] = cos2;

// Вывожу в консоль полученные от пользователя значения, которые поместились в обьект expenses{} 
console.log(appData.expenses);

prompt("Ваш бюджет на день составдяет: " + appData.budget / 30 + ' грн');
