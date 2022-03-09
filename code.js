var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["38cc4fb6-826c-45b7-ae3e-81653c10aa9d","2e50a526-4bb1-40e0-899b-c1558336112d"],"propsByKey":{"38cc4fb6-826c-45b7-ae3e-81653c10aa9d":{"name":"Pac","sourceUrl":null,"frameSize":{"x":1189,"y":1364},"frameCount":1,"looping":true,"frameDelay":12,"version":"BMrFD8L3zlG5Ke8IrTynNzT6MGB2GX9W","loadedFromSource":true,"saved":true,"sourceSize":{"x":1189,"y":1364},"rootRelativePath":"assets/38cc4fb6-826c-45b7-ae3e-81653c10aa9d.png"},"2e50a526-4bb1-40e0-899b-c1558336112d":{"name":"Dot","sourceUrl":null,"frameSize":{"x":880,"y":801},"frameCount":1,"looping":true,"frameDelay":12,"version":"QhHbkCTae4FAd5.NKAQ0CKK9zGKPLihO","loadedFromSource":true,"saved":true,"sourceSize":{"x":880,"y":801},"rootRelativePath":"assets/2e50a526-4bb1-40e0-899b-c1558336112d.png"}}};
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

var pac = createSprite(200,207,20,20);
pac.setAnimation("Pac");
pac.scale=0.015;
var score=0;
var death=0;


var dot1 = createSprite(258,181,20,20);
dot1.setAnimation("Dot");
dot1.scale=0.015;

var wall1 = createSprite(200,232,53,5);
wall1.shapeColor="blue";

var wall2 = createSprite(173,208,5,53);
wall2.shapeColor="blue";

var wall3 = createSprite(227,208,5,53);
wall3.shapeColor="blue";

var wall4 = createSprite(200,127,60,5);
wall4.shapeColor="blue";

var wall5 = createSprite(198,287,60,5);
wall5.shapeColor="blue";

var wall6 = createSprite(95,175,25,5);
wall6.shapeColor="blue";

var wall7 = createSprite(99,241,25,5);
wall7.shapeColor="blue";

var wall8 = createSprite(287,171,25,5);
wall8.shapeColor="blue";

var wall9 = createSprite(290,236,25,5);
wall9.shapeColor="blue";

var wall10 = createSprite(91,204,50,5);
wall10.shapeColor="blue";

var wall11 = createSprite(283,200,50,5);
wall11.shapeColor="blue";

var wall12 = createSprite(33,395,5,105);
wall12.shapeColor="blue";

var wall13 = createSprite(70,395,5,105);
wall13.shapeColor="blue";

var wall14 = createSprite(107,395,5,105);
wall14.shapeColor="blue";

var wall15 = createSprite(144,395,5,105);
wall15.shapeColor="blue";

var wall16 = createSprite(181,395,5,105);
wall16.shapeColor="blue";

var wall17 = createSprite(218,395,5,105);
wall17.shapeColor="blue";

var wall18 = createSprite(255,395,5,105);
wall18.shapeColor="blue";

var wall19 = createSprite(292,395,5,105);
wall19.shapeColor="blue";

var wall20 = createSprite(329,392,5,105);
wall20.shapeColor="blue";

var wall21 = createSprite(366,395,5,105);
wall21.shapeColor="blue";

var wall22 = createSprite(30,34,5,70);
wall22.shapeColor="blue";

var wall23 = createSprite(70,34,5,70);
wall23.shapeColor="blue";

var wall24 = createSprite(110,34,5,70);
wall24.shapeColor="blue";

var wall25 = createSprite(150,34,5,70);
wall25.shapeColor="blue";

var wall26 = createSprite(190,34,5,70);
wall26.shapeColor="blue";

var wall27 = createSprite(230,34,5,70);
wall27.shapeColor="blue";

var wall28 = createSprite(270,34,5,70);
wall28.shapeColor="blue";

var wall29 = createSprite(310,34,5,70);
wall29.shapeColor="blue";

var wall30 = createSprite(350,35,5,70);
wall30.shapeColor="blue";

var wall31 = createSprite(345,200,5,70);
wall31.shapeColor="red";

var wall32 = createSprite(31,200,5,70);
wall32.shapeColor="red";

var wall33 = createSprite(342,113,70,5);
wall33.shapeColor="red";

var wall34 = createSprite(50,113,70,5);
wall34.shapeColor="red";

var wall35 = createSprite(342,283,70,5);
wall35.shapeColor="red";

var wall36 = createSprite(49,283,70,5);
wall36.shapeColor="red";

