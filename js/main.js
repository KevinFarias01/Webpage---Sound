var minhaMusica = document.getElementById("musica");
var icon = document.getElementById("icon");

icon.onclick = function () {
    if (minhaMusica.paused) {
        minhaMusica.play();
        icon.src = "img/pause.png";
    }
    else {
        minhaMusica.pause();
        icon.src = "img/play.png";
    }
}