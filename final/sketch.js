// function setup() { 
//     createCanvas(1280, 1280); 
//     text("Click on the buttons below to"+ 
//          " play/pause the video", 20, 20); 
    
//     vidElement = createVideo("124.mov"); 
//     vidElement.position(20, 0); 
//     vidElement.size(300); 
    
//     playBtn = createButton("Play"); 
//     playBtn.position(30, 40); 
//     playBtn.mouseClicked(playVideo); 
    
//     pauseBtn = createButton("Pause"); 
//     pauseBtn.position(150, 40); 
//     pauseBtn.mouseClicked(pauseVideo); 
//   } 
    
//   function playVideo() { 
//     vidElement.play(); 
//   } 
    
//   function pauseVideo() { 
//     vidElement.pause(); 
//   } 
  

let playing = false;
let happy;
let button;

function setup() {
  happy = createVideo(['./124.webm','./124.mp4']);
  button = createButton('play');
  button.mousePressed(toggleVid); 
}


function toggleVid() {
  if (playing) {
    happy.pause();
    button.html('play');
  } else {
    happy.loop();
    button.html('pause');
  }
  playing = !playing;
}