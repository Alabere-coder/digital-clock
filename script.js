setInterval(() => {
    const time = document.getElementById('time');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if (hours > 12) {
        day_night = "PM"
        hours = hours - 12;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
})