let arrTasks;

if(localStorage.getItem('arrTasks') == null) {
  arrTasks = [];
} else{
  arrTasks = JSON.parse(localStorage.getItem('arrTasks'));
}

const inputText = document.getElementById('inputValue');   
const check = document.getElementById('taskList');
const addBtn = document.getElementById("addTask");
const clearAllBtn = document.getElementById('deleteAllTask');

    // Добавить таск 
    arrTasks.forEach((textTask)=> {
    const lable = document.createElement('label');
    const textTast = document.createElement('p');
    const basketBtn = document.createElement('button');

    lable.classList.add('newLabel');
    basketBtn.classList.add('basket');

    textTast.innerText = textTask;
    
    lable.append(textTast, basketBtn);
    check.append(lable);
});


// Добавить таск 

addBtn.addEventListener('click', () => {
arrTasks.push(inputText.value);
localStorage.setItem('arrTasks', JSON.stringify(arrTasks));
})


// Удалить таск 

const delButtons = document.querySelectorAll('.basket');

delButtons.forEach((button, index)=>{
  button.addEventListener('click', () => {
    arrTasks.splice(index, 1);
    localStorage.setItem('arrTasks', JSON.stringify(arrTasks));
  })
})

// Удалить все таски

clearAllBtn.addEventListener('click', () => {
  arrTasks = [];
  localStorage.setItem('arrTasks', JSON.stringify(arrTasks));
})

// Cчетчик кол-ва тасков

const counter = document.getElementById('count');
count.innerText = `You have ${arrTasks.length} tasks`

// Время (доделать)
  let time = [];
  const times = new Date().toLocaleTimeString();
