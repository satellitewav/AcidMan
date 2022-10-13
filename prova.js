function suona(){
    const audioCtx = new AudioContext();
    const audio = new Audio("/pacman-firebase/audio/pause_beat.mp3");
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(audioCtx.destination);
    audio.play();
}

function due(){
    const audioCtx = new AudioContext();
    const suono = new Audio("/pacman-firebase/audio/game_start.mp3");
    const source = audioCtx.createMediaElementSource(suono);
    source.connect(audioCtx.destination);
    suono.play();
}