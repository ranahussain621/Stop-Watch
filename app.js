let min = 0;
let sec = 0;
let msec = 0;


let minHead = document.getElementById('min');
let secHead = document.getElementById('sec');
let msecHead = document.getElementById('msec');

let interval;
console.log(firebase);
function timer() {
    msec++;
    msecHead.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHead.innerHTML = sec;
        msec = 0;
    }

    else if (sec >= 60) {
        min++;
        minHead.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);   
    setTimeout(() => {
        var btn = document.getElementById('btn');
        btn.style.display = 'none';
    }, 1000);
    
}


function stop() {
    clearInterval(interval);
}

function reset() {
    minHead.innerHTML = 0;
    secHead.innerHTML = 0;
    msecHead.innerHTML = 0;
    stop();
    var btn = document.getElementById('btn');
    btn.style.display = 'inline-block';
}