var instruments = [];

window.onload = e => {
    
}

function preload(){
    document.body.bind('touchmove', function(event) { event.preventDefault()});
    instruments.push(loadSound('kick.wav'));
    instruments.push(loadSound('snare.wav'));
    instruments.push(loadSound('hat.wav'));
}

function pressed(i){
    instruments[i].play();
    document.getElementsByClassName('pad')[0].style.backgroundColor = "blue";
//console.log("yo");
//    document.getElementById('pad').style.background = "#89c79b";
}

function released(i){
//    document.getElementById('pad').style.background = "#98d9ab";
}



