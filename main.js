// 1. Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text">Remove me</div> исчезал.

const bth1 = document.getElementById('hider');
const textRemove = document.getElementById('text');

bth1.addEventListener("click", function(e){
    textRemove.style.display = "none";
})

// 2. Какой обработчик запустится?
// В переменной `button` находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

button.addEventListener("click", () => alert("1")); // этот обработчик будеть запускатся.
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2); // этот обработчик будеть запускатся.


// 3. Добавить кнопку закрытия
// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

let panes = document.querySelectorAll('.pane');


panes.forEach(function (item, index, array){
    let button2 = document.createElement("button")
    button2.className = "button-remove"
    button2.innerHTML="[x]";
    item.prepend(button2);

    button2.addEventListener('click', function(e){
        item.style.display = "none";
    })
  });



