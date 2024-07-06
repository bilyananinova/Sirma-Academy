function getFormvalue(event) {
    event.preventDefault();
    let inputElements = document.querySelectorAll('input[type=text]');
    let firstNameElement = inputElements[0];
    let lastNameElement = inputElements[1];

    console.log(firstNameElement.value);
    console.log(lastNameElement.value);
}