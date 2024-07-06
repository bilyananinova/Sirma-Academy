let selectElement = document.getElementById('colorSelect');
let options = selectElement.getElementsByTagName('option');

function removecolor() {

        selectElement.remove(selectElement.selectedIndex)
}