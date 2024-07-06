function insertRow() {
    let table = document.getElementById('sampleTable');
    let rows = document.getElementsByTagName('tr').length;
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    cell1.textContent = `Row${++rows} cell1`;
    cell2.textContent = `Row${rows} cell2`;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
}