var ball,ballImg,bg;
var database;

function preload(){
    
    
    
    
}

function setup(){
    createCanvas(1000,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
   
    
    ball.scale = 0.6;
    var lc = database.ref("Ball/position");
    lc.on("value",readop);
}

function draw(){
    background("white);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/position").set({
        'x':position.x+x,
        'y':position.y+y
    })
}

function readop(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
