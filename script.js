// Show hidden heart container with animation and play music
function showHeart() {
  const heartContainer = document.getElementById('heart-container');
  heartContainer.classList.remove('hidden');
  heartContainer.style.display = 'block';

  // Play the music after button click
  const backgroundMusic = document.getElementById('background-music');
  backgroundMusic.play().catch((error) => {
    console.log('Audio playback failed:', error);
  });
}
