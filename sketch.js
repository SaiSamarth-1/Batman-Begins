const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var drops = [];
var engine, world;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,700);

    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){
        for(var i=0; i<100; i++){
            drops.push(new Drops(random(0, 400), random(0, 400), 5));
        }
    }
    
}

function draw(){
    Engine.update(engine);
    background(0);
    for(var i=0; i<100; i++){
        drops[i].display();
        drops[i].update();
    }
}   

