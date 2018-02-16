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
        ellipse(10 + 30*i, 10 + 30 * j, maxSize, maxSize);
        fill(0);
      }
      else {
        ellipse(10 + 30*i, 10 + 30 * j, distance/4, distance/4);
        fill(255-distance*2);
      }

   }
  }
}
