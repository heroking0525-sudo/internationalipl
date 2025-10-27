let timer = 60;
const counter = document.getElementById("counter");
const joinBtn = document.getElementById("joinButton");

// Button always visible
joinBtn.classList.add("visible");

setInterval(() => {
  timer--;
  if (timer <= 0) timer = 60;
  counter.textContent = timer;
}, 1000);
