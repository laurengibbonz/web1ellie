// 1. How to click on the icon then automatically scroll down the page to the section I am looking for.
const sectionLinks = document.querySelectorAll('.icons .links');

sectionLinks.forEach(function(elem){
   elem.addEventListener('click', function(){
        let section = this.dataset.section;
        document.getElementById(section.toString()).scrollIntoView({behavior: 'smooth'});
   });
});

// 2. Click on icon to switch on/ off the audio
const soundLink = document.querySelector('.icons .sound'),
    soundFile = document.getElementById('sound-file');
let isPlaying = false;

function togglePlay() {
  isPlaying ? soundFile.pause() : soundFile.play();
}

soundFile.onplaying = function() {
  isPlaying = true;
}

soundFile.onpause = function() {
  isPlaying = false;
}

soundLink.addEventListener('click', function(){
   togglePlay();
});

// 3. Click on the icon to change the entire background color and text color( kind of like switching between night mode and day mode): 
//is it better to just switch to another index page or change everything in the same index instead? LG: Best to update backgroundColor

//LG: See if you can figure this one out based on examples above
//Define constant variable styleLink and store .icon .style -- see Line 12

//Add Event Listener for styleLink to trigger on click -- see Line 28

//In style.css create a new class body.active and store the new background color
//Inside event listener add a function (Line 38) -- document.getElementByTagName('body').classList.toggle('active')