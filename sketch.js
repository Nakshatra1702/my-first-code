var box
function setup() {

  createCanvas(400,400);
  box=createSprite(200,200,50,50)
}

function draw() 
{
  background(100);
  if (keyDown("left")){
    box.x=box.x-5
  }
  if (keyDown("right")){
    box.x=box.x+5
  }
  if (keyDown("up")){
    box.y=box.y-5
  }
  if (keyDown("down")){
    box.y=box.y+5
  }
drawSprites()
}




