const clock = document.getElementById("clock")

function getClock(){
    const date = new Date();
    //const year = String(date.getFullYear()).slice(-2);
    //const month = String(date.getMonth()).padStart(2,"0");
    //const day = String(date.getDay()).padStart(2,"0");
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    const millisecond = String(date.getMilliseconds()).padStart(3,"0");
    clock.innerText = `${hour}:${minutes}:${second}.${millisecond}`;
}
getClock();
setInterval(getClock, 1);