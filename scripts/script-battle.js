  // JavaScript to trigger the appearance effect
  document.addEventListener('DOMContentLoaded', function() {
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


document.getElementById('fight').addEventListener('click', function () {
    // Update the width of the health bar dynamically
    var healthPercentage = getRandomNumber(5, 15); // Set the health percentage here
    // Set the health color here
    var healthPercentageDisplay = document.getElementById('healthPercentageDisplay');

    var allyHealthBar = document.getElementById('allyHealthBar');
    var healthElement = allyHealthBar.querySelector('.health');
    var currentWidth = parseFloat(healthElement.style.width) || 0; // Get current width, default to 0 if NaN
    var newWidth = currentWidth - healthPercentage; // Add healthPercentage to current width
    if (newWidth > 25 && newWidth < 45) {
        var healthColor = 'orange'
    }
    if (newWidth < 25) { var healthColor = 'red' }

    toggleTrembleEffect('allyImage');
    healthElement.style.width = newWidth + '%'; // Set the new width
    healthElement.style.backgroundColor = healthColor;
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
    if (newWidth < 100) { healthElement.style.width = newWidth + '%' } // Set the new width to 100
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