var dot2 = createSprite(288,181,20,20);
dot2.setAnimation("Dot");
dot2.scale=0.015;

var dot3 = createSprite(318,181,20,20);
dot3.setAnimation("Dot");
dot3.scale=0.015;

var dot4 = createSprite(241,200,20,20);
dot4.setAnimation("Dot");
dot4.scale=0.015;

var dot5 = createSprite(327,200,20,20);
dot5.setAnimation("Dot");
dot5.scale=0.015;

var dot6 = createSprite(259,220,20,20);
dot6.setAnimation("Dot");
dot6.scale=0.015;

var dot7 = createSprite(289,220,20,20);
dot7.setAnimation("Dot");
dot7.scale=0.015;

var dot8 = createSprite(319,220,20,20);
dot8.setAnimation("Dot");
dot8.scale=0.015;

var dot9 = createSprite(369,165,20,20);
dot9.setAnimation("Dot");
dot9.scale=0.015;

var dot10 = createSprite(369,195,20,20);
dot10.setAnimation("Dot");
dot10.scale=0.015;

var dot11 = createSprite(369,225,20,20);
dot11.setAnimation("Dot");
dot11.scale=0.015;

var dot12 = createSprite(9,164,20,20);
dot12.setAnimation("Dot");
dot12.scale=0.015;

var dot13 = createSprite(9,194,20,20);
dot13.setAnimation("Dot");
dot13.scale=0.015;

var dot14 = createSprite(9,224,20,20);
dot14.setAnimation("Dot");
dot14.scale=0.015;

var dot15 = createSprite(62,184,20,20);
dot15.setAnimation("Dot");
dot15.scale=0.015;

var dot16 = createSprite(92,184,20,20);
dot16.setAnimation("Dot");
dot16.scale=0.015;

var dot17 = createSprite(122,184,20,20);
dot17.setAnimation("Dot");
dot17.scale=0.015;

var dot18 = createSprite(50,205,20,20);
dot18.setAnimation("Dot");
dot18.scale=0.015;

var dot19 = createSprite(130,205,20,20);
dot19.setAnimation("Dot");
dot19.scale=0.015;

var dot20 = createSprite(61,223,20,20);
dot20.setAnimation("Dot");
dot20.scale=0.015;

var dot21 = createSprite(91,223,20,20);
dot21.setAnimation("Dot");
dot21.scale=0.015;

var dot22 = createSprite(121,223,20,20);
dot22.setAnimation("Dot");
dot22.scale=0.015;

var dot23 = createSprite(93,282,20,20);
dot23.setAnimation("Dot");
dot23.scale=0.015;

var dot24 = createSprite(123,282,20,20);
dot24.setAnimation("Dot");
dot24.scale=0.015;

var dot25 = createSprite(153,282,20,20);
dot25.setAnimation("Dot");
dot25.scale=0.015;

var dot26 = createSprite(237,282,20,20);
dot26.setAnimation("Dot");
dot26.scale=0.015;

var dot27 = createSprite(267,282,20,20);
dot27.setAnimation("Dot");
dot27.scale=0.015;

var dot28 = createSprite(297,282,20,20);
dot28.setAnimation("Dot");
dot28.scale=0.015;

var dot29 = createSprite(49,357,20,20);
dot29.setAnimation("Dot");
dot29.scale=0.015;

var dot30 = createSprite(49,383,20,20);
dot30.setAnimation("Dot");
dot30.scale=0.015;

var dot31 = createSprite(89,357,20,20);
dot31.setAnimation("Dot");
dot31.scale=0.015;

var dot32 = createSprite(89,383,20,20);
dot32.setAnimation("Dot");
dot32.scale=0.015;

var dot33 = createSprite(124,357,20,20);
dot33.setAnimation("Dot");
dot33.scale=0.015;

var dot34 = createSprite(124,383,20,20);
dot34.setAnimation("Dot");
dot34.scale=0.015;

var dot35 = createSprite(159,357,20,20);
dot35.setAnimation("Dot");
dot35.scale=0.015;

var dot36 = createSprite(159,383,20,20);
dot36.setAnimation("Dot");
dot36.scale=0.015;

var dot37 = createSprite(196,357,20,20);
dot37.setAnimation("Dot");
dot37.scale=0.015;

var dot38 = createSprite(196,383,20,20);
dot38.setAnimation("Dot");
dot38.scale=0.015;

var dot39 = createSprite(232,357,20,20);
dot39.setAnimation("Dot");
dot39.scale=0.015;

