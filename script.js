let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displaytime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrrotation = 30 * hh + mm / 2;
    let minrotation = 6 * mm;
    let secrotation = 6 * ss;

    hr.style.transform = `rotate(${hrrotation}deg)`;
    min.style.transform = `rotate(${minrotation}deg)`;
    sec.style.transform = `rotate(${secrotation}deg)`;
}

setInterval(displaytime, 1000);