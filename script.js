var instruments = [];



function pressed(i){
    instruments[i].play();
//console.log("yo");
//    document.getElementById('pad').style.background = "#89c79b";
}

function released(i){
//    document.getElementById('pad').style.background = "#98d9ab";
}

function setup(){
    document.body.bind('touchmove', function(event) { event.preventDefault()});
    instruments.push(loadSound('kick.wav'));
    instruments.push(loadSound('snare.wav'));
    instruments.push(loadSound('hat.wav'));
}

