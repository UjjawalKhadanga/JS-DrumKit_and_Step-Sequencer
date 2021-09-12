// play function and transition-end with events listeners

//PlayAudio
function playaudio_new(e) {
    const audio = document.querySelector(`audio[data-key=${e}]`);
    if (!audio) { return; }
    audio.currentTime = 0;
    audio.play();
    

    const div = document.querySelector(`div[data-key=${e}]`);
    div.classList.add("drum_play");

}

document.addEventListener('keydown', function playaudio(e) {
    if (e.repeat) return
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    if (!audio) { return; }
    audio.currentTime = 0;
    audio.play();

    const div = document.querySelector(`div[data-key=${e.key}]`);
    div.classList.add("drum_play");

});

//Remove Transition

function removetransition(e) {
    if (e.propertyName != "opacity") {
        this.classList.remove("drum_play")
    }
}
const keylist = document.querySelectorAll(".drum-button");
keylist.forEach(key => key.addEventListener('transitionend', removetransition));


//Step Sequencer

//Step selector
function stepselector(e) {
    if (this.classList.contains("select")) {
        this.classList.remove("select")
    }
    else {
        this.classList.add("select")
    }
}
const stepslist = document.querySelectorAll(".steps");
stepslist.forEach(step => step.addEventListener('click', stepselector))

//Press Buttons

var timeline;// declaration of a variable which will store the setinterval function//

//stop button
document.querySelector("#stop").addEventListener('click',stopplay)
function stopplay(){
    clearInterval(timeline);
}

//play button
function pressplay() {
    const bpm = document.getElementById("bpm").value;
    const time_interval = (60 / bpm) * 1000;
    var kick_list = document.getElementsByClassName("kick-steps");
    var snare_list = document.getElementsByClassName("snare-steps");
    var hihat_list = document.getElementsByClassName("hihat-steps");
    var perc_list = document.getElementsByClassName("perc-steps");
    var openhat_list = document.getElementsByClassName("openhat-steps");

    let i = 0;
    timeline = setInterval(() => {
        
        if (i >= 16) { clearInterval(timeline);}
        if (kick_list[i].classList.contains("select")) {
            playaudio_new('a')
        }
        if (snare_list[i].classList.contains("select")) {
            playaudio_new('c')
        }
        if (hihat_list[i].classList.contains("select")) {
            playaudio_new('u')
        }
        if (perc_list[i].classList.contains("select")) {
            playaudio_new('q')
        }
        if (openhat_list[i].classList.contains("select")) {
            playaudio_new('g')
        }
        i++;
    }, time_interval);

}

//loop play button
function pressloopplay() {
    const bpm = document.getElementById("bpm").value;
    const time_interval = (60 / bpm) * 1000;
    var kick_list = document.getElementsByClassName("kick-steps");
    var snare_list = document.getElementsByClassName("snare-steps");
    var hihat_list = document.getElementsByClassName("hihat-steps");
    var perc_list = document.getElementsByClassName("perc-steps");
    var openhat_list = document.getElementsByClassName("openhat-steps");

    let i = 0;
    timeline = setInterval(() => {
        if (i == 16) {
            i = 0;
        }
        if (kick_list[i].classList.contains("select")) {
            playaudio_new('a')
        }
        if (snare_list[i].classList.contains("select")) {
            playaudio_new('c')
        }
        if (hihat_list[i].classList.contains("select")) {
            playaudio_new('u')
        }
        if (perc_list[i].classList.contains("select")) {
            playaudio_new('q')
        }
        if (openhat_list[i].classList.contains("select")) {
            playaudio_new('g')
        }
        i++;
    }, time_interval);

}