setInterval(showTime, 1000);

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h > 12) { session = "PM" } else { session };
    if (h == 0) { h = 12 } else { h }
    if (h > 12) { h -= 12 } else { h };
    if (h < 10) { `0${h}` } else { h };
    if (m < 10) { `0${m}` } else { m };
    if (s < 10) { `0${s}` } else { s };

    let time = `${h}:${m}:${s} ${session}`;
    document.querySelector(".clock").innerText = time;
}