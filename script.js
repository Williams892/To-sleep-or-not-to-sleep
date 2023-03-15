/* Declare variables below to save the different sections (divs) of your story*/
let storyopening = document.querySelector(".storyopening");
let optiononescreen = document.querySelector(".optiononescreen");
let optiontwoscreen = document.querySelector(".optiontwoscreen");
let optionone = document.querySelector(".optiononebt");
let optiontwo = document.querySelector(".optiontwobt");
let optionbathsroom = document.querySelector(".optionbathsroombt");
let optionlivings = document.querySelector(".optionlivingsbt");
let optionteeths = document.querySelector(".optionteethsbt");
let optionbaths = document.querySelector(".optionbathsbt");

let optionOneEnd=document.querySelector(".option-one-end");
// let  = document.querySelector(".");
// let  = document.querySelector(".");
// let  = document.querySelector(".");
// let  = document.querySelector(".");
// let  = document.querySelector(".");

optionone.onclick = function(){
  storyopening.style.display = "none";
  optiononescreen.style.display = "block";
};

optiontwo.onclick = function(){
  storyopening.style.display = "none";
  optiontwoscreen.style.display = "block";
};


optionbathsroom.onclick=function(){
  storyopening.style.display="none";
  optionOneEnd.style.display="block";
};
/*
INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
