var app = document.getElementById('app');
console.log(app);

var b = document.getElementById('text1');
var x = component('text1');
x.style.x = 4;
x.update();

window.setTimeout(function(){
  x.style.x += 15;
  x.update();
}, 1000);
