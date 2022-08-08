//Green
function green_f() {
  document.querySelector("body").style.background = "greenyellow";
  document.querySelector(".green_t").style.display= "block";
  setTimeout(() => {
    document.querySelector(".green_t").style.display= "none";
    }, 1000);
} 
//Blue
function blue_f() {
    document.querySelector("body").style.background= "blue";
    document.querySelector(".blue_t").style.display= "block";
  setTimeout(() => {
    document.querySelector(".blue_t").style.display= "none";
    }, 1000);
}
//Yellow
function yellow_f() {
    document.querySelector("body").style.background= "yellow";
    document.querySelector(".yellow_t").style.display= "block";
  setTimeout(() => {
    document.querySelector(".yellow_t").style.display= "none";
    }, 1000);
}
//Open Modal
function open0() {
    document.querySelector(".box").style.display = "block";
}
//Close Modal
function close0() {
  document.querySelector(".box").style.display = "none";
} 
