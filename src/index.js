
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
    function anchorageDisplay() {
       let anchorageTime = moment()
          .tz("America/Anchorage")
          .format("h:mm:ss A");
        let anchorageDate = moment()
          .tz("America/Anchorage")
          .format("dddd, MMMM D, YYYY");
        let anchoragePlace = "Anchorage 🇺🇸";
        date.innerHTML = anchorageDate;
        time.innerHTML = anchorageTime;
        place.innerHTML = anchoragePlace;
    }
   

   function displayTime(event) {
    
        let singaporeTime = moment()
          .tz("Asia/Singapore")
          .format("dddd, MMMM D, YYYY h:m A");
        let tokyoTime = moment()
          .tz("Asia/Tokyo")
          .format("dddd, MMMM D, YYYY h:m A");
        let currentLocation = moment.tz.guess();

        if (event.target.value.length > 0) {
          if (event.target.value === "anchorage") {
            setInterval(anchorageDisplay, 1000);
          }
          if (event.target.value === "singapore") {
            alert(`It is ${singaporeTime} in Singapore, Singapore`);
          }
          if (event.target.value === "tokyo") {
            alert(`It is ${tokyoTime} in Tokyo, Japan`);
          }
          if (event.target.value === "current") {
            alert(`The time in your current location is ${currentLocation}`);
          }
        }
      }
      let date = document.querySelector("#new-date");
      let time = document.querySelector("#current-time");
      let place = document.querySelector("#place");
      let citySelect = document.querySelector("#cities");
      citySelect.addEventListener("change", displayTime);


      //javascript for button to view all cities

