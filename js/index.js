var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function onload() {
  document.addEventListener("deviceready", onDeviceReady, false);
  console.log("ok so far");
}

function onDeviceReady() {
  console.log("ready");
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  test()
}

function onPause() {
  console.log("stop");
  // onpaus things...
}

function onResume() {
    test()
}

var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

var goCatch = "catch Pokemon";
var introCatch = "time to catch some pokemon";
var catchyes = "yes";
var catchno = "no";
var waitCatch = "catching...";
var pokeAdded = "";

var inCaX = 1500;
var cayesX = 1500;
var canoX = 1500;
var waitcaX = 1500;

var pokeCaught = [];
var pokemons = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];

var bg = new Image();

bg.src = "bg.png";

function test() {
  console.log("steady");

  draw()
}


function draw() {
  pixelRatio = window.devicePixelRatio || 1;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

  // fixed canvas resolution
  canvas.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvas.height = windowHeight * pixelRatio;
  canvas.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvas.style.height = windowHeight + 'px';

  ctx.font = "50px serif";
  ctx.fillStyle = "#fff";
  ctx.fillText(goCatch, 66, 1940);
  ctx.fillText(introCatch, inCaX, 305);
  ctx.fillText(catchyes, cayesX, 415);
  ctx.fillText(catchno, canoX, 517);
  ctx.fillText(waitCatch, waitcaX, 676);
  ctx.fillText(pokeCaught, 310, 676);
  ctx.fillText(pokeAdded, 93, 779);



  // ctx.drawImage(bg, 0, 0);

  requestAnimationFrame(draw, 10);
}


function catchbut() {
  console.log("go catch");

  inCaX = 66;
  catchTest()
}

function catchTest() {
  setTimeout(
    function() {
      console.log("catch test");
      cayesX = 130;
      canoX = 130;
      document.getElementById("catchyesbut").style.left = "42px";
      document.getElementById("catchnobut").style.left = "42px";
    }, 500);
}

function catchyesbut() {
  waitcaX = 56;
  catching()
}

function catching() {
  setTimeout(
    function() {
      console.log("catching");
      pokeCaught = pokemons[Math.floor(Math.random() * 3) + 1];
      pokeAdded = "pokemon added to pokedex";

    }, 1000);
}

function catchnobut() {
  pokeCaught = "";
  pokeAdded = "";
  inCaX = 1500;
  waitcaX = 1500;
  cayesX = 1500;
  canoX = 1500;
  document.getElementById("catchyesbut").style.left = "-400px";
  document.getElementById("catchnobut").style.left = "-400px";
}
