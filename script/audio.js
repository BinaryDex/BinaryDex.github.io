var audio = document.getElementById('audio');
var init = false;

audio.volume = 0.085;

function start() {
    if (init) return;
    else init = true;
    
    var rythm = new Rythm();
    rythm.addRythm('img', 'image-shadow', 0, 10);
    rythm.addRythm('title', 'text-shadow', 0, 10);
    rythm.addRythm('text', 'text-shadow', 0, 10);
    rythm.addRythm('index_message', 'text-shadow', 0, 10);
    rythm.connectExternalAudioElement(audio);
    rythm.start();
}

document.getElementById('container_init').addEventListener('click', function() {
    audio.play()
        .then(() => {
            start();
            document.getElementById('container_init').style.display = 'none';
            document.getElementById('container_main').style.visibility = 'visible';
        })
        .catch(err => {});
});
