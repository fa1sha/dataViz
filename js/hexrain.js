// Setup function
function setup(){
  createCanvas(400, 400);
  console.log('Setup complete...');
}

function draw(){
  noStroke();
  colorMode(HSB, 400);
  for (var i = 0; i < 400; i++) {
    for (var j = 0; j < 400; j++) {
      fill(i * 10, j * 10, 400);
    rect(i * 10,j * 10, 10, 10);

    }
  }
}
