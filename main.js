function showDate() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ssesion = "AM"

    if (h === 0) {
        h = 0;
    }

    if (h > 12) {
        h = h - 12
        ssesion = "PM"
    }

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    let time = `${h}:${m}:${s} ${ssesion}`;

    const clock = document.querySelector(".clock").innerHTML = time;
};

setInterval(showDate, 1000);

