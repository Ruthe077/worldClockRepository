
function houstonTime () {
let houston = document.querySelector("#houston");
let houstonTime = moment().tz("America/Chicago").format("h:mm:ss A");
let houstonDate = document.querySelector("#houston-date");
let hDate = moment().tz("America/Chicago").format("MMM Do, YYYY");

houstonDate.innerHTML = hDate;
houston.innerHTML = houstonTime;
}

setInterval(houstonTime, 1000);

function lvivTime (){
let lviv = document.querySelector("#lviv");
let lvivTime = moment().tz("Europe/Kiev").format("h:mm:ss A");
let lvivDate = document.querySelector("#lviv-date");
let lDate = moment().tz("Europe/Kiev").format("MMM Do, YYYY");

lvivDate.innerHTML = lDate;
lviv.innerHTML = lvivTime;
}
setInterval(lvivTime, 1000);

function sydneyTime() {
let sydneyDate = document.querySelector("#sydney-date");
let sydney = document.querySelector("#sydney");
let syd = moment().tz("Australia/Sydney").format("MMM Do, YYYY");
let sydneyTime = moment().tz("Australia/Sydney").format("h:mm:ss A");

sydneyDate.innerHTML = syd;
sydney.innerHTML = sydneyTime;
}
setInterval(sydneyTime, 1000);
