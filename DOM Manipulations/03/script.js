function changeBackground() {
    let divElement = document.getElementsByClassName('container')[0];

    divElement.style.backgroundColor === 'lightblue' 
    ? divElement.style.backgroundColor = 'blanchedalmond' 
    : divElement.style.backgroundColor = 'lightblue';

}