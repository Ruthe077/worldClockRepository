





let houston = document.querySelector("#houston");
let houstonTime = moment().tz("America/Chicago").format("dddd, MMMM D, YYYY h:m A");

houston.innerHTML = houstonTime;


let lviv = document.querySelector("#lviv");
let lvivTime = moment().tz("Europe/Kiev").format("dddd, MMMM D, YYYY h:m A");

lviv.innerHTML = lvivTime;


let sydney = document.querySelector("#sydney");
let sydneyTime = moment().tz("Australia/Sydney").format("dddd, MMMM D, YYYY h:m A");

sydney.innerHTML = sydneyTime;

