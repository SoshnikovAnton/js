let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    menuItemFi = document.createElement('li'),
    appA = document.getElementById('prompt'),
    column = document.getElementsByClassName('column')[1],
    appApple = document.createElement('div');


menuItemFi.classList.add('menu-item');
menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(menuItemFi);
column.appendChild(appApple);
menuItemFi.textContent = 'Пятый пункт';
title.textContent = "Мы продаем только подлинную технику Apple";
document.body.style.background = 'url(img/apple_true.jpg)';
column.removeChild(adv);

appA.textContent = prompt("Как вы относетесь к технике Apple?", "отлично");
