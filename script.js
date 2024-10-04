const data = {};
let taskCounter = 1;  

function valuecollecter() {
  const input = document.querySelector('.search').value;
  if (input.trim()) { 
    data[`t${taskCounter}`] = { task: input, completed: false }; 
    taskCounter++;
    updateTaskList();
  }
  document.querySelector('.search').value = '';
}

function updateTaskList() {
  const container = document.querySelector('.tasksec');
  container.innerHTML = '';

  Object.keys(data).forEach((key) => {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = data[key].completed;
    checkbox.addEventListener('change', () => toggleTaskCompletion(key));

    const p = document.createElement('p');
    p.textContent = data[key].task;
    if (data[key].completed) {
      p.style.textDecoration = 'line-through';
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(key));

    taskWrapper.appendChild(checkbox);
    taskWrapper.appendChild(p);
    taskWrapper.appendChild(deleteBtn);
    
    container.appendChild(taskWrapper);
  });
}

function toggleTaskCompletion(key) {
  data[key].completed = !data[key].completed;
  updateTaskList();
}

function deleteTask(key) {
  delete data[key];  
  updateTaskList();
}

document.querySelector('.btn1').addEventListener('click', valuecollecter);