var dot40 = createSprite(232,383,20,20);
dot40.setAnimation("Dot");
dot40.scale=0.015;

var dot41 = createSprite(269,357,20,20);
dot41.setAnimation("Dot");
dot41.scale=0.015;

var dot42 = createSprite(269,383,20,20);
dot42.setAnimation("Dot");
dot42.scale=0.015;

var dot43 = createSprite(307,357,20,20);
dot43.setAnimation("Dot");
dot43.scale=0.015;

var dot44 = createSprite(307,383,20,20);
dot44.setAnimation("Dot");
dot44.scale=0.015;

var dot45 = createSprite(344,357,20,20);
dot45.setAnimation("Dot");
dot45.scale=0.015;

var dot46 = createSprite(344,383,20,20);
dot46.setAnimation("Dot");
dot46.scale=0.015;

var dot47 = createSprite(47,12,20,20);
dot47.setAnimation("Dot");
dot47.scale=0.015;

var dot48 = createSprite(47,39,20,20);
dot48.setAnimation("Dot");
dot48.scale=0.015;

var dot49 = createSprite(87,12,20,20);
dot49.setAnimation("Dot");
dot49.scale=0.015;

var dot50 = createSprite(87,39,20,20);
dot50.setAnimation("Dot");
dot50.scale=0.015;

var dot51 = createSprite(127,12,20,20);
dot51.setAnimation("Dot");
dot51.scale=0.015;

var dot52 = createSprite(127,39,20,20);
dot52.setAnimation("Dot");
dot52.scale=0.015;

var dot53 = createSprite(167,12,20,20);
dot53.setAnimation("Dot");
dot53.scale=0.015;

var dot54 = createSprite(167,39,20,20);
dot54.setAnimation("Dot");
dot54.scale=0.015;

var dot55 = createSprite(207,12,20,20);
dot55.setAnimation("Dot");
dot55.scale=0.015;

var dot56 = createSprite(207,39,20,20);
dot56.setAnimation("Dot");
dot56.scale=0.015;

var dot57 = createSprite(247,12,20,20);
dot57.setAnimation("Dot");
dot57.scale=0.015;

var dot58 = createSprite(247,39,20,20);
dot58.setAnimation("Dot");
dot58.scale=0.015;

var dot59 = createSprite(287,12,20,20);
dot59.setAnimation("Dot");
dot59.scale=0.015;

var dot60 = createSprite(287,39,20,20);
dot60.setAnimation("Dot");
dot60.scale=0.015;

var dot61 = createSprite(327,12,20,20);
dot61.setAnimation("Dot");
dot61.scale=0.015;

var dot62 = createSprite(327,39,20,20);
dot62.setAnimation("Dot");
dot62.scale=0.015;

var dot63 = createSprite(95,111,20,20);
dot63.setAnimation("Dot");
dot63.scale=0.015;

var dot64 = createSprite(125,111,20,20);
dot64.setAnimation("Dot");
dot64.scale=0.015;

var dot65 = createSprite(155,111,20,20);
dot65.setAnimation("Dot");
dot65.scale=0.015;

var dot66 = createSprite(239,111,20,20);
dot66.setAnimation("Dot");
dot66.scale=0.015;

var dot67 = createSprite(269,111,20,20);
dot67.setAnimation("Dot");
dot67.scale=0.015;

var dot68 = createSprite(299,111,20,20);
dot68.setAnimation("Dot");
dot68.scale=0.015;

var dot69 = createSprite(195,138,20,20);
dot69.setAnimation("Dot");
dot69.scale=0.015;

var dot70 = createSprite(195,168,20,20);
dot70.setAnimation("Dot");
dot70.scale=0.015;

var dot71 = createSprite(195,241,20,20);
dot71.setAnimation("Dot");
dot71.scale=0.015;

var dot72 = createSprite(195,271,20,20);
dot72.setAnimation("Dot");
dot72.scale=0.015;






