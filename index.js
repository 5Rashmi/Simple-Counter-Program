var display = document.getElementById("display");
var decBtn = document.getElementById("decBtn");
var resetBtn = document.getElementById("resetBtn");
var incBtn = document.getElementById("incBtn");
var count = 0;

decBtn.onclick = function () {
  count--;
  display.innerHTML = count;
};

incBtn.onclick = function () {
    count++;
    display.innerHTML = count;
};

resetBtn.onclick = function () {
    count = 0;
    display.innerHTML = count;
};
