var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var foodArray = [];
var lives = 0;
$(document).ready(function(){
    
    setup();  
    
    $(this).keypress(function(event){
        getKey(event);
        
    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,100,25,25,"#03012C");
    square2 = new Square(400,400,200,75,"#914D76");
    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.obstacles.length; i++)
        {
            squareArray.push(new Square(data.obstacles[i].x,data.obstacles[i].y, data.obstacles[i].h, data.obstacles[i].w, data.obstacles[i].color));
        }
        for (var i = 0; i < data.food.length; i++) {
            foodArray.push(new Square(data.food[i].x, data.food[i].y, data.food[i].h, data.food[i].w, data.food[i].color));
        }
        drawSquare();
    });
    

    
}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
        
        //console.log(test2);
    }
    if(test || test2)
        {
            if (lives > -10){  
            lives--;
            }
            if(direction == "left")
            {
                moveRight();
            }
            else if(direction == "right")
            {
                moveLeft();
            }
            else if(direction == "up")
            {
                moveDown();
            }
            else if(direction == "down")
            {
                moveUp();
            }

            document.getElementById("wallHitSound").play();

      }
    // Check collision with food and remove if collected
    for (let i = foodArray.length - 1; i >= 0; i--) {
        if (hasCollided(square1, foodArray[i])) {
            foodArray.splice(i, 1); // remove that food item
            lives++; // or score++ if you change the variable name
            document.getElementById("collectSound").play();
        }
    }
    drawSquare(); 
    
}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }
    // Draw food items
    for (var i = 0; i < foodArray.length; i++) {
    ctx.fillStyle = foodArray[i].mainColor;
    ctx.fillRect(foodArray[i].x, foodArray[i].y, foodArray[i].width, foodArray[i].height);
    }

    ctx.font = "15px pixel";
    ctx.fillStyle = "#CEF7A0"; //how do i change the color of the text?
    ctx.fillText("Score: " + lives, 20, 30);    

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}