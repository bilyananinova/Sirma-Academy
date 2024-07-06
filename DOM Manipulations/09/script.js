function getOptions() {
    let colorElement = document.querySelector('input[name=color]');
    let select = document.querySelector('select');
    let optionElement = document.createElement('option');
    optionElement.textContent = colorElement.value;
    select.append(optionElement);
    
    let optionsElements = select.getElementsByTagName('option');
    
    alert(optionsElements.length);
    document.querySelector('input[name=color]').value = '';
}