var tasks = [];

function createTasks(novaTarefa, status, index) {
    var label = document.createElement('label');
    label.classList.add('toDoItem');
    label.innerHTML = `
        <input type="checkbox" ${status} data-index="${index}"/>
        <div>${novaTarefa}</div>
        <button type="button" data-index="${index}">Excluir</button>
    `;
    document.querySelector('.toDo').appendChild(label);
}

function addTasks(event) {
    const input = event.target;
    if (event.key === 'Enter') {
        tasks.push({
            nome: input.value,
            status: ""
        })
        input.value = '';
    }
    renderTasks();
}

function clearTasks() {
    const toDo = document.querySelector('.toDo');
    while (toDo.firstChild) {
        toDo.removeChild(toDo.lastChild)
    }
}

function delTasks(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function checkTask(index) {
    tasks[index].status = tasks[index].status === '' ? 'checked' : '';
    renderTasks();
}

function checkItem(evento) {
    const alvo = evento.target;
    if (alvo.type === 'button') {
        delTasks(alvo.dataset.index);
    } else if (alvo.type === 'checkbox') {
        checkTask(alvo.dataset.index)
    }
}

function renderTasks() {
    clearTasks();
    let index = 0
    while (index < tasks.length) {
        createTasks(tasks[index].nome, tasks[index].status, index)
        index++
    }
}

document.querySelector('#inputTarefa').addEventListener('keypress', addTasks);
document.querySelector('#toDo').addEventListener('click', checkItem);

renderTasks();