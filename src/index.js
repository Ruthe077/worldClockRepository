
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
//javascript for clearing other cities



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
   
    function singaporeDisplay() {
       let singaporeTime = moment()
          .tz("Asia/Singapore")
          .format("h:mm:ss A");
        let singaporeDate = moment()
          .tz("Asia/Singapore")
          .format("dddd, MMMM D, YYYY");
        let singaporePlace = "Singapore 🇼🇸";
        date.innerHTML = singaporeDate;
        time.innerHTML = singaporeTime;
        place.innerHTML = singaporePlace;
     
    }
    function tokyoDisplay() {
       let tokyoTime = moment()
          .tz("Asia/Tokyo")
          .format("h:mm:ss A");
        let tokyoDate = moment()
          .tz("Asia/Tokyo")
          .format("dddd, MMMM D, YYYY");
        let tokyoPlace = "Tokyo 🇯🇵";
        date.innerHTML = tokyoDate;
        time.innerHTML = tokyoTime;
        place.innerHTML = tokyoPlace;
       
    }
    function currentDisplay() {
       let currentTime = moment()
          .tz("America/Anchorage")
          .format("h:mm:ss A");
        let currentDate = moment()
          .tz("America/Anchorage")
          .format("dddd, MMMM D, YYYY");
        let currentPlace = "Anchorage 🇺🇸";
        date.innerHTML = currentDate;
        time.innerHTML = currentTime;
        place.innerHTML = currentPlace;
        
    }

   function displayTime(event) {
     let setSingapore = setInterval(singaporeDisplay, 1000);
      let setTokyo = setInterval(tokyoDisplay, 1000);
      let setCurrent = setInterval(currentDisplay, 1000);
      let setAnchorage = setInterval(anchorageDisplay, 1000);
    

        if (event.target.value.length > 0) {
          if (event.target.value === "anchorage") {
        
        clearInterval(setCurrent);
        clearInterval(setTokyo);
        clearInterval(setSingapore);
        setInterval(anchorageDisplay, 1000);
        
          }
          if (event.target.value === "singapore") {
            setSingapore;
               clearInterval(setAnchorage);
        clearInterval(setTokyo);
        clearInterval(setCurrent);
          }
          if (event.target.value === "tokyo") {
            setTokyo;
             clearInterval(setAnchorage);
        clearInterval(setCurrent);
        clearInterval(setSingapore);
          }
          if (event.target.value === "current") {
            setCurrent;
            clearInterval(setAnchorage);
        clearInterval(setTokyo);
        clearInterval(setSingapore);
          }
        }
      }
      
      let date = document.querySelector("#new-date");
      let time = document.querySelector("#current-time");
      let place = document.querySelector("#place");
      let citySelect = document.querySelector("#cities");
      citySelect.addEventListener("change", displayTime);


      //javascript for button to view all cities

