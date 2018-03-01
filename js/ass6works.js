var manPluto;
var topY = 100;
var bottomY = 450;
var leftX = 100;
var rightX = 700;
var textLeft = 60;
var title = 'Manhattan Neighborhood Skyline'
var yTitle = 'number of floors'
var buttonLabels = ['All Neighborhoods', '1,500+ Buildings', '< 1,500 Buildings'];
var buttonX = 355;
var buttonY = 100;
var buttonL = 120;
var buttonH = 20;
var buttonSpa = 10;
var selButton = 0;
var topBuild = new p5.Table;
var bottomBuild = new p5.Table;


function preload(){
  manPluto = loadTable ('../data/Ass5Datab.csv','csv', 'header');
  console.log('Table has loaded');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 500);
  textAlign(RIGHT, CENTER);
  textSize(12);
  textFont('Muli');
  console.log('Setup complete...');
  print(manPluto.getRowCount()+ 'rows loaded');
  print(manPluto.getColumnCount()+ 'columns loaded...');
  createNewTable();
  noLoop();
}

function drawLabels(){
  for (var i = 0; i < 16; i++) {
    noStroke();
    fill(200);
    text(i, textLeft, map(i, 0, 15, bottomY, topY));
    stroke(200);
    strokeWeight(2);
    line(leftX-30, bottomY, rightX + 40, bottomY);
    line(leftX - 25,topY,leftX - 25,bottomY+15);

    stroke(255,230,173);
    strokeWeight(1);
    line (320,60,320,80);
    fill(255,230,173);
    rect(317.5,70,5,5);

    stroke(121,175,255);
    strokeWeight(2);
    line (50,70,90,70);
  }
angleMode(DEGREES);
strokeWeight(1);
fill(121,175,255)
textSize(16);
  text('N', 80, 480);
  text('S', 740, 480);

  rotate(270);
  text(yTitle, -200, 20);

  rotate(-270);
  text ('neighborhoods',450,465);
  text ('Tallest Building Height',270,70);
  text ('Percentage of Elevator Residences',600,70);
  line(leftX+10, bottomY+30,rightX-10,bottomY+30);
  textSize(24);
  text(title, 400, 30);
}


// ***** Create new table function ******* //
function createNewTable(){
  topBuild.addColumn('ID');
  topBuild.addColumn('Mean_Floor');
  bottomBuild.addColumn('ID');
  bottomBuild.addColumn('Mean_Floor');
  for (var i = 0; i < manPluto.getRowCount(); i++) {
    var buildings = manPluto.getNum(i, 'TotalBuild');
    if (buildings >= 1500) {
      var newRow = topBuild.addRow();
      newRow.setNum('ID', manPluto.getNum(i, 'ID'));
      newRow.setNum('Mean_Floor', manPluto.getNum(i, 'Mean_Floor'));
    }
    else {
      var newRow = bottomBuild.addRow();
      newRow.setNum('ID', manPluto.getNum(i, 'ID'));
      newRow.setNum('Mean_Floor', manPluto.getNum(i, 'Mean_Floor'));
    }
  }
  print('it worksss');
}



function drawBars(){
if (selButton == 0){
  for (var i = 0; i < manPluto.getRowCount(); i++) {
    var neighborhood = map(manPluto.getNum(i, 'ID'), 0, 27, leftX-25, rightX);
    var buildHeight = map(manPluto.getNum(i, 'Mean_Floor'), 0, 15, 0, 350);
    stroke(121,175,255);
    strokeWeight(2);
    rect(neighborhood, bottomY, 23, -buildHeight);

  }
}
else if (selButton == 1){
  for (var i = 0; i < bottomBuild.getRowCount(); i++) {
    var neighborhood = map(bottomBuild.getNum(i, 'ID'), 0, 27, leftX-25, rightX);
    var buildHeight = map(bottomBuild.getNum(i, 'Mean_Floor'), 0, 15, 0, 350);
    stroke(200);
    strokeWeight(2);
    rect(neighborhood, bottomY, 23, -buildHeight);
    }

    for (var i = 0; i < topBuild.getRowCount(); i++) {
      var neighborhood = map(topBuild.getNum(i, 'ID'), 0, 27, leftX-25, rightX);
      var buildHeight = map(topBuild.getNum(i, 'Mean_Floor'), 0, 15, 0, 350);
      stroke(121,175,255);
      strokeWeight(2);
      fill(121,175,255);
      rect(neighborhood, bottomY, 23, -buildHeight);
      }
    }
    else {
      for (var i = 0; i < bottomBuild.getRowCount(); i++) {
        var neighborhood = map(bottomBuild.getNum(i, 'ID'), 0, 27, leftX-25, rightX);
        var buildHeight = map(bottomBuild.getNum(i, 'Mean_Floor'), 0, 15, 0, 350);
        stroke(121,175,255);
        strokeWeight(2);
        fill(121,175,255);
        rect(neighborhood, bottomY, 23, -buildHeight);
        }

        for (var i = 0; i < topBuild.getRowCount(); i++) {
          var neighborhood = map(topBuild.getNum(i, 'ID'), 0, 27, leftX-25, rightX);
          var buildHeight = map(topBuild.getNum(i, 'Mean_Floor'), 0, 15, 0, 350);
          stroke(200);
          strokeWeight(2);
        fill(0);
          rect(neighborhood, bottomY, 23, -buildHeight);
          }
        }

}

