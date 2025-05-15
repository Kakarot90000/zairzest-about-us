// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () =>
 {
    // Get the image element with the class 'roo'
    const clickableImage = document.querySelector(".roo");

    // Get the target section to scroll to
    const targetSection = document.getElementById("target-section");

    // Add a click event listener to the image
    clickableImage.addEventListener("click", () => {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
const playButton = document.getElementById('playButton');
const audio = document.getElementById('bgMusic');
let isPlaying = false;

playButton.addEventListener('click', () => {
if (!isPlaying) {
  audio.play().then(() => {
    playButton.textContent = '⏸';
    playButton.classList.add('glow');  // Start glow
    isPlaying = true;
  }).catch(error => {
    console.log("Playback error:", error);
  });
} else {
  audio.pause();
  playButton.textContent = '▶';
  playButton.classList.remove('glow');  // Stop glow
  isPlaying = false;
}
});