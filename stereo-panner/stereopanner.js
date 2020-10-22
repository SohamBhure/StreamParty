var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');

var panControl = document.querySelector('.panning-control');
var panValue = document.querySelector('.panning-value');

pre.innerHTML = myScript.innerHTML;

var source = audioCtx.createMediaElementSource(myAudio);

var panNode = audioCtx.createStereoPanner();

panControl.oninput = function() {
  panNode.pan.setValueAtTime(panControl.value, audioCtx.currentTime);
  panValue.innerHTML = panControl.value;
}

source.connect(panNode);
panNode.connect(audioCtx.destination);