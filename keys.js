var mapping = {
  65: '.left',
  37: '.left',
  87: '.up',
  38: '.up',
  68: '.right',
  39: '.right',
  40: '.down',
  83: '.down'

};

function getreq(direction){
    var req = new XMLHttpRequest(), url = '/key/' + direction;
    req.open( "GET", url, false);
    req.send( null );
}

$(document.documentElement).keydown(function(event){
    var key = mapping[event.keyCode];
    if (key) $(key).addClass('pressed');
});

$(document.documentElement).keyup(function(event){
    var key = mapping[event.keyCode];
    if (key) $(key).removeClass('pressed');
    if(key == ".up"){ getreq("up"); }
    else if(key == ".down"){ getreq("down"); }
    else if(key == ".left"){ getreq("left"); }
    else if(key == ".right"){ getreq("right"); }
});