function draw() {
    background("black");
  textSize(15);
  stroke("red");
  text("Score:"+score,334,88);
   if (keyDown(UP_ARROW)){
    pac.velocityX=0;
    pac.velocityY=-4;
   
    
  }else{
     pac.velocityX=0;
     pac.velocityY=0;
}
  if (keyDown(DOWN_ARROW)){
    pac.velocityX=0;
    pac.velocityY=4;
  }
  
  if (keyDown(LEFT_ARROW)){
    pac.velocityX=-4;
    pac.velocityY=0;
  }
  if (keyDown(RIGHT_ARROW)){
    pac.velocityX=4;
    pac.velocityY=0;
  }
  
  if(pac.collide(wall31)|| pac.collide(wall32)|| pac.collide(wall33)|| pac.collide(wall34)|| pac.collide(wall35)|| pac.collide(wall36)){
  playSound("assets/category_bell/hollow_bell_notification.mp3",false);
  pac.x=200;
  pac.y=200;
  death = death+1;
  textSize(20);
  text("Game Over, :(",83,159);
  
  
 
}


 pac.bounceOff(wall1);
  pac.bounceOff(wall2);
  pac.bounceOff(wall3);
   pac.bounceOff(wall4);
    pac.bounceOff(wall5);
     pac.bounceOff(wall6);
      pac.bounceOff(wall7);
       pac.bounceOff(wall8);
        pac.bounceOff(wall9);
         pac.bounceOff(wall10);
          pac.bounceOff(wall11);
           pac.bounceOff(wall12);
            pac.bounceOff(wall13);
             pac.bounceOff(wall14);
              pac.bounceOff(wall15);
               pac.bounceOff(wall16);
                pac.bounceOff(wall17);
                 pac.bounceOff(wall18);
                  pac.bounceOff(wall19);
                   pac.bounceOff(wall20);
                    pac.bounceOff(wall21);
                     pac.bounceOff(wall22);
                      pac.bounceOff(wall23);
                       pac.bounceOff(wall24);
                        pac.bounceOff(wall25);
                         pac.bounceOff(wall26);
                          pac.bounceOff(wall27);
                           pac.bounceOff(wall28);
                            pac.bounceOff(wall29);
                             pac.bounceOff(wall30);
                             

if(pac.isTouching(dot1))
  {
    score+=1;
    dot1.destroy();
  }
  if(pac.isTouching(dot2))
  {
    score+=1;
    dot2.destroy();
  }
  if(pac.isTouching(dot3))
  {
    score+=1;
    dot3.destroy();
  }
  if(pac.isTouching(dot4))
  {
    score+=1;
    dot4.destroy();
  }
  if(pac.isTouching(dot5))
  {
    score+=1;
    dot5.destroy();
  }
  if(pac.isTouching(dot6))
  {
    score+=1;
    dot6.destroy();
  }
  if(pac.isTouching(dot7))
  {
    score+=1;
    dot7.destroy();
  }
  if(pac.isTouching(dot8))
  {
    score+=1;
    dot8.destroy();
  }
  if(pac.isTouching(dot9))
  {
    score+=1;
    dot9.destroy();
  }
  if(pac.isTouching(dot10))
  {
    score+=1;
    dot10.destroy();
  }
  if(pac.isTouching(dot11))
  {
    score+=1;
    dot11.destroy();
  }
  if(pac.isTouching(dot12))
  {
    score+=1;
    dot12.destroy();
  }
  if(pac.isTouching(dot13))
  {
    score+=1;
    dot13.destroy();
  }
  if(pac.isTouching(dot14))
  {
    score+=1;
    dot14.destroy();
  }
  if(pac.isTouching(dot15))
  {
    score+=1;
    dot15.destroy();
  }
  if(pac.isTouching(dot16))
  {
    score+=1;
    dot16.destroy();
  }
  if(pac.isTouching(dot17))
  {
    score+=1;
    dot17.destroy();
  }
  if(pac.isTouching(dot18))
  {
    score+=1;
    dot18.destroy();
  }
  if(pac.isTouching(dot19))
  {
    score+=1;
    dot19.destroy();
  }
  if(pac.isTouching(dot20))
  {
    score+=1;
    dot20.destroy();
  }
  if(pac.isTouching(dot21))
  {
    score+=1;
    dot21.destroy();
  }
  if(pac.isTouching(dot22))
  {
    score+=1;
    dot22.destroy();
  }
  if(pac.isTouching(dot23))
  {
    score+=1;
    dot23.destroy();
  }
  if(pac.isTouching(dot24))
  {
    score+=1;
    dot24.destroy();
  }
  if(pac.isTouching(dot25))
  {
    score+=1;
    dot25.destroy();
  }
  if(pac.isTouching(dot26))
  {
    score+=1;
    dot26.destroy();
  }
  if(pac.isTouching(dot27))
  {
    score+=1;
    dot27.destroy();
  }
  if(pac.isTouching(dot28))
  {
    score+=1;
    dot28.destroy();
  }
  if(pac.isTouching(dot29))
  {
    score+=1;
    dot29.destroy();
  }
  if(pac.isTouching(dot30))
  {
    score+=1;
    dot30.destroy();
  }
  if(pac.isTouching(dot31))
  {
    score+=1;
    dot31.destroy();
  }
  if(pac.isTouching(dot32))
  {
    score+=1;
    dot32.destroy();
  }
  if(pac.isTouching(dot33))
  {
    score+=1;
    dot33.destroy();
  }
  if(pac.isTouching(dot34))
  {
    score+=1;
    dot34.destroy();
  }
  if(pac.isTouching(dot35))
  {
    score+=1;
    dot35.destroy();
  }
  if(pac.isTouching(dot36))
  {
    score+=1;
    dot36.destroy();
  }
  if(pac.isTouching(dot37))
  {
    score+=1;
    dot37.destroy();
  }
  if(pac.isTouching(dot38))
  {
    score+=1;
    dot38.destroy();
  }
  if(pac.isTouching(dot39))
  {
    score+=1;
    dot39.destroy();
  }
  if(pac.isTouching(dot40))
  {
    score+=1;
    dot40.destroy();
  }
  if(pac.isTouching(dot41))
  {
    score+=1;
    dot41.destroy();
  }
  if(pac.isTouching(dot42))
  {
    score+=1;
    dot42.destroy();
  }
  if(pac.isTouching(dot43))
  {
    score+=1;
    dot43.destroy();
  }
  if(pac.isTouching(dot44))
  {
    score+=1;
    dot44.destroy();
  }
  if(pac.isTouching(dot45))
  {
    score+=1;
    dot45.destroy();
  }
  if(pac.isTouching(dot46))
  {
    score+=1;
    dot46.destroy();
  }
  if(pac.isTouching(dot47))
  {
    score+=1;
    dot47.destroy();
  }
  if(pac.isTouching(dot48))
  {
    score+=1;
    dot48.destroy();
  }
  if(pac.isTouching(dot49))
  {
    score+=1;
    dot49.destroy();
  }
  if(pac.isTouching(dot50))
  {
    score+=1;
    dot50.destroy();
  }
  if(pac.isTouching(dot51))
  {
    score+=1;
    dot51.destroy();
  }
  if(pac.isTouching(dot52))
  {
    score+=1;
    dot52.destroy();
  }
  if(pac.isTouching(dot53))
  {
    score+=1;
    dot53.destroy();
  }
  if(pac.isTouching(dot54))
  {
    score+=1;
    dot54.destroy();
  }
  if(pac.isTouching(dot55))
  {
    score+=1;
    dot55.destroy();
  }
  if(pac.isTouching(dot56))
  {
    score+=1;
    dot56.destroy();
  }
  if(pac.isTouching(dot57))
  {
    score+=1;
    dot57.destroy();
  }
  if(pac.isTouching(dot58))
  {
    score+=1;
    dot58.destroy();
  }
  if(pac.isTouching(dot59))
  {
    score+=1;
    dot59.destroy();
  }
  if(pac.isTouching(dot60))
  {
    score+=1;
    dot60.destroy();
  }
  if(pac.isTouching(dot61))
  {
    score+=1;
    dot61.destroy();
  }
  if(pac.isTouching(dot62))
  {
    score+=1;
    dot62.destroy();
  }
  if(pac.isTouching(dot63))
  {
    score+=1;
    dot63.destroy();
  }
  if(pac.isTouching(dot64))
  {
    score+=1;
    dot64.destroy();
  }
  if(pac.isTouching(dot65))
  {
    score+=1;
    dot65.destroy();
  }
  if(pac.isTouching(dot66))
  {
    score+=1;
    dot66.destroy();
  }
  if(pac.isTouching(dot67))
  {
    score+=1;
    dot67.destroy();
  }
  if(pac.isTouching(dot68))
  {
    score+=1;
    dot68.destroy();
  }
  if(pac.isTouching(dot69))
  {
    score+=1;
    dot69.destroy();
  }
  if(pac.isTouching(dot70))
  {
    score+=1;
    dot70.destroy();
  }
  if(pac.isTouching(dot71))
  {
    score+=1;
    dot71.destroy();
  }
  if(pac.isTouching(dot72))
  {
    score+=1;
    dot72.destroy();
  }
  
 if(score>=72){
   playSound( "assets/category_achievements/peaceful_win_1.mp3",false);
    pac.x=200;
  pac.y=200;
   textSize(20);
  text("Congratulations!, Game Finished",83,159);
 }
 
  

  createEdgeSprites();
  pac.bounceOff(edges);
  drawSprites();
  
  
  
  
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
