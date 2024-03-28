let currentPrompt = 0;
   const prompts = document.querySelectorAll('.prompt');
   
   function nextPrompt() {
     prompts[currentPrompt].style.display = 'none';
     currentPrompt++;
     
     if (currentPrompt < prompts.length) {
       prompts[currentPrompt].style.display = 'block';
     } else {
       // Process the collected information here
       const name = document.getElementById('nameInput').value;
       const username = document.getElementById('usernameInput').value;
       const interests = document.getElementById('interestsInput').value.split(',').map(interest => interest.trim());
       
       console.log('Name:', name);
       console.log('Username:', username);
       console.log('Interests:', interests);
       
       // You can send this data to a server or perform any other desired action
     }
   }

   function goBack() {
    prompts[currentPrompt].style.display = 'none';
    currentPrompt--;
    
    if (currentPrompt >= 0) {
      prompts[currentPrompt].style.display = 'block';
    } else {
      currentPrompt = 0; // Ensure currentPrompt does not go below 0
    }
  }
