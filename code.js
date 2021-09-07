var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var line1=createSprite(250,50,300,5);
line1.shapeColor="black";
var line2=createSprite(100,100,200,5);
line2.shapeColor="black";
var line3=createSprite(300,150,250,5);
line3.shapeColor="black";
var line4=createSprite(100,200,200,5);
line4.shapeColor="black";
var line5=createSprite(300,250,300,5);
line5.shapeColor="black";
var line6=createSprite(100,300,200,5);
line6.shapeColor="black";
var line7=createSprite(250,350,300,5);
line7.shapeColor="black";
var goal=createSprite(250,376,300,50);
goal.shapeColor="skyblue";
var start=createSprite(250,24,300,50);
start.shapeColor="pink";
var player=createSprite(250,25,15,15);
player.shapeColor="lightgreen";


var pong2=createSprite(170,70,10,10);
pong2.shapeColor="red";

var pong3=createSprite(300,100,10,10);
pong3.shapeColor="red";

var pong4=createSprite(190,120,10,10);
pong4.shapeColor="red";

var pong5=createSprite(120,150,10,10);
pong5.shapeColor="red";

var pong6=createSprite(30,150,10,10);
pong6.shapeColor="red";

var pong7=createSprite(190,175,10,10);
pong7.shapeColor="red";

var pong8=createSprite(220,200,10,10);
pong8.shapeColor="red";

var pong9=createSprite(320,200,10,10);
pong9.shapeColor="red";

var pong10=createSprite(170,225,10,10);
pong10.shapeColor="red";

var pong11=createSprite(80,250,10,10);
pong11.shapeColor="red";

var pong12=createSprite(40,250,10,10);
pong12.shapeColor="red";

var pong13=createSprite(170,275,10,10);
pong13.shapeColor="red";

var pong14=createSprite(250,300,10,10);
pong14.shapeColor="red";

var pong15=createSprite(350,300,10,10);
pong15.shapeColor="red";

var pong16=createSprite(190,325,10,10);
pong16.shapeColor="red";

var pong17=createSprite(150,325,10,10);
pong17.shapeColor="red";

var pong18=createSprite(30,350,10,10);
pong18.shapeColor="red";

var pong19=createSprite(80,350,10,10);
pong19.shapeColor="red";
 pong2.velocityY=2;
  pong3.velocityX=5;
  pong4.velocityY=5;
  pong5.velocityX=5;
  pong6.velocityY=5;
  pong7.velocityY=5;
  pong8.velocityY=2;
  pong9.velocityX=5;
  pong10.velocityY=5;
  pong11.velocityX=5;
  pong12.velocityY=5;
  pong13.velocityY=5;
  pong14.velocityX=5;
  pong15.velocityY=5;
  pong16.velocityY=5;
  pong17.velocityY=5; 
  pong18.velocityY=5;
  pong19.velocityX=5;

var score=10;





