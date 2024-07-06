function hightlight () {
    let strongElements = document.getElementsByTagName('strong');

    for (let i = 0; i < strongElements.length; i++) {
        let element = strongElements[i];
        element.style.backgroundColor = "orchid"
        
    }
}

function normal () {
    let strongElements = document.getElementsByTagName('strong');

    for (let i = 0; i < strongElements.length; i++) {
        let element = strongElements[i];
        element.style.backgroundColor = "transparent";
        
    }
}