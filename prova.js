

function suona(){
    const audioCtx = new AudioContext();
    const audio = new Audio("/pacman-firebase/audio/pause_beat.mp3");
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(audioCtx.destination);
    audio.play();
}
