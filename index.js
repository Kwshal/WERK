let leavetimeEl = document.getElementById("leavetime-el");
let enterTimeEl = document.getElementById("back-home-time");
let clockInEl = document.getElementById("clock-in-time");
let clockOutEl = document.getElementById("clock-out-time");

let timeBtns = document.querySelectorAll(".time-btn");

timeBtns.forEach((btn) => {
     btn.addEventListener("click", addtime);
});

function addtime() {
     let time = new Date();
     let hours = time.getHours();
     let minutes = time.getMinutes().toString().padStart(2, "0");
     let timeString = hours + ":" + minutes;
     this.parentElement.innerHTML = timeString;
     console.log(typeof minutes);
}
