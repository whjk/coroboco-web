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
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200)
            connect(req.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
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
