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

$(document.documentElement).keydown(function(event){
    var key = mapping[event.keyCode];
    if (key) $(key).addClass('pressed');
});

$(document.documentElement).keyup(function(event){
    var key = mapping[event.keyCode];
    if (key) $(key).removeClass('pressed');
});
