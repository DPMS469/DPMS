document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        alert(`${this.textContent} clicked!`);
    });
});

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