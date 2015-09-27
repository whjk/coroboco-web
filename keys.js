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

function connect(value){
  if(value){ document.getElementById('yes').display = inherit; document.getElementById('no').display = none; }
  else if(!value){ document.getElementById('yes').display = none; document.getElementById('no').display = inherit; }
}



function getreq(direction){
    var req = new XMLHttpRequest(), url = '/key/' + direction;
    req.open( "GET", url, false);
    req.send( null );
    return req.responseText;
}

$(document.documentElement).keydown(function(event){
    var key = mapping[event.keyCode];
    if (key) $(key).addClass('pressed');
});

$(document.documentElement).keyup(function(event){

    var key = mapping[event.keyCode];
    if (key) $(key).removeClass('pressed');
    if(key == ".up"){ connect(getreq("up")); }
    else if(key == ".down"){ connect(getreq("down")); }
    else if(key == ".left"){ connect(getreq("left")); }
    else if(key == ".right"){ connect(getreq("right")); }
});
