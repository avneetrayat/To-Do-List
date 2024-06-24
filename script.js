document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    let editMode = false;
    let editItem = null;

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            if (editMode) {
                updateTodoItem(editItem, todoText);
                editMode = false;
                editItem = null;
            } else {
                addTodoItem(todoText);
            }
            todoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', function() {
            editMode = true;
            editItem = todoItem;
            todoInput.value = todoItem.textContent.trim();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            todoItem.remove();
        });
        
        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);
        
        todoItem.addEventListener('click', function() {
            todoItem.classList.toggle('completed');
        });
        
        todoList.appendChild(todoItem);
    }

    function updateTodoItem(item, newText) {
        item.textContent = newText;
    }
});
