// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Все теги прогрузились');
// })

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

// window.addEventListener('load', function() {
//     console.log('Страница загрузилась');
// })

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// const container = document.querySelector('body');
// container.addEventListener('click', function(event) {
//     const target = event.target;
//     const hasSuperElementClass = target.classList.contains('super_element');
//     const tag = target.tagName.toLowerCase();
//     console.log(`Клик по тегу ${tag}. Класс "super_element" присутствует: ${hasSuperElementClass}`);
// });


// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

// function hoverIn() {
//     console.log('Вы навели на textarea');
// }

// function hoverOut() {
//     console.log('Вы убрали мышку с textarea');
// }

// document.querySelector('textarea')
//     .addEventListener('mouseover', hoverIn);

// document.querySelector('textarea')
//     .addEventListener('mouseout', hoverOut);


// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

// const buttonElements = document.querySelectorAll('li');

// buttonElements.forEach((el) => {
//     el.addEventListener('click', function() {
//         console.log(`нажата ${el.innerText}`);
//     })
// })


// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Событие клика на кнопку срабатывает при нажатии на кнопку, а событие клика по тегу срабатывает при нажатии на любой элемент, являющийся потомком элемента, на который мы добавили обработчик событий по клику.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liElements = document.querySelectorAll('li');

// for (let i = 0; i < liElements.length; i++) {
//     if (i % 2 === 0) {
//         liElements[i].style.backgroundColor = 'lightgreen';
//     }
// }