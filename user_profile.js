let currentStep = 1;
const totalSteps = 5;
const prompts = document.querySelectorAll('.prompt');
const progressBar = document.querySelector('.progress');
const stepIndicator = document.querySelector('.step-indicator');
const profileCompletionText = document.querySelector('.profile-completion-text');

function nextStep() {
    if (currentStep === 1 && !validateStep1Inputs()) {
        alert('Please fill out all fields before proceeding.');
        return;
    }
    
    prompts[currentStep - 1].style.display = 'none';
    currentStep++;

    if (currentStep <= totalSteps) {
        prompts[currentStep - 1].style.display = 'block';
        
        updateProgress();
        displayUserDetails();
        updateStepIndicator();
        updateProfileCompletionText();
    } else {
        // Process the collected information here
        const firstName = document.getElementById('firstNameInput').value;
        const surname = document.getElementById('surnameInput').value;
        const age = document.getElementById('ageInput').value;
        const email = document.getElementById('emailInput').value;

        console.log('First Name:', firstName);
        console.log('Surname:', surname);
        console.log('Age:', age);
        console.log('Email:', email);

        // You can send this data to a server or perform any other desired action

        // Display thank you message
        document.querySelector('.prompt:last-of-type').style.display = 'block';
        updateProfileCompletionText();
    }
}

function previousStep() {
    prompts[currentStep - 1].style.display = 'none';
    currentStep--;

    if (currentStep >= 1) {
        prompts[currentStep - 1].style.display = 'block';
        updateProgress();
        displayUserDetails();
        updateStepIndicator();
        updateProfileCompletionText();
    } else {
        currentStep = 1; // Ensure currentStep does not go below 1
    }
}

function updateProgress() {
    const progress = (currentStep - 1) / (totalSteps - 1) * 100;
    progressBar.style.width = progress + '%';
}

function displayUserDetails() {
    const userDetails = document.querySelector('.user-details');
    userDetails.innerHTML = ''; // Clear previous details

    for (let i = 1; i <= currentStep; i++) {
        const inputs = document.querySelectorAll(`[data-step="${i}"]`);
        inputs.forEach(input => {
            const label = input.getAttribute('data-label');
            const value = input.value;
            userDetails.innerHTML += `<p>${label}: ${value}</p>`;
        });
    }
}

function updateStepIndicator() {
    stepIndicator.textContent = `Step ${currentStep} of ${totalSteps}`;
}

function validateStep1Inputs() {
    const step1Inputs = document.querySelectorAll('[data-step="1"]');
    for (let i = 0; i < step1Inputs.length; i++) {
        if (step1Inputs[i].value.trim() === '') {
            return false; // Not all step 1 inputs are filled
        }
    }
    return true; // All step 1 inputs are filled
}

function updateProfileCompletionText() {
    const progress = (currentStep - 1) / totalSteps * 100;
    profileCompletionText.textContent = `Profile completed ${progress}%`;
}

