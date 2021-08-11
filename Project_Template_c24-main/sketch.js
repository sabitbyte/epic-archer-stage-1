const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var Player1
var PlayerBase1
var ComputerPlayer1
var ComputerBase1


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  PlayerBase1 = new ComputerBase(300,random(450,height-300),180,150)
  Player1=new Player(285,this.body.position.y-153,50,180)

 ComputerBase1 = new PlayerBase(150,random(450,height-300),180,150)
 ComputerPlayer1=new ComputerPlayer(135,ComputerPlayer.body.position.y-153,50,180)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   Player1.display()
   PlayerBase1.display()


   //display Player and computerplayer
  ComputerPlayer1.display()
  ComputerBase1.display()

  


}
