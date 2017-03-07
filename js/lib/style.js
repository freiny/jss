var body = document.getElementById('body');
body.insertAdjacentHTML('afterend', '<div id="app"></div>');

function Component() {
  var obj = {};
  obj.renderJss = RenderJss();
  obj.renderHtml = RenderHtml();
  obj.components = {};
  obj.new = function(uid){
    obj.components[uid] = {
      'uid':uid,
      'style':{},
      'html':{},
      'render': function(){
        var html = obj.renderHtml(uid);
        var app = document.getElementById('app');
        app.insertAdjacentHTML('beforeend', html);
      },
      'update': function(){
        var style = obj.renderJss(obj.components[uid].style);
        var component = document.getElementById(uid);
        component.setAttribute("style", style);
      },
    }
  };
  obj.log = function(a){ console.log(obj); };
  return function(a) {
    if (typeof a === 'undefined') return obj;
    if (typeof a === 'string') {
      if (typeof obj.components[a] === 'undefined') {
        obj.new(a);
        return obj.components[a];
      }
      return obj.components[a];
    }

  };
}

//------------------------------------------------
function RenderJss(){
  var jss = {
    'x': function(a){ return 'left:' + a + 'px;'; },
    'y': function(a){ return 'top:' + a + 'px;'; },
    'z': function(a){ return 'z-index:' + a + ';'; },
    'w': function(a){ return 'width:' + a + 'px;'; },
    'h': function(a){ return 'height:' + a + 'px;'; },
    'c': function(a){ return 'color:rgba(' + a.join(',') + ');'; },
    'bc': function(a){ return 'background-color:rgba(' + a.join(',') + ');'; },
  };

  return function(obj){
    var ret = '';
    ret += 'position:absolute;';

    var keys = Object.keys(obj);
    for (i=0; i<keys.length; i++){
      key = keys[i];
      if (typeof jss[key] === 'undefined') {
        val = obj[key];
        ret += key + ':' + val + ';';
      } else {
        val = obj[key];
        ret += jss[key](val);
      }
    }
    return ret;
  };
}

//------------------------------------------------
function RenderHtml(){
  var html = {
    'div': function(a){ return '<div id="' + a.uid + '" style="' + a.style + '">' + a.inner + '</div>'; },
    'div-img': function(a){ return '<div id="' + a.uid + '-wrapper"><img id="' + a.uid + '" style="' + a.style + '" src="' + a.url + '"></div>'; },
  };

  return function(a){
    console.log(a);
    var component = this.components[a];
    var style = this.renderJss(component.style);
    return html[component.html.tag]({'uid':a, 'style':style, 'url':component.html.url, 'inner':component.html.inner});
  };
}

//------------------------------------------------
