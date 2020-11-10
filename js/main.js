
// Modal pop

window.setInterval(function modalPop() {

  const hPosition = document.getElementById("human").offsetLeft;
  const oPosition = document.getElementById("object").offsetLeft;
  const oPositionTwo = document.getElementById("object-two").offsetLeft;
  const oPositionThree = document.getElementById("object-three").offsetLeft;

  if (hPosition === 375 && oPosition === 375) {
    document.getElementById("modal-one").style.opacity = "1";
  }

  else if (hPosition === 250 && oPositionTwo === 250) {
    document.getElementById("modal-two").style.opacity = "1";
  }

  else if (hPosition === 500 && oPositionThree === 500) {
    document.getElementById("modal-three").style.opacity = "1";
  }
}, 900);


// Modal close

document.querySelector(".close-button").onclick = closeMenu;

function closeMenu() {
  document.querySelector('.modal').classList.add('modal-close');
}


// Movement

document.onkeydown = detectKey;
function detectKey(e) {

  const hPosition = document.getElementById("human").offsetLeft;
  const oPosition = document.getElementById("object").offsetLeft;

  e = e || window.event;
  if (hPosition === 375 && e.keyCode == '37') {
    // left arrow
    document.getElementById("human").style.left = "250px";
    document.getElementById("human").src = "https://imgur.com/FzjfoU0.png";
  }

  else if (hPosition === 250 && e.keyCode == '39') {
    // right arrow
    document.getElementById("human").style.left = "375px";
    document.getElementById("human").src = "https://imgur.com/zECYEfe.png";
  }

  else if (hPosition === 250 && e.keyCode == '37') {
    // left arrow
    document.getElementById("human").style.left = "250px";
    document.getElementById("human").src = "https://imgur.com/FzjfoU0.png";
  }

  else if (hPosition === 375 && e.keyCode == '39') {
    // right arrow
    document.getElementById("human").style.left = "500px";
    document.getElementById("human").src = "https://imgur.com/zECYEfe.png";
  }

  else if (hPosition === 500 && e.keyCode == '37') {
    // left arrow
    document.getElementById("human").style.left = "375px";
    document.getElementById("human").src = "https://imgur.com/FzjfoU0.png";
  }

  else if (hPosition === 500 && e.keyCode == '39') {
    // right arrow
    document.getElementById("human").style.left = "500px";
    document.getElementById("human").src = "https://imgur.com/zECYEfe.png";
  }

  else {
    document.getElementById("human").style.left = "375px";
    document.getElementById("human").src = "https://imgur.com/FzjfoU0.png";
  }
}

// Happy Doggo

window.setInterval(function happyDoggo() {

  const hPosition = document.getElementById("human").offsetLeft;
  const oPosition = document.getElementById("object").offsetLeft;
  const oPositionTwo = document.getElementById("object-two").offsetLeft;
  const oPositionThree = document.getElementById("object-three").offsetLeft;

  if (hPosition === 375 && oPosition === 250 || hPosition === 250 && oPositionTwo === 200) {
    document.getElementById("human").src = "https://imgur.com/DCgxRNo.png";
  }

  else if (hPosition === 500 && oPositionThree === 400) {
    document.getElementById("human").src = "https://imgur.com/blOwZeQ.png";
  }

  else if (hPosition === 375 && oPosition === 0 || hPosition === 375 && oPosition === 500 || hPosition === 250 && oPositionTwo === 145 || hPosition === 250 && oPositionTwo === 305 || hPosition === 500 && oPositionThree === 100 || hPosition === 500 && oPositionThree === 600) {
    document.getElementById("human").src = "https://imgur.com/FzjfoU0.png";
  }

  else if (hPosition === 500 && oPositionThree === 100 || hPosition === 500 && oPositionThree === 300) {
    document.getElementById("human").src = "https://imgur.com/zECYEfe.png";
  }

}, 0.5);


//Hide Catch

window.setInterval(function hideCatch() {

  const hPosition = document.getElementById("human").offsetLeft;
  const oPosition = document.getElementById("object").offsetLeft;
  const oPositionTwo = document.getElementById("object-two").offsetLeft;
  const oPositionThree = document.getElementById("object-three").offsetLeft;

  if (hPosition === 375 && oPosition === 375) {
    document.getElementById('object').style.visibility = "hidden";
    document.getElementById("human").src = "https://imgur.com/8MJdBQQ.png";
  }

  else if (hPosition === 250 && oPositionTwo === 250) {
    document.getElementById('object-two').style.visibility = "hidden";
    document.getElementById("human").src = "https://imgur.com/8MJdBQQ.png";
  }

  else if (hPosition === 500 && oPositionThree === 500) {
    document.getElementById('object-three').style.visibility = "hidden";
    document.getElementById("human").src = "https://imgur.com/8MJdBQQ.png";
  }

  else {
    document.getElementById('object').style.visibility = "visible";
    document.getElementById('object-two').style.visibility = "visible";
    document.getElementById('object-three').style.visibility = "visible";
  }

}, 0.5);


// Modal Pause

window.setInterval(function startCatch() {

  var modalTrue = document.getElementById("modal-one").style.opacity;
  var modalTwoTrue = document.getElementById("modal-two").style.opacity;
  var modalThreeTrue = document.getElementById("modal-three").style.opacity;

  if (modalTrue === "1") {

    setTimeout(function () {
      document.querySelector('.human').style.visibility = "hidden";
      document.querySelector('.object').style.visibility = "hidden";
      document.querySelector('.object-two').style.visibility = "hidden";
      document.querySelector('.object-three').style.visibility = "hidden";
    }, 200);

  } else if (modalTwoTrue === "1") {

    setTimeout(function () {
      document.querySelector('.human').style.visibility = "hidden";
      document.querySelector('.object').style.visibility = "hidden";
      document.querySelector('.object-two').style.visibility = "hidden";
      document.querySelector('.object-three').style.visibility = "hidden";
    }, 200);

  } else if (modalThreeTrue === "1") {

    setTimeout(function () {
      document.querySelector('.human').style.visibility = "hidden";
      document.querySelector('.object').style.visibility = "hidden";
      document.querySelector('.object-two').style.visibility = "hidden";
      document.querySelector('.object-three').style.visibility = "hidden";
    }, 200);

  }
}, 3.5);

// //POWER ON

document.getElementById("start").onclick = powerOn;
document.querySelector(".mini-start").onclick = powerOn;

function powerOn() {
  document.querySelector('.start-light').classList.add('power-on');
  document.getElementById('human').style.visibility = 'visible';
  document.querySelector('.screen').style.zIndex = '1';
  document.querySelector('.object').style.animation = 'objectAnimation 4.5s infinite step-end';
  document.querySelector('.object-two').style.animation = 'objectAnimationTwo 5s infinite step-end';
  document.querySelector('.object-three').style.animation = 'objectAnimationThree 3.5s infinite step-end';
}
