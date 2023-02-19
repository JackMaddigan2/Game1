function preload() {

}

function setup(){
   cnv = new Canvas(windowWidth, windowHeight);
  topSquare = new Sprite(0, 0, width*2, 200, 'k');
  topSquare.color=color('red');
  
  bottomSquare = new Sprite(0, height, width*2, 200, 'k');
  bottomSquare.color=color('cyan');

  testSquare= new Sprite(0, height/2, 50, 50, 'd');
  testSquare.color=color('red');
  testSquare.vel.x=2;
  
  walls();
}

function walls() {
  // walls
  console.log("walls");
  wallLH = new Sprite(-8, height / 2, 8, height, 'k');
  wallRH = new Sprite(width + 8, height / 2, 8, height, 'k');
  wallTop = new Sprite(0, -8, width * 2, 8, 'k');
  wallBot = new Sprite(width, height + 8, width * 2, 8, 'k');
}


function createNewSprite(){
  
}

function draw(){
    background('black');
}

document.addEventListener("keydown", function(event) {
  if (event.code === 'ArrowUp') {
      testSquare.vel.x=0;
      testSquare.vel.y=-8;
      createNewSprite();
  }else  if (event.code === 'ArrowDown') {
      testSquare.vel.x=0;
      testSquare.vel.y=8;
      createNewSprite();

  }
});