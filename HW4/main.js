const invalidResponse = ['You killed the bug :(<br><br>(Check for correct spelling and capitalization and try again.)', 'Invalid input, check for correct spelling and capitalization and try again.', 'You have become the bug in real life<br><br>(Check for correct spelling and capitalization and try again.)', 'The bug was kissed and turned into a prince!<br><br>(Check for correct spelling and capitalization and try again.)'];
//I used ChatGPT to help with this part. I want it to display one of four random messages when the user inputs an invalid response. The function below does return a random item from the array above (when I checked with console.log), but I cannot figure out how to make it actually display when the user inputs an invalid response. I tried a few different things.
function getRandomInvalidResponse(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
//console.log(getRandomInvalidResponse(invalidResponse));

function setBackgroundColor(color){
    document.body.style.backgroundColor = color;
}
function getChoice1()
        {
            var myChoice = document.getElementById("choice").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "up")
            {
                //document.body.style.backgroundColor = DAB894;

                document.getElementById("image").innerHTML = "<img src='./images/stairs.jpg' width='400'>";
                
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice2").style.display="block";
                document.getElementById("btnSubmit2").style.display="block";
                
                myQuestion.innerHTML = "You decide the only way through is up, so you begin your trek. The stairs are arduous, but they are carpeted. With the grip this allows you, you only fall once along the way, sustaining minimal brusing. It takes you all morning, but you eventually reach the summit. You are greeted by a sunny, southfacing window at the top of the stairs. A welcome sight! You allow yourself to daydream about resting in this beam of warmth. But you sense that there is still yet one more floor to ascend. Tired from the first leg of your journey, it is tempting to stop here. Do you stop, or continue up?";
                setBackgroundColor('#DAB894');
            }
            else if(myChoice === "stay")
            {
                document.getElementById("image").innerHTML = "<img src='./images/mudroom.png' width='400'>";
                
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice4").style.display="block";
                document.getElementById("btnSubmit4").style.display="block";
                
                myQuestion.innerHTML = "You decide that it is far too much work to go upstairs. In the foyer you see a shoe rack full of shoes and a shut closet. One of these places might be a good place to keep warm. Some shoes are quite cozy, but there could be blankets in the closet. Which do you choose?";
                setBackgroundColor('#DAB894');
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Check for correct spelling and capitalization.";
                //getElementById('question').textContent = getRandomInvalidResponse(invalidResponse);
                //myQuestion.innerHTML = document.write(getRandomInvalidResponse(invalidResponse));
            }
        
        }
        function getChoice4()
        {
            var answer = document.getElementById("choice4").value;
            var myQuestion = document.getElementById("question");
            if(answer === "shoe")
            {
                document.getElementById("choice4").style.display="none";
                document.getElementById("btnSubmit4").style.display="none";

                myQuestion.innerHTML = "You decided to hide away in a very warm looking boot. For a time, this boot keeps you cozy and safe, but you failed to take into account the primary use of a boot. Later that evening, one of the human resitents inserts their foot into your new home and before you have time to react, you are squashed. They wouldn't have done this on purpose, but they didn't think to look for you. Your signature stink now permeates their sock and shoe and will remind them of you for weeks to come.";
                setBackgroundColor('#DAB894');
            }
            else if(answer === "closet")
            {
                myQuestion.innerHTML = "The closet seems promising, you find your way in only to discover it is nostly empty except for a vacuum and a some cleaning products. There is nothing to keep you warm here. You soon die of the cold.";
                setBackgroundColor('#DAB894');
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Check for correct spelling and capitalization.";
            }
        }

        function getChoice2()
        {
            var answer = document.getElementById("choice2").value;
            var myQuestion = document.getElementById("question");
            if(answer === "continue")
            {
                document.getElementById("image").innerHTML = "<img src='./images/hall.jpeg' width='400'>";

                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";
                
                document.getElementById("choice3").style.display="block";
                document.getElementById("btnSubmit3").style.display="block";

                myQuestion.innerHTML = "The temptation does not sway you, and you continue on. You walk through the second story and find the next set of stairs. This climb takes you even longer than the first due to your fatigue. You have to rest halfway up before continuing, but eventually, you make it. It is night now and you have been turned around, you have no idea where to find another south facing window. There is a dark, twisting hallway with two closed doors, one of these must be your ideal winter home. Do you go to the near door, or the far one?";
                
                setBackgroundColor('#394032');
                document.body.style.color = '#DAB894';

            }
            else if(answer === "stop")
            {
                document.getElementById("image").innerHTML = "<img src='./images/sunWindow.jpg' width='400'>";
                
                myQuestion.innerHTML = "You decide that this is far enough. You walk to a thoroughtly sun-baked spot in the floor and rest. Though this place is comfortable and warm, there is nothing to sustain you. After three days, you grow hungry, and die.";
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Check for correct spelling and capitalization.";
            }
        }

        function getChoice3()
        {
            var answer = document.getElementById("choice3").value;
            var myQuestion = document.getElementById("question");
            if(answer === "near")
            {
                document.getElementById("image").innerHTML = "<img src='./images/room.webp' width='400'>";
                
                document.getElementById("choice3").style.display="none";
                document.getElementById("btnSubmit3").style.display="none";

                myQuestion.innerHTML = "You've come far enough, this closer room seems as good as any, and you're plum tuckered. You walk under the crack in the door and find a dark corner to rest for the night.<br><br>You wake up to the sun hitting your elytra. You look around, this room is sunny and full of plants. The warmth and green leaves fill you with memories of summer. This is it, you think, this is right.<br><br>You spend the rest of winter living in one of the plants, warm and safe.";

                setBackgroundColor('#cef5b3');
                document.body.style.color = '#394032';
            }
            else if(answer === "far")
            {
                document.getElementById("choice3").style.display="none";
                document.getElementById("btnSubmit3").style.display="none";
                
                document.getElementById("choice5").style.display="block";
                document.getElementById("btnSubmit5").style.display="block";

                myQuestion.innerHTML = "You've come this far, you decide that the best things in life don't come easy so you head towards the far door. Plus, this door is already cracked open as if you welcome you in.<br><br>You enter and, to your horror, come face to face with a large furry beast with pointy ears and sharp claws. The beast locks its terrifying eyes onto you immediately. You can scan your surroundings and see that you can either run up the wall to try to get out of its reach, or you can run back to where you came from to the the crack under the door where it couldn't fit. Where do you go?"
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Check for correct spelling and capitalization.";
            }
        }

        function getChoice5()
        {
            var answer = document.getElementById("choice5").value;
            var myQuestion = document.getElementById("question");
            if(answer === "wall")
            {
                document.getElementById("image").innerHTML = "<img src='./images/cat.jpg' width='400'>";
                
                myQuestion.innerHTML = "You try to scale the wall, but the cat has impressive reach. You cannot outrun your foe. With one swift motion, it swipes you off the wall and into its caverous maw.";
            }
            else if(answer === "door")
            {
                myQuestion.innerHTML = "You quickly backtrack and scurry under the door. The cat however is quite skilled in this game of stick-your-paw-under-the-door and swipes you back into the room. Before you can try anything else, you are pawed to death.";
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Check for correct spelling and capitalization.";
            }
        }
      
        