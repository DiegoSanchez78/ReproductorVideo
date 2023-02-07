const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)


function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}
function handlePause(){
    $video.pause() 
    $pause.hidden = true
    $play.hidden = false

}
$backward.addEventListener('click', handlebackward)

function handlebackward(){
    $video.currentTime = $video.currentTime  - 10
}

$forward.addEventListener('click', handleForward)

function handleForward(){
    $video.currentTime = $video.currentTime  + 10
}

const $progess = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTime)


function handleLoaded(){
   $progess.max = $video.duration
}

function handleTime(){
    $progess.value = $video.currentTime
 }

$progess.addEventListener('input',handleInput)

function handleInput(){
    $video.currentTime = $progess.value
}