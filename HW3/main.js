
function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Venture upwards") {
        document.getElementById("image").innerHTML = "<img src='./images/stairs.jpg' width='400'>";
        document.getElementById("title").innerHTML = "<h2>Venture upwards</h2>";
        document.getElementById("story").innerHTML = "You decide the only way through is up, so you begin your trek. The stairs are arduous, but they are carpeted. With the grip this allows you, you only fall once along the way, sustaining minimal bruising. It takes you all morning, but you eventually reach the summit. You are greeted by a sunny, south facing window at the top of the stairs. A welcome sight! You allow yourself to daydream about resting in this beam of warmth. But you sense that there is still yet one more floor to ascend. Tired from the first leg of your journey, it is tempting to stop here. ";
        document.getElementById("choice1").innerHTML = "Stop";
        document.getElementById("choice2").innerHTML = "Keep going";

//bottom floor ending
    } else if (choice == 2 && answer2 == "Give up now") {
        document.getElementById("image").innerHTML = "<img src='./images/mudroom.png' width='400'>";
        document.getElementById("title").innerHTML = "<h2>Give up now</h2>";
        document.getElementById("story").innerHTML = "You decide that it is far too much work to go upstairs. You accept your fate and freeze to death in the lonely foyer." + "</br><br/><b>End</b>";
        document.getElementById("choice1").innerHTML = "Restart"; //fix these buttons
        document.getElementById("choice2").innerHTML = "Quit";

//middle floor ending
    } else if (choice == 1 && answer1 == "Stop") {
        document.getElementById("image").innerHTML = "<img src='./images/sunWindow.jpg' width='500'>";
        document.getElementById("title").innerHTML = "<h2>Stop</h2>";
        document.getElementById("story").innerHTML = "You decide that this is far enough. You walk to a thoroughly sunbaked spot in the floor, and rest. Though this place is comfortable and warm, there is nothing to sustain you. After three days, you grow hungry, and die" + "</br><br/><b>End</b>";
        document.getElementById("choice1").innerHTML = "Restart"; //fix these buttons
        document.getElementById("choice2").innerHTML = "Quit";

    } else if (choice == 2 && answer2 == "Keep going") {
        document.getElementById("image").innerHTML = "<img src='./images/hall.jpeg' width='400'>";
        document.getElementById("title").innerHTML = "<h2>Keep going</h2>";
        document.getElementById("story").innerHTML = "The temptation does not sway you, and you continue on. You walk through the second story and find the next set of stairs. This climb takes you even longer than the first due to your fatigue. You have to rest halfway up before continuing, but eventually, you make it. It is night now and you have been turned around, you have no idea where to find another south facing window. There is a dark, twisting hallway with two closed doors, one of these must be your ideal winter home.";
        document.getElementById("choice1").innerHTML = "Go to the near door";
        document.getElementById("choice2").innerHTML = "Go to the far door";
    
//true ending
    } else if (choice == 1 && answer1 == "Go to the near door") {
        document.getElementById("image").innerHTML = "<img src='./images/room.webp' width='400'>";
        document.getElementById("title").innerHTML = "<h2>The near door</h2>";
        document.getElementById("story").innerHTML = "You've come far enough, this closer room seems as good as any, and you're plum tuckered. You walk under the crack in the door and find a dark corner to rest for the night.<br/><br/>You wake up to the sun hitting your elytra. You look around, this room is sunny and full of plants. The warmth and green leaves fill you with memories of summer. <i>This is it</i>, you think, <i>this is right.</i><br/><br/>You spend the rest of winter living in one of the plants, warm and safe." + "</br><br/><b>End</b>";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit"; // fix!

//third floor ending
    } else if (choice == 2 && answer2 == "Go to the far door") {
        document.getElementById("image").innerHTML = "<img src='./images/cat.jpg' width='300'>";
        document.getElementById("title").innerHTML = "<h2>The far door</h2>";
        document.getElementById("story").innerHTML = "You've come this far, you decide that the best things in life don't come easy so you head towards the far door. Plus, this door is already cracked open as if you welcome you in. <br/><br/> You enter and, to your horror, come face to face with a large furry beast with pointy ears and sharp claws. The beast locks its terrifying eyes onto you immediately. You try to scale the wall, but you cannot outrun your foe. With one swift motion, it swipes you off the wall and into its cavernous maw." + "</br><br/><b>End</b>";
        document.getElementById("choice1").innerHTML = "Restart"; //fix these
        document.getElementById("choice2").innerHTML = "Quit"; 
    }

//restart
    else if (choice == 1 && answer1 == "Restart") {
        document.getElementById("image").innerHTML = "<img src='./images/bug.jpg' width='400'>";
        document.getElementById("title").innerHTML = "<h1>The Brave Bug's Search</h1>";
        document.getElementById("story").innerHTML = "It is the dead of winter, and you are a stink bug who has somehow managed to survive this far into the cold season. You can feel your time running out and realize that you must find shelter to survive until spring. You enter the nearest house which happens to be multiple stories tall. You can sense that it would be safest to go to the top floor because heat rises, but it will be quite the trek. What do you do?";
        document.getElementById("choice1").innerHTML = "Venture upwards";
        document.getElementById("choice2").innerHTML = "Give up now";
    } 
//quit
    else if (choice == 2 && answer2 == "Quit") {
        document.getElementById("image").innerHTML = "<img src='./images/bug.jpg' width='400'>";

        document.getElementById("title").innerHTML = "<h2>The End</h2>";
        document.getElementById("story").innerHTML = "Thank's for playing! I don't know how to get rid of these buttons!";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Restart";
    }
    else if (choice == 2 && answer2 == "Restart") {
        document.getElementById("image").innerHTML = "<img src='./images/bug.jpg' width='400'>";
        document.getElementById("title").innerHTML = "<h1>The Brave Bug's Search</h1>";
        document.getElementById("story").innerHTML = "It is the dead of winter, and you are a stink bug who has somehow managed to survive this far into the cold season. You can feel your time running out and realize that you must find shelter to survive until spring. You enter the nearest house which happens to be multiple stories tall. You can sense that it would be safest to go to the top floor because heat rises, but it will be quite the trek. What do you do?"
        document.getElementById("choice1").innerHTML = "Venture upwards";
        document.getElementById("choice2").innerHTML = "Give up now";
    }
    


}
