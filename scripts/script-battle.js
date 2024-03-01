// JavaScript to trigger the appearance effect
document.addEventListener('DOMContentLoaded', function () {
    const pokemon = document.getElementById('transition');
    setTimeout(() => {
        pokemon.style.opacity = '1'; // Fade in effect
        pokemon.style.transform = 'scale(1.5) rotateY(180deg)';
        setTimeout(() => {
            pokemon.style.transform = 'scale(1)'; // Scale back to original size
        }, 1000); // Adjust timing as needed
    }, 1000); // Adjust timing as needed
});

document.getElementById('run').addEventListener('click', function () {

    var popupCard = document.getElementById('popup-battle');
    popupCard.style.display = 'none';
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function damage(percentage, side) {
    var healthPercentage = percentage
    if (side == 'ally') {
        var healthBar = 'allyHealthBar'
    }
    else {
        var healthBar = 'enemyHealthBar'
    }

    var allyHealthBar = document.getElementById(healthBar);
    var healthElement = allyHealthBar.querySelector('.health');
    var currentWidth = parseFloat(healthElement.style.width) || 0; // Get current width, default to 0 if NaN
    var newWidth = currentWidth - healthPercentage; // Add healthPercentage to current width
    if (newWidth > 25 && newWidth < 45) {
        var healthColor = 'orange'
    }
    if (newWidth < 25) { var healthColor = 'red' }


    if (newWidth <= 0) { healthElement.style.width = "0%"; koEffect(newWidth, side); }
    else {
        healthElement.style.width = newWidth + '%'
    } // Set the new width
    healthElement.style.backgroundColor = healthColor;

}
document.getElementById('fight').addEventListener('click', function () {
    // Update the width of the health bar dynamically
    var healthPercentage = getRandomNumber(5, 15); // Set the health percentage here

    damage(healthPercentage, 'ally')
    toggleTrembleEffect("allyImage");
    damage(healthPercentage / 4, 'enemy')
    var allyHealthBar = document.getElementById('allyHealthBar');
    var healthElement = allyHealthBar.querySelector('.health');

    console.log(healthElement.style.width);

});

document.getElementById('bag').addEventListener('click', function () {
    // Update the width of the health bar dynamically
    var healthPercentage = 10; // Set the health percentage here

    var allyHealthBar = document.getElementById('allyHealthBar');
    var healthElement = allyHealthBar.querySelector('.health');
    var currentWidth = parseFloat(healthElement.style.width) || 0; // Get current width, default to 0 if NaN
    var newWidth = currentWidth + healthPercentage; // Add healthPercentage to current width
    var healthColor = '#4caf50'; // Set the health color here
    if (newWidth > 25 && newWidth < 45) {
        var healthColor = 'orange'
    }
    if (newWidth < 25) { var healthColor = 'red' }
    healthElement.style.backgroundColor = healthColor;
    if (newWidth < 100) { healthElement.style.width = newWidth + '%'; } // Set the new width to 100
    else {
        healthElement.style.width = 100 + '%'
    }

});

function toggleTrembleEffect(imageId) {
    const imageElement = document.getElementById(imageId);
    imageElement.classList.add('tremble-effect');

    // Set the duration of the tremble effect here (in milliseconds)
    setTimeout(() => {
        imageElement.classList.remove('tremble-effect');
    }, 1000); // This will apply the effect for 1 second
}

function resetEnemyBoss() {
    var healthBar = 'enemyHealthBar'
    var allyHealthBar = document.getElementById(healthBar);
    var healthElement = allyHealthBar.querySelector('.health');
    var healthColor = '#4caf50'; // Set the health color here
    var popupCard = document.getElementById('popup-battle');
    var imageSide = popupCard.querySelector('.enemy img');
    imageSide.src = "../images/turtle.png";
    healthElement.style.width = '100%'
    healthElement.style.backgroundColor = healthColor;

}

function koEffect(health, side) {
    if (health < 0 || health == "0%") {
        var popupCard = document.getElementById('popup-battle');

        if (side == 'ally') { var allyImage = popupCard.querySelector('.ally img') }
        else { var allyImage = popupCard.querySelector('.enemy img'); }

        // Apply CSS transition
        allyImage.style.transition = 'opacity 0.5s ease';

        // Change the image source
        allyImage.src = "../images/ko.png";

        // Change button styles and disable them
        var runButton = document.getElementById('run');
        var fightButton = document.getElementById('fight');
        var bagButton = document.getElementById('bag');
        bagButton.style.backgroundColor = 'red';
        fightButton.style.backgroundColor = 'red';
        runButton.style.backgroundColor = 'green';
        bagButton.disabled = true;
        fightButton.disabled = true;

        document.getElementById('run').addEventListener('click', function () {
            resetButtons()
        });
    }
}

function resetButtons() {
    var runButton = document.getElementById('run');
    var fightButton = document.getElementById('fight');
    var bagButton = document.getElementById('bag');
    bagButton.style.backgroundColor = ''; // Reset to default background color
    fightButton.style.backgroundColor = '';
    runButton.style.backgroundColor = '';
    bagButton.disabled = false; // Enable the button
    fightButton.disabled = false;
}

// Define a global variable to hold the history of health values
var healthHistory = {};
// Function to update the history of health values
function historyHealth(name, health) {
    // Check if name already exists in healthHistory, if not, create a new entry
    if (!healthHistory[name]) {
        healthHistory[name] = []; // Initialize an array for the name if it doesn't exist
    }
    // Push the health value to the history list for the corresponding name
    healthHistory[name].push(health);
}
