var fixed,moving
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "pink"

  moving = createSprite (300, 200, 50, 50)
  moving.shapeColor = "yellow"

  rectangle1 = createSprite (250, 250, 50, 50)

  rectangle2 = createSprite (350, 350, 50, 50)
}

function draw() {
  background("black");
  moving.x = World.mouseX
  moving.y = World.mouseY

 if(touching (moving, rectangle1)){
moving.shapeColor = "white"
 } 

 else {
  moving.shapeColor = "yellow"
 }
  drawSprites();
}
