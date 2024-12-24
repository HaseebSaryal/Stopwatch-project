

let minutes_html = document.getElementById("minutes")
let seconds_html = document.getElementById("seconds")
let ms_html = document.getElementById("mili-seconds")
let btnn  = document.querySelector(".start")

let minutes = 0
let seconds = 0
let ms = 0

    


let intervalid;

function start(){
    intervalid = setInterval(()=>{
        ms ++
        if(ms >= 99) {
            seconds ++;
            ms = 0
        }
        if(seconds >= 59){
            minutes ++;
            seconds  = 0
        }
        ms_html.innerText = ms
        seconds_html.innerText = seconds < 10 ? "0"+seconds : seconds
        minutes_html.innerHTML = minutes < 10 ? "0"+minutes : minutes
        btnn.disabled = true
        
    }, 10)
}
function stop(){
    clearInterval(intervalid)
    btnn.disabled = false
}
function reset(){
    clearInterval(intervalid)
    ms_html.innerText = "00"
    seconds_html.innerText = "00"
    minutes_html.innerText = "00"
    minutes = 0
    seconds = 0
    ms = 0
    btnn.disabled = false

}