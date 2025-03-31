var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 400;
var y2 = 300;
var square1;
var square2;
var speed = 20;

var audio = document.getElementById("prairieKing");
var audioStarted = false; // Flag to track if the audio has started

// need to create the squares before we draw them
createSquares();
// display the squares on the basic canvas
drawSquare();

// this timer will move the second square around
setInterval(moveGreenSquare, 5000);

// this function creates new instances of squares
function createSquares() {
    square1 = new Square(x, y, 20, 20, "#1B2021");
    square2 = new Square(x2, y2, 70, 70, "#F4EBD9");
}

// this function will randomly move the second square around the canvas
function moveGreenSquare() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();
}

// this function just draws the squares to the canvas in their respective locations
function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

}

// using jQuery for keystrokes
$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

// this function checks which key was pressed
function getKey(event) {
    // Start audio only on the first movement key press
    if (!audioStarted) {
        audio.play().catch(error => console.error("Audio playback failed:", error));
        audioStarted = true; // Prevent re-triggering
    }

    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    
    var prevX = square1.theX;
    var prevY = square1.theY;
    var bounceDistance = 30; // Set the bounce distance

    // Move square 1 in the desired direction
    if (actualLetter == "w") {
        square1.setY(square1.theY - speed);
    } else if (actualLetter == "s") {
        square1.setY(square1.theY + speed);
    } else if (actualLetter == "d") {
        square1.setX(square1.theX + speed);
    } else if (actualLetter == "a") {
        square1.setX(square1.theX - speed);
    }

    // Check for collision
    if (hasCollided(square1, square2)) {
        // Change background color briefly
        canvas.style.backgroundColor = "#E15554";
        setTimeout(() => {
            canvas.style.backgroundColor = "#F3A712";
        }, 100);

        // Push Square 1 further back upon collision
        if (actualLetter == "w") {
            square1.setY(prevY + bounceDistance); // Bounce downward
        } else if (actualLetter == "s") {
            square1.setY(prevY - bounceDistance); // Bounce upward
        } else if (actualLetter == "d") {
            square1.setX(prevX - bounceDistance); // Bounce left
        } else if (actualLetter == "a") {
            square1.setX(prevX + bounceDistance); // Bounce right
        }

        // Shrink Square 2 slightly
        if (square2.theWidth >= 0 && square2.theWidth >= 0){
            square2.setWidth(square2.theWidth - 1);
            square2.setHeight(square2.theHeight - 1);
        }

        if (square2.theHeight <= 1){
            document.getElementById("winMessage").innerHTML = "<h2>you did it!!!</h2>";
        }
        
    }
    // Check for border collision (prevent going out of bounds)
    enforceCanvasBoundaries();

    // Redraw squares
    drawSquare();
}


// move the y to move up
function moveUp() {
    square1.setY(square1.theY - speed);
}

// add to the y to move down
function moveDown() {
    square1.setY(square1.theY + speed);
}

// subtract from the x to move to the left
function moveLeft() {
    square1.setX(square1.theX - speed);
}

// add to the x to move to the right
function moveRight() {
    square1.setX(square1.theX + speed);
}

// this is a basic collision function that checks for corners overlapping
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

// Ensure Square 1 stays within canvas boundaries
function enforceCanvasBoundaries() {
    if (square1.theX < 0) {
        square1.setX(0 + 20); // Bounce right
    } else if (square1.theX + square1.theWidth > canvas.width) {
        square1.setX(canvas.width - square1.theWidth - 20); // Bounce left
    }

    if (square1.theY < 0) {
        square1.setY(0 + 20); // Bounce downward
    } else if (square1.theY + square1.theHeight > canvas.height) {
        square1.setY(canvas.height - square1.theHeight - 20); // Bounce upward
    }
}


