document.getElementById("status").innerText = "System Online";

function moveForward() {
  console.log("Forward");
}

function moveBackward() {
  console.log("Backward");
}

function stopRobot() {
  console.log("Stop");
}

setInterval(() => {

  let angle = Math.floor(Math.random() * 180);
  let power = Math.floor(Math.random() * 100);

  document.getElementById("angle").innerText = angle;
  document.getElementById("power").innerText = power;

}, 1000);
