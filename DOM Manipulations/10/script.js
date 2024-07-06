function calculateVolume() {
    let radius = document.querySelector('input[name=radius]').value;
    let volumeResult = document.querySelector('input[name=volume]');
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volumeResult.value = volume.toFixed(5);
}