function draw() {
 background("white"); 
createEdgeSprites();


textSize(18);
fill("black");
text("lives:"+score,30,20);

 if(player.isTouching(pong2)
||player.isTouching(pong3)
||player.isTouching(pong4)
||player.isTouching(pong5)
||player.isTouching(pong6)
||player.isTouching(pong7)
||player.isTouching(pong8)
||player.isTouching(pong9)
||player.isTouching(pong10)
||player.isTouching(pong11)
||player.isTouching(pong12)
||player.isTouching(pong13)
||player.isTouching(pong14)
||player.isTouching(pong15)
||player.isTouching(pong16)
||player.isTouching(pong17)
||player.isTouching(pong18)
||player.isTouching(pong19)
){
  player.x=250;
  player.y=26;
  score=score-1;
}  
     
 if(player.isTouching(goal)){
  pong2.velocityY=0;
  pong3.velocityX=0;
  pong4.velocityY=0;
  pong5.velocityX=0;
  pong6.velocityY=0;
  pong7.velocityY=0;
  pong8.velocityY=0;
  pong9.velocityX=0;
 pong10.velocityY=0;
 pong11.velocityX=0;
 pong12.velocityY=0;
 pong13.velocityY=0;
 pong14.velocityX=0;
 pong15.velocityY=0;
 pong16.velocityY=0;
 pong17.velocityY=0; 
 pong18.velocityY=0;
 pong19.velocityX=0;
 player.velocityX=0;
 player.velocityY=0;
 
 textSize(28);
 fill("red");
 text("YOU WIN",175,200);
 
 
 }  
   
 if (score===0)  
   {
      pong2.velocityY=0;
  pong3.velocityX=0;
  pong4.velocityY=0;
  pong5.velocityX=0;
  pong6.velocityY=0;
  pong7.velocityY=0;
  pong8.velocityY=0;
  pong9.velocityX=0;
 pong10.velocityY=0;
 pong11.velocityX=0;
 pong12.velocityY=0;
 pong13.velocityY=0;
 pong14.velocityX=0;
 pong15.velocityY=0;
 pong16.velocityY=0;
 pong17.velocityY=0; 
 pong18.velocityY=0;
 pong19.velocityX=0;
 player.velocityX=0;
 player.velocityY=0;
     
     textSize(28);
     fill("red");
     text("YOU LOSE",175,200);
     
   }
   
   

 move(); 
 edges1(); 
  black(); 

   drawSprites();

}
function move(){
 if(keyWentDown(LEFT_ARROW)){
   player.velocityX=-4;
 } 
 if(keyWentUp(LEFT_ARROW)){
   player.velocityX=0;
 }   
  
  if(keyWentDown(RIGHT_ARROW)){
   player.velocityX=4;
 }  
  if(keyWentUp(RIGHT_ARROW)){
   player.velocityX=0;
 }  
  if(keyWentDown(UP_ARROW)){
   player.velocityY=-4;
 }  
   if(keyWentUp(UP_ARROW)){
   player.velocityY=0;
 } 
 if(keyWentDown(DOWN_ARROW)){
   player.velocityY=4;

 }   
 if(keyWentUp(DOWN_ARROW)){
   player.velocityY=0;
 }   
} 
 function edges1(){ 
  player.collide(edges);
  player.collide(line1);
  player.collide(line2);
  player.collide(line3);
  player.collide(line4);
  player.collide(line5);
  player.collide(line6);
  player.collide(line7);

}

function black(){
  
 
  pong2.bounceOff(line1);
  pong2.bounceOff(line2);
  pong3.bounceOff(line1);
  pong3.bounceOff(line3);
  pong3.bounceOff(edges);
  pong3.bounceOff(line2);
  pong4.bounceOff(line2);
  pong4.bounceOff(line3);
  pong5.bounceOff(line3);
  pong5.bounceOff(edges);
  pong6.bounceOff(line2);
  pong6.bounceOff(line4);
  pong7.bounceOff(line3);
  pong7.bounceOff(line4);
  pong8.bounceOff(line3);
  pong8.bounceOff(line5);
  pong9.bounceOff(edges);
  pong9.bounceOff(line4);
  pong10.bounceOff(line4);
  pong10.bounceOff(line5);
  pong11.bounceOff(edges);
  pong11.bounceOff(line5);
  pong12.bounceOff(line4);
  pong12.bounceOff(line6);
  pong13.bounceOff(line5);
  pong13.bounceOff(line6);
  pong14.bounceOff(edges);
  pong14.bounceOff(line6);
  pong15.bounceOff(line5);
  pong15.bounceOff(line7);
  pong16.bounceOff(line6);
  pong16.bounceOff(line7);
  pong17.bounceOff(line6);
  pong17.bounceOff(line7);
  pong18.bounceOff(line6);
  pong18.bounceOff(edges);
  pong19.bounceOff(line7);
  pong19.bounceOff(edges);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
