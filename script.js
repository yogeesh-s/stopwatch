let hour = 0;
let min = 0;
let second = 0;
let ms = 0;

timer = () => {
    (ms<10)?document.querySelector('.millisecond').innerHTML = "0" + ms : document.querySelector('.millisecond').innerHTML = ms;
    (second<10)?document.querySelector('.second').innerHTML = "0" + second : document.querySelector('.second').innerHTML = second;
    (min<10)?document.querySelector('.minute').innerHTML = "0" + min : document.querySelector('.minute').innerHTML = min;
    (hour<10)?document.querySelector('.hour').innerHTML = "0" + hour : document.querySelector('.hour').innerHTML = hour;
    ms++;
    if(ms==100){
        ms=0
        second++;
        if(second==60){
            second = 0;
            min++;
            if(min==60){
                min = 0;
                hour++;
            }
        }
    }
}

start = () =>{
    stop()
    let interval = setInterval(timer, 10);
    stop = () => {
        clearInterval(interval)
    }
    reset = () => {
        stop();
        hour = min = second = ms = 0;
        document.querySelector('.millisecond').innerHTML = "00";
        document.querySelector('.second').innerHTML = "00";
        document.querySelector('.minute').innerHTML = "00";
        document.querySelector('.hour').innerHTML = "00";
    }
}