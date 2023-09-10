import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});



const onTimeUpdate = function (data) {
let videoSec = data.seconds
localStorage.setItem("current-time", JSON.stringify(videoSec));
   }

let pauseSec = JSON.parse(localStorage.getItem("current-time"))


player.on('timeupdate', throttle(onTimeUpdate, 1000)) 


   player.setCurrentTime(pauseSec)
    .then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });