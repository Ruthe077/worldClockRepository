
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


//javascript for select element
   function alertTime(event) {
        let bostonTime = moment()
          .tz("America/New_York")
          .format("dddd, MMMM D, YYYY h:m A");
        let honoluluTime = moment()
          .tz("Pacific/Honolulu")
          .format("dddd, MMMM D, YYYY h:m A");
        let lvivTime = moment()
          .tz("Europe/Kiev")
          .format("dddd, MMMM D, YYYY h:m A");
        let localTime = moment.tz.guess();

        if (event.target.value.length > 0) {
          if (event.target.value === "boston") {
            alert(`It is ${bostonTime} in Boston, USA`);
          }
          if (event.target.value === "honolulu") {
            alert(`It is ${honoluluTime} in Honolulu, USA`);
          }
          if (event.target.value === "lviv") {
            alert(`It is ${lvivTime} in Lviv, Ukraine`);
          }
          if (event.target.value === "local") {
            alert(`The local timezone is ${localTime}`);
          }
        }
      }

      let citySelect = document.querySelector("#timezones");
      citySelect.addEventListener("change", alertTime);
