
let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement('li'),
    adv = document.getElementsByClassName('adv')[0],
    title = document.getElementById('title'),
    promptforApple = document.querySelector("#prompt");


    menu.insertBefore(menuItem[1], menuItem[3]);

    
    menuItemLi.classList.add('menu-item');
    menuItemLi.innerHTML = 'Пятый пункт';
    menu.appendChild(menuItemLi);

document.body.style.backgroundImage = ' url(img/apple_true.jpg)';
   
title.textContent = "Мы продаем только подлинную технику Apple"    

adv.remove();                                                   

let yourOpinion = prompt("Ваше отношение к технике Apple?");   
promptforApple.textContent = yourOpinion;