function drawEleLine(){
  for (var i = 0; i < manPluto.getRowCount(); i++) {
    var neighborhood = map(manPluto.getNum(i, 'ID'), 0, 27, leftX-25, rightX);
    var buildHeight = map(manPluto.getNum(i, 'Mean_Floor'), 0, 15, 0, 350);
    strokeWeight(1);
    stroke(255,230,173);
    line(neighborhood+11.5,bottomY-10,neighborhood+11.5,460-buildHeight);
}
}



function drawEle(){
  fill(255,230,173);
  noStroke();
  rect(107.5,425,5,5);
  rect(130.5,410,5,5);
  rect(153.5,420,5,5);
  rect(177,435,5,5);
  rect(200,410,5,5);
  rect(223,430,5,5);
  rect(246.5,385,5,5);
  rect(269.5,430,5,5);
  rect(293,385,5,5);
  rect(316,420,5,5);
  rect(339,390,5,5);
  rect(362.5,320,5,5);
  rect(385.5,410,5,5);
  rect(408.5,390,5,5);
  rect(431.5,410,5,5);
  rect(454.5,420,5,5);
  rect(478,377,5,5);
  rect(501.5,205,5,5);
  rect(524.5,410,5,5);
  rect(547.5,400,5,5);
  rect(570.5,385,5,5);
  rect(594,410,5,5);
  rect(617.5,415,5,5);
  rect(640.5,415,5,5);
  rect(663.5,415,5,5);
  rect(687,385,5,5);
  rect(709.5,325,5,5);
}

// ***** Draw buttons function ***** //
function drawButtons(){
  textSize(12);
  textAlign(CENTER, TOP);
  for (var i = 0; i < buttonLabels.length; i++) {
    if (selButton == i) {
      fill(255,230,173);
    }
    else {
      fill(121,175,255);
    }
    stroke(121,175,255);
    rect(buttonX + i * (buttonL + buttonSpa), buttonY, buttonL, buttonH);
    fill(0);
    noStroke();
    text(buttonLabels[i], buttonX + i * (buttonL + buttonSpa) + buttonL/2, buttonY + 2);
  }
  textAlign(RIGHT, CENTER);
}

function draw(){

  background(0);
  fill(0);

  drawBars();
  drawLabels();
  drawButtons();
/*drawEleLine();
drawEle();

  /*noStroke();*/
  noFill(0);

/*for (var i = 0; i < manPluto.getRowCount(); i++){
    var neighborhood = map(manPluto.getNum(i, 'ID'), 0, 27, leftX-25, rightX);
    var buildHeight = map(manPluto.getNum(i, 'Mean_Floor'), 0, 15, 0, 350);
    var elevator = map(manPluto.getNum(i,'Walkup_Per'), 0,1,0,350);
    fill(255,230,173);
    stroke(255,230,173);
    rect(neighborhood+10,450-buildHeight,5,5);
  }*/

}
// ****** Mouse pressed function ******* //
function mousePressed(){
  if (mouseX >= buttonX && mouseX <= (buttonX + buttonL) && mouseY >= buttonSpa && mouseY <= (buttonY + buttonH)) {
    selButton = 0;
    redraw();
  }
  else if (mouseX >= (buttonX + buttonL + buttonSpa) && mouseX <= (buttonX + buttonL * 2 + buttonSpa) && mouseY >= buttonY && mouseY <= (buttonY + buttonH)){
    selButton = 1;
    redraw();
  }
  else if (mouseX >= (buttonX + buttonL + buttonSpa) && mouseX <= (buttonX + buttonL * 3 + buttonSpa * 2) && mouseY >= buttonY && mouseY <= (buttonY + buttonH)){
    selButton = 2;
    redraw();
  }
}
