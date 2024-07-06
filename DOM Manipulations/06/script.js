function changeContent() {
    let rowElement = document.querySelector('input[name=row]').value;
    let cellElement = document.querySelector('input[name=cell]').value;
    let contentElement = document.querySelector('input[name=new-content]').value;

    let rows = document.getElementsByTagName('tr')[--rowElement];
    let cell = rows.getElementsByTagName('td')[--cellElement];

    cell.textContent = contentElement;

}
