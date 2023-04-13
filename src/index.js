
function houstonTime () {
let houston = document.querySelector("#houston");
let houstonTime = moment().tz("America/Chicago").format("h:mm:ss a");

houston.innerHTML = houstonTime;
}

setInterval(houstonTime, 1000);

function lvivTime (){
let lviv = document.querySelector("#lviv");
let lvivTime = moment().tz("Europe/Kiev").format("h:m A");

lviv.innerHTML = lvivTime;
}
setInterval(lvivTime, 1000);

function sydneyTime() {
let sydney = document.querySelector("#sydney");
let sydneyTime = moment().tz("Australia/Sydney").format("h:m A");

sydney.innerHTML = sydneyTime;
}
setInterval(sydneyTime, 1000);
