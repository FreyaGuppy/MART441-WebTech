function getChoice1()
        {
            var myChoice = document.getElementById("choice").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "up")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice2").style.display="block";
                document.getElementById("btnSubmit2").style.display="block";
                
                myQuestion.innerHTML = "You decide the only way through is up, so you begin your trek. The stairs are arduous, but they are carpeted. With the grip this allows you, you only fall once along the way, sustaining minimal brusing. It takes you all morning, but you eventually reach the summit. You are greeted by a sunny, southfacing window at the top of the stairs. A welcome sight! You allow yourself to daydream about resting in this beam of warmth. But you sense that there is still yet one more floor to ascend. Tired from the first leg of your journey, it is tempting to stop here. Do you stop, or continue up?";
            }
            else if(myChoice === "stay")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice4").style.display="block";
                document.getElementById("btnSubmit4").style.display="block";
                
                myQuestion.innerHTML = "You decide that it is far too much work to go upstairs. In the foyer you see a shoe rack full of shoes and a shut closet. One of these places might be a good place to keep warm. Some shoes are quite cozy, but there could be blankets in the closet. Which do you choose?";

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
                //document.getElementById("mainImage").src = "grateful.jpg"

                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";
                
                document.getElementById("choice3").style.display="block";
                document.getElementById("btnSubmit3").style.display="block";

                myQuestion.innerHTML = "The temptation does not sway you, and you continue on. You walk through the second story and find the next set of stairs. This climb takes you even longer than the first due to your fatigue. You have to rest halfway up before continuing, but eventually, you make it. It is night now and you have been turned around, you have no idea where to find another south facing window. There is a dark, twisting hallway with two closed doors, one of these must be your ideal winter home. Do you go to the near door, or the far one?";
            }
            else if(answer === "stop")
            {
                myQuestion.innerHTML = "Please remember we are all in this together.";
            }
        }

        function getChoice3()
        {
            var answer = document.getElementById("choice3").value;
            var myQuestion = document.getElementById("question");
            if(answer === "near")
            {
                /*document.getElementById("mainImage").src = "together.jpg"

                document.getElementById("choice3").style.display="none";
                document.getElementById("btnSubmit3").style.display="none";
                
                document.getElementById("choice4").style.display="block";
                document.getElementById("btnSubmit4").style.display="block"; */

                myQuestion.innerHTML = "You've come far enough, this closer room seems as good as any, and you're plum tuckered. You walk under the crack in the door and find a dark corner to rest for the night.<br><br>You wake up to the sun hitting your elytra. You look around, this room is sunny and full of plants. The warmth and green leaves fill you with memories of summer. This is it, you think, this is right.<br><br>You spend the rest of winter living in one of the plants, warm and safe.";
            }
            else if(answer === "far")
            {
                myQuestion.innerHTML = "Please remember we are all in this together.";
            }
        }

        function getChoice4()
        {
            var answer = document.getElementById("choice4").value;
            var myQuestion = document.getElementById("question");
            if(answer === "shoe")
            {
                document.getElementById("mainImage").src = "together.jpg"
                myQuestion.innerHTML = "Thank you for your kindness!";
            }
            else if(answer === "closet")
            {
                myQuestion.innerHTML = "Please remember we are all in this together.";
            }
        }

        function getChoice5()
        {
            var answer = document.getElementById("choice5").value;
            var myQuestion = document.getElementById("question");
            if(answer === "wall")
            {
                document.getElementById("mainImage").src = "together.jpg"
                myQuestion.innerHTML = "Thank you for your kindness!";
            }
            else if(answer === "door")
            {
                myQuestion.innerHTML = "Please remember we are all in this together.";
            }
        }