window.onload = windowSize();

function windowSize() {
    let heightElement = document.getElementById("height");
    let widthElement = document.getElementById("width");
    heightElement.innerHTML = window.innerHeight;
    widthElement.innerHTML = window.innerWidth;

    window.onresize = () => {
        heightElement.innerHTML = window.innerHeight;
        widthElement.innerHTML = window.innerWidth;
    }

}

