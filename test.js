let arrTasks;

if(localStorage.getItem('arrTasks') == null) {
  arrTasks = [];
} else{
  arrTasks = JSON.parse(localStorage.getItem('arrTasks'));
}

const inputText = document.getElementById('inputValue');   
const check = document.getElementById('taskList');
const addBtn = document.getElementById("addTask");
const clearAllBtn = document.getElementById('deleteAllTask')

    ///////// Добавить таск                 /////////
    arrTasks.forEach((t)=> {
    const lable = document.createElement('label');
    lable.classList.add('newLabel');
    ///////// Добавляю текст таска в список /////////
    const textTast = document.createElement('p');
    textTast.innerText = t;
    ///////// Добавляю корзину для удаления /////////
    const basketBtn = document.createElement('input')
    basketBtn.setAttribute("type", "button");
    basketBtn.classList.add('basket')
    ///////// Привязка на странице          /////////
    lable.append(textTast, basketBtn);
    //lable.append();
    check.append(lable);
});


addBtn.addEventListener('click', () => {
arrTasks.push(inputText.value);

inputText.innerText = '';
localStorage.setItem('arrTasks', JSON.stringify(arrTasks));
})






















/////////// Удаление таска /////////////

clearAllBtn.addEventListener('click', () => {
  arrTasks = [];
  localStorage.setItem('arrTasks', JSON.stringify(arrTasks));
})

const delButtons = document.querySelectorAll('.basket');

delButtons.forEach((btn, index)=>{
  btn.addEventListener('click', () => {
    arrTasks.splice(index, 1);
    localStorage.setItem('arrTasks', JSON.stringify(arrTasks));
  })
})

console.log(delButtons);