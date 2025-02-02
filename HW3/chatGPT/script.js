function makeChoice(choice) {
    let storyText = document.getElementById("story-text");
    let storyImage = document.getElementById("story-image");
  
    if (choice === 'explore') {
      storyText.innerHTML = "You decide to explore the forest. Suddenly, you hear a rustle behind you!";
      storyImage.src = "https://www.example.com/forest-image.jpg"; // Replace with actual image URL
      document.body.style.backgroundColor = "#4CAF50"; // Green for forest vibe
  
      let buttonHTML = `
        <button onclick="makeChoice('run')">Run towards the sound</button>
        <button onclick="makeChoice('investigate')">Investigate the sound</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
  
    } else if (choice === 'wait') {
      storyText.innerHTML = "You decide to wait for help. Time passes, but no one arrives. The forest grows eerily quiet.";
      storyImage.src = "https://www.example.com/forest-night.jpg"; // Replace with actual image URL
      document.body.style.backgroundColor = "#2E3B4E"; // Dark blue for the night vibe
  
      let buttonHTML = `
        <button onclick="makeChoice('shout')">Shout for help</button>
        <button onclick="makeChoice('explore')">Explore further</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
  
    } else if (choice === 'climb') {
      storyText.innerHTML = "You climb a nearby tree to get a better view. From up high, you see a cabin in the distance.";
      storyImage.src = "https://www.example.com/tree-view.jpg"; // Replace with actual image URL
      document.body.style.backgroundColor = "#8B4513"; // Brown for tree vibe
  
      let buttonHTML = `
        <button onclick="makeChoice('goCabin')">Go to the cabin</button>
        <button onclick="makeChoice('stayInTree')">Stay in the tree</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
  
    } else if (choice === 'run') {
      storyText.innerHTML = "You run toward the sound, but it's just the wind. You return to the path, unsure of what to do next.";
      storyImage.src = "https://www.example.com/wind.jpg"; // Replace with actual image URL
  
      let buttonHTML = `
        <button onclick="makeChoice('explore')">Explore the forest</button>
        <button onclick="makeChoice('wait')">Wait for help</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
  
    } else if (choice === 'investigate') {
      storyText.innerHTML = "You cautiously investigate and discover a small hidden animal den. Nothing more happens.";
      storyImage.src = "https://www.example.com/animal-den.jpg"; // Replace with actual image URL
  
      let buttonHTML = `
        <button onclick="makeChoice('explore')">Explore the forest</button>
        <button onclick="makeChoice('wait')">Wait for help</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
  
    } else if (choice === 'shout') {
      storyText.innerHTML = "You shout for help, but only the echo of your voice responds. You feel more alone than ever.";
      storyImage.src = "https://www.example.com/echo.jpg"; // Replace with actual image URL
  
      let buttonHTML = `
        <button onclick="makeChoice('explore')">Explore further</button>
        <button onclick="makeChoice('wait')">Wait again</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
  
    } else if (choice === 'goCabin') {
      storyText.innerHTML = "You head toward the cabin, hoping for safety. It's old and abandoned, but offers some shelter.";
      storyImage.src = "https://www.example.com/cabin.jpg"; // Replace with actual image URL
  
      let buttonHTML = `
        <button onclick="makeChoice('enterCabin')">Enter the cabin</button>
        <button onclick="makeChoice('goBack')">Go back to the forest</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
  
    } else if (choice === 'stayInTree') {
      storyText.innerHTML = "You decide to stay in the tree, but as the hours pass, you grow more and more uncomfortable.";
      storyImage.src = "https://www.example.com/tree-night.jpg"; // Replace with actual image URL
  
      let buttonHTML = `
        <button onclick="makeChoice('goCabin')">Go to the cabin</button>
        <button onclick="makeChoice('explore')">Explore the forest</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
  
    } else if (choice === 'enterCabin') {
      storyText.innerHTML = "You enter the cabin. It's quiet and eerie, but you feel a sense of relief. You've survived the night!";
      storyImage.src = "https://www.example.com/inside-cabin.jpg"; // Replace with actual image URL
      document.body.style.backgroundColor = "#D3D3D3"; // Light gray for cabin interior
  
      let buttonHTML = `
        <button onclick="makeChoice('explore')">Explore more</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
  
    } else if (choice === 'goBack') {
      storyText.innerHTML = "You decide to go back to the forest. Maybe there's something you missed!";
      storyImage.src = "https://www.example.com/forest.jpg"; // Replace with actual image URL
  
      let buttonHTML = `
        <button onclick="makeChoice('explore')">Explore the forest</button>
        <button onclick="makeChoice('wait')">Wait for help</button>
      `;
      document.getElementById("choices").innerHTML = buttonHTML;
    }
  }
  