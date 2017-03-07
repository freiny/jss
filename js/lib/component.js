var component = Component();
var c;
//------------------------------------------------
c = component('body1')
c.style = {
  'x':10,
  'y':10,
  'z':50,
  'w':250,
  'h':250,
};

c.html = {
  'tag':'div-img',
  'url':'image/logo.jpg'
}
c.render();

//------------------------------------------------
c = component('body2')
c.style = {
  'x':40,
  'y':40,
  'z':60,
  'w':250,
  'h':250,
};

c.html = {
  'tag':'div-img',
  'url':'image/logo.jpg',
  // 'inner':'helloworld',
}
c.render();

//------------------------------------------------
c = component('text1')
c.style = {
  'x':80,
  'y':80,
  'z':60,
  'w':300,
  'h':30,
  'c':[50, 100, 200, 200],
  'bc':[0, 0, 255, 255],
};

c.html = {
  'tag':'div',
  'inner':'asdf',
  'onOver': function(){ console.log('HOVER');},
}
c.render();

//------------------------------------------------
