let counter = document.querySelector("#count");
let incrementBtn = document.querySelector("#incrementBtn");
let decrementBtn = document.querySelector("#decrementBtn");
let reset = document.querySelector("#resetBtn");
let body = document.querySelector("#body");

let initialValue = 0;
incrementBtn.addEventListener("click", function () {
  initialValue++;
  if (initialValue == 7) {
    body.style.backgroundColor = "blue";
  } else if (initialValue == 1) {
    body.style.backgroundColor = "grey";
  } else if (initialValue == 2) {
    body.style.backgroundColor = "red";
  } else if (initialValue == 3) {
    body.style.backgroundColor = "orange";
  } else if (initialValue == 4) {
    body.style.backgroundColor = "cyan";
  } else if (initialValue == 5) {
    body.style.backgroundColor = "magenta";
  } else if (initialValue == 6) {
    body.style.backgroundColor = "green";
  } else {
    body.style.backgroundColor = "white";
  }
  counter.innerHTML = initialValue;
});
decrementBtn.addEventListener("click", function () {
  if (initialValue <= 0) {
    counter.innerHTML = initialValue;
  } else {
    initialValue--;
    counter.innerHTML = initialValue;
  }
});

resetBtn.addEventListener("click", function () {
  initialValue = 0;
  counter.innerHTML = initialValue;
});
