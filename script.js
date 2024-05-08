// Add your script below this line, but above the next comment!

// Part 1: Displaying the Date and Time
function getBtnAndShow() {
  function displayDateAndTime() {
    const timeDiv = document.getElementById("time");
    timeDiv.innerHTML = new Date().toString();
  }

  const timeCheckBtn = document.getElementById("timeCheckBtn");
  timeCheckBtn.addEventListener("click", displayDateAndTime);
}

// Part 2: Clearing the Date and Time
function clearDateAndTime() {
  const timeDiv = document.getElementById("time");
  timeDiv.innerHTML = "";
}

// Part 3: Calling Our Functions
getBtnAndShow();
setInterval(clearDateAndTime, 5000);

// This export is to enable testing of your two testable primary functions.
// PLEASE DO NOT EDIT below this line!!!
module.exports.getBtnAndShow = getBtnAndShow;
module.exports.clearDateAndTime = clearDateAndTime;


