// Execute code once the window is fully loaded
window.onload = () => {
  // Select the photo and video elements
  const photo = document.getElementById("photo");
  const video = document.getElementById("video");

  // Initially show the photo by removing the "hidden" class
  photo.classList.remove("hidden");

  // After 5 seconds, hide the photo and show the video
  setTimeout(() => {
      photo.classList.add("hidden"); // Hide the photo
      video.classList.remove("hidden"); // Show the video
      video.play(); // Start playing the video
  }, 5000); // 5000 milliseconds = 5 seconds
};
