
window.onload = function() {
    const track = document.getElementById('slider-track');
    const images = track.getElementsByTagName('img');

    // Calcular a largura total das imagens para definir a largura do slider-track
    let trackWidth = 0;
    for (let img of images) {
        trackWidth += img.width;
    }

    // Definir a largura do track
    track.style.width = trackWidth + 'px';

    // Clonar o slider-track para criar um efeito de loop contínuo
    let clone = track.cloneNode(true);
    document.querySelector('.slider').appendChild(clone);
};
/**/