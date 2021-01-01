var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);

//creating rectangle
  fixedRect = createSprite(400, 200, 50, 80);
 movingRect =  createSprite(400, 200, 80, 30);

 //giving shapecolor
 fixedRect.shapeColor = "yellow";
 movingRect.shapeColor = "blue";

 //show the colider radius
 fixedRect.debug = true;
 movingRect.debug = true
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX
  movingRect.y = mouseY

  //console.log(movingRect.x)
  //console.log(movingRect.x - fixedRect.x)
  //console.log(movingRect.y - fixedRect.y)

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
  {
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
else{
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "blue";

}
  drawSprites();
}