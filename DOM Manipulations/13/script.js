let list = document.querySelector('#items');
let input = document.querySelector('input');

function addNew() {

    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    liElement.addEventListener('click', (e) => {

        let updateInput = document.createElement('input');
        updateInput.type = 'text';
        updateInput.defaultValue = '';
        e.target.append(updateInput);
        
        let updateButton = document.createElement('button');
        updateButton.innerHTML = 'Update';
        updateButton.onclick = () => {
            liElement.textContent = updateInput.value;
        }
        e.target.append(updateButton);
    });
    
    list.append(liElement);
    input.value = '';
}

