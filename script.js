setInterval(()=>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if(hours > 12){
        day_night = "PM";
        hours = hours - 12 ;

    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;

    }
    if(hours < 10){
        hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});
setInterval(()=>{
    const time = document.querySelector("#dates");
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth() +1;
    let y = date.getFullYear();
    if(m < 10){
        m = "0" + m;
    }
dates.textContent = d + "-" + m + "-" + y;
});

const windowx = document.querySelector("#windowup");
const windowy = document.querySelector(".windowpopup");
const body = document.querySelector("body");
windowx.onclick = ()=>{
    windowy.classList.toggle("show");
}
// body.onclick= ()=>{
//     windowy.classList.remove("show");
// }

