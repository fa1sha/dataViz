function setup(){
  createCanvas(500, 500);
  print ('YAAAASSSS')
}

var maxSize = 30;
var minSize = 5;

function draw(){
    background(240);
  for (var i=0; i < 20; i++){
    for (var j = 0; j < 20; j++){
      var distance = dist(mouseX, mouseY, 10 + 30 * i, 10 + 30 * j);
      if (distance > 110){
        fill(0);
      }
      else {
        fill(255-distance*2);
      }

   }
  }
}
