var fps = 50; // 50 кадров в секунду
// var timer = setInterval(function() {
 
// }, 1000 / fps)
var countElem = document.getElementById("my-id"); 
var imageElem = document.getElementById("image");
var count = 1;
var padding =10;
var timer = setInterval(function() {
  // console.log(count++);
  // countElem.innerHTML=count;
  imageElem.style.paddingLeft=""+padding+"px";
  padding+=1;
  if (padding > 500) {
    clearInterval(timer); // конец через 2 секунды
    return;
  }
},
  12)

 var fps = 50; // 50 кадров в секунду
// var timer = setInterval(function() {
 
// }, 1000 / fps)
var countElemTwo = document.getElementById("you-id"); 
var imageElemTwo = document.getElementById("imageTwo");
var countTwo = 1;
var paddingTwo =10;
var timerTwo = setInterval(function() {
  // console.log(count++);
  // countElem.innerHTML=count;
  imageElemTwo.style.paddingLeft=""+paddingTwo+"px";
  paddingTwo+=1;
  if (paddingTwo > 500) {
    clearInterval(timerTwo); // конец через 2 секунды
    return;
  }
},
  1)
  
 