//Abstand immer vom Mittelpunkt
var sonne_x = 300;
var sonne_y = 300;
var mars_abstand = 100;
var mars_rotation = 0 ;
var mars_geschwindigkeit = 0.005 ;
var erde_abstand = 150;
var erde_rotation = 0 ;
var erde_geschwindigkeit = 0.01 ;
var jupiter_abstand = 200;
var jupiter_rotation = 0 ;
var jupiter_geschwindigkeit = 0.002 ;
var saturn_abstand = 260;
var saturn_rotation = 0 ;
var saturn_geschwindigkeit = 0.0009 ;
var Rakete_x = -200
var Rakete_y = 600

function setup() {
  createCanvas(600, 600);
  frameRate(50);
}

function draw() {
  background(30,51,87);
  stroke(0); strokeWeight(0);

  //Sonne
  fill(255,200,0);
  ellipse(sonne_x, sonne_y, 116, 116);
  
  push()
  translate(width / 2, height / 2);

  //Mars	
  push();
  fill(204,95,45);
  if (mars_rotation > -1 ){
    rotate(PI * mars_rotation);
    mars_rotation = mars_rotation + mars_geschwindigkeit;
  }
  else { rotate(0);}
  ellipse(0, mars_abstand, 20, 20);
	pop();
	
  //Erde
  push();
  fill(78, 120, 204);
  if (erde_rotation > -1 ){
    rotate(PI * erde_rotation);
    erde_rotation = erde_rotation + erde_geschwindigkeit;
  }
  else { rotate(0);}
  ellipse(0, erde_abstand, 25, 25);
	pop();
 
	//Jupiter
  push();
  fill(162, 132, 132);
  if (jupiter_rotation > -1 ){
    rotate(PI * jupiter_rotation);
    jupiter_rotation = jupiter_rotation + jupiter_geschwindigkeit;
  }
  else { rotate(0);}
  ellipse(0, jupiter_abstand, 40, 40);
	pop();
	
	//Saturn
  push();
  if (saturn_rotation > -1 ){
    rotate(PI * saturn_rotation);
    saturn_rotation = saturn_rotation + saturn_geschwindigkeit;
  }
  else { rotate(0);}
  
  fill(191,171,171);
  ellipse(0, saturn_abstand, 60, 60);
  
  fill(162, 132, 132);
  ellipse(0, saturn_abstand, 45, 45);
	pop();
  pop()
  
  //Rakete
  Rakete(Rakete_x,Rakete_y)
  Rakete_x = Rakete_x +1*3
  if(Rakete_x > 1400) { Rakete_x = -200 } else { Rakete_x = Rakete_x }
  
  Rakete_y = Rakete_y -0.2*3
  if(Rakete_y < -500) { Rakete_y = 700 } else { Rakete_y = Rakete_y }
}

function Rakete(positionx, positiony) {
  
  fill(116,116,116)
  quad(positionx-20,positiony-55,positionx+20,positiony-20,positionx-5,positiony,positionx-40,positiony-30)
  fill(116,116,116)
  quad(positionx-20,positiony+55,positionx+20,positiony+20,positionx-5,positiony,positionx-40,positiony+30)
  fill(221,0,0)
  ellipse(positionx-75,positiony,80,40)
  fill(255,179,37)
  ellipse(positionx-65,positiony, 50, 20) 
  fill(116,116,116)
  ellipse(positionx,positiony,130,50)
  fill(240,185,185)
  ellipse(positionx+45,positiony,15 ,15)
  fill(92,189,160)
  ellipse(positionx+15,positiony,20,20)
}