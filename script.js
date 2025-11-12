const input = document.querySelector('#searchInput'); // Use the ID from the HTML
const gameContainer = document.getElementById('games');
const games = gameContainer.querySelectorAll('a'); // Select the <a> tags, not the <img> tags

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();

  games.forEach(game => {
    // Find the img *inside* the <a> tag
    const img = game.querySelector('img');
    const gameName = img.alt.toLowerCase(); // Get the alt text from the img

    if (gameName.includes(searchTerm)) {
      game.style.display = ''; // Show the <a> tag (reverts to CSS default)
    } else {
      game.style.display = 'none'; // Hide the <a> tag
    }
  });
});
