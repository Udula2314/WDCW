// Event listener for email input
document.querySelector('.email').addEventListener('input', function() {
    if (this.value) {
        document.querySelector('.icon-paper-plane').classList.add('next');
    } else {
        document.querySelector('.icon-paper-plane').classList.remove('next');
    }
});

// Hover effect for next button
document.querySelectorAll('.next-button').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        this.style.cursor = 'pointer';
    });
});

// Click event listener for email next button
document.querySelector('.next-button.email').addEventListener('click', function() {
    console.log('Something');
    document.querySelector('.email-section').classList.add('fold-up');
    document.querySelector('.password-section').classList.remove('folded');
});

// Event listener for password input
document.querySelector('.password').addEventListener('input', function() {
    if (this.value) {
        document.querySelector('.icon-lock').classList.add('next');
    } else {
        document.querySelector('.icon-lock').classList.remove('next');
    }
});

// Click event listener for password next button
document.querySelector('.next-button.password').addEventListener('click', function() {
    console.log('Something');
    document.querySelector('.password-section').classList.add('fold-up');
    document.querySelector('.repeat-password-section').classList.remove('folded');
});

// Event listener for repeat password input
document.querySelector('.repeat-password').addEventListener('input', function() {
    if (this.value) {
        document.querySelector('.icon-repeat-lock').classList.add('next');
    } else {
        document.querySelector('.icon-repeat-lock').classList.remove('next');
    }
});

// Click event listener for repeat password next button
document.querySelector('.next-button.repeat-password').addEventListener('click', function() {
    console.log('Something');
    document.querySelector('.repeat-password-section').classList.add('fold-up');
    document.querySelector('.success').style.marginTop = '0';
});
