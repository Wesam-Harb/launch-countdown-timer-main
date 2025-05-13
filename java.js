let secondsFlip = document.querySelector(".seconds .flip");
let secondsStatic = document.querySelector(".seconds .static");
let minutesFlip = document.querySelector(".minutes .flip");
let minutesStatic = document.querySelector(".minutes .static");
let hoursFlip = document.querySelector(".hours .flip");
let hoursStatic = document.querySelector(".hours .static");
let daysFlip = document.querySelector(".days .flip");
let daysStatic = document.querySelector(".days .static");

let seconds = setInterval(function () {
  if (secondsFlip.firstChild.textContent > 0) {
    secondsFlip.firstChild.textContent =
      parseInt(secondsFlip.firstChild.textContent) - 1;
    secondsStatic.firstChild.textContent =
      parseInt(secondsStatic.firstChild.textContent) - 1;
    if (secondsFlip.firstChild.textContent < 10) {
      secondsFlip.firstChild.textContent =
        "0" + secondsFlip.firstChild.textContent;
      secondsStatic.firstChild.textContent =
        "0" + secondsStatic.firstChild.textContent;
    }
  } else if (secondsFlip.firstChild.textContent == "00") {
    secondsFlip.firstChild.textContent = "59";
    secondsStatic.firstChild.textContent = "59";
  }
  if (daysFlip.textContent === "00" && secondsFlip.textContent === "00") {
    clearInterval(seconds);
    secondsFlip.style.animation = "none";
  }
}, 1000);

let minutes = setInterval(
  () => updateTime(minutesFlip, minutesStatic, "60"),
  1000 * 60
);
let hours = setInterval(
  () => updateTime(hoursFlip, hoursStatic, "23"),
  1000 * 60 * 60
);
let days = setInterval(
  () => updateTime(daysFlip, daysStatic, "00"),
  1000 * 60 * 60 * 24
);

function updateTime(flip, static, resetNumber) {
  flip.style.animation = "none";
  void flip.offsetWidth;
  flip.style.animation = "flip 1s linear forwards";
  if (flip.firstChild.textContent > 0) {
    let value = parseInt(flip.firstChild.textContent) - 1;
    flip.firstChild.textContent = value;
    static.firstChild.textContent = value;
    value = value < 0 ? resetNumber : value.toString().padStart(2, "0");
    flip.firstChild.textContent = value;
    static.firstChild.textContent = value;
  } else {
    flip.firstChild.textContent = resetNumber;
    static.firstChild.textContent = resetNumber;
  }
  if (daysFlip.textContent == "00" && flip.textContent == "00") {
    clearInterval(flip.parentElement.className);
    flip.style.animation = "none";
  }
}
