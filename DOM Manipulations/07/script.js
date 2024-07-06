function createTable() {
    let rowElementsCount = document.querySelector('input[name=row]').value;
    let cellElementsCount = document.querySelector('input[name=cell]').value;
    let table = document.getElementById('myTable');
    let form = document.querySelector('form');

    for (let row = 1; row <= rowElementsCount; row++) {
        let rowElement = document.createElement('tr');

        for (let cell = 1; cell <= cellElementsCount; cell++) {

            let cellElement = document.createElement('td');
            cellElement.textContent = `Row${row} cell${cell}`;

            rowElement.appendChild(cellElement);
        }

        table.appendChild(rowElement);
    }

   form.reset()
}