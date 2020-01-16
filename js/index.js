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
  localStorage.pika1ls = pika1;
  localStorage.bulba1ls = bulba1;
  localStorage.char1ls = char1;
  localStorage.squi1ls = squi1;
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
var pokeImgY = 15000;
var pika1X = 1500;
var bulba1X = 1500;
var char1X = 1500;
var squi1X = 1500;

var goPokedex = "pokedex";

var pokeCaught = [];
var pokemons = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];

var pika1 = 0;
var bulba1 = 0;
var char1 = 0;
var squi1 = 0;

var bg = new Image();
var pokeImg = new Image();

bg.src = "bg.png";
pokeImg.src = "pokedexTab.png";

function test() {
  console.log("steady");

  if (localStorage.pika1ls) {
    pika1 = Number(localStorage.pika1ls);
  }
  if (localStorage.bulba1ls) {
    bulba1 = Number(localStorage.bulba1ls);
  }
  if (localStorage.char1ls) {
    char1 = Number(localStorage.char1ls);
  }
  if (localStorage.squi1ls) {
    squi1 = Number(localStorage.squi1ls);
  }

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
  ctx.fillText(goPokedex, 66, 1839);

  ctx.fillText(pika1, pika1X, 371);
  ctx.fillText(bulba1, bulba1X, 491);
  ctx.fillText(char1, char1X, 621);
  ctx.fillText(squi1, squi1X, 748);

  ctx.drawImage(pokeImg, 56, pokeImgY);

  // ctx.drawImage(bg, 0, 0);

  requestAnimationFrame(draw, 10);
}


function catchbut() {
  console.log("go catch");

  pokeImgY = 15000;
  pika1X = 1500;
  bulba1X = 1500;
  char1X = 1500;
  squi1X = 1500;
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
      pokeCaught = pokemons[Math.floor(Math.random() * 4)];
      console.log(pokeCaught);
      if (pokeCaught === "Pikachu") {
        pika1 += 1;
        localStorage.pika1ls = pika1;
      }
      if (pokeCaught === "Bulbasaur") {
        bulba1 += 1;
        localStorage.bulba1ls = bulba1;
      }
      if (pokeCaught === "Charmander") {
        char1 += 1;
        localStorage.char1ls = char1;
      }
      if (pokeCaught === "Squirtle") {
        squi1 += 1;
        localStorage.squi1ls = squi1;
      }
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

function pokedexbut() {
  catchnobut()
  pokeImgY = 151;
  pika1X = 455;
  bulba1X = 455;
  char1X = 455;
  squi1X = 455;
}
