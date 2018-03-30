var apikey = '83dc7e09b7c2afef38acbc60ba1d7a5f';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var weatherData;
var city;
var button;
var description = '';
var temperature = 0;
var humidity = 0;
var pressure = 0;
var time;

var img;

function setup(){
  createCanvas (350,170);
  noLoop();
  button = select ('#submit');
  city = select('#city');
  time = select ('#dt');
  button.mousePressed(queryAPI);

  noStroke();
  fill(255,136,74);rect(300,0,50,10);

  fill(255,115,125);rect(250,0,50,10);

  fill(255,111,172);rect(200,0,50,10);

  fill(232,122,210);rect(150,0,50,10);

  fill(177,137,231);rect(100,0,50,10);

  fill(113,147,233);rect(50,0,50,10);

  fill(39,152,217);rect(0,0,50,10);

}

function queryAPI(){
  var request = baseURL + city.value() + '&apikey=' + apikey;
  loadJSON(request, getWeatherData);
}

function getWeatherData(apiResponse){
  weatherData = apiResponse;
  description = weatherData.weather[0].description;
  icon = weatherData.weather[0].icon;
  print(icon);
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  wind = weatherData.wind.speed;
  min = weatherData.main.temp_min;
  max = weatherData.main.temp_max;
  print(weatherData);
  getImage(icon)
  // redraw();
}

function getImage(icon){
  var imageURL = '../img/wIcon/' + str(icon) + '.png';
  var myImage = loadImage(imageURL, drawGraph);
}

function drawGraph(anImage){
  background(238);
  if (temperature < 320){
  background(255,136,74)
  }
  if (temperature < 300){
  background(255,115,125)
  }
  if (temperature < 294){
  background(255,111,172)
  }
  if (temperature < 288){
  background(232,122,210)
  }
  if (temperature < 283){
  background(177,137,231)
  }
  if (temperature < 277){
  background(113,147,233)
  }
  if (temperature < 272){
  background(39,152,217)
  }
  fill(0);
  textFont('Muli');
  textAlign(CENTER);
  if (weatherData){
textSize(18);
  text(((temperature*(9/5))-459.67).toFixed(0) + '\xB0'+ ' F', 175, 110);
textStyle(BOLD);
  text('Weather Forecast' , 175, 35);
  //line(120, 37, 235, 37);
textSize(14);
  text(description.toUpperCase(0), 175, 60);
  //text(city.value(), 175, 80);
  textStyle(NORMAL);

  text( 'min: ' + ((min*(9/5))-459.67).toFixed(0)+ '\xB0', 140, 135);
  text('max: ' + ((max*(9/5))-459.67).toFixed(0)+ '\xB0', 210, 135);
  text((wind*2.23694).toFixed(0) + ' mph wind', 175, 155);
  image(anImage,155,60,40,40);

  //colorbar
  noStroke();
  fill(255,136,74);rect(300,0,50,10);

  fill(255,115,125);rect(250,0,50,10);

  fill(255,111,172);rect(200,0,50,10);

  fill(232,122,210);rect(150,0,50,10);

  fill(177,137,231);rect(100,0,50,10);

  fill(113,147,233);rect(50,0,50,10);

  fill(39,152,217);rect(0,0,50,10);
}
}
