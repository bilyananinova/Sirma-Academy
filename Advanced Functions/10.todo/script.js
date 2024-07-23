
document.getElementById('add-button')
    .addEventListener('click', function (e) {
        const input = document.getElementById('todo-input');
        const task = input.value.trim();
        let list = document.getElementById('todo-list');

        let listItem = document.createElement('li');
        listItem.textContent = task;

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Task';
        removeBtn.addEventListener('click', (e) => {
            removeItem(e)
        });
        listItem.appendChild(removeBtn);

        list.appendChild(listItem);
        input.value = '';
    });

    
function removeItem(e) {
   e.currentTarget.parentNode.remove();
}