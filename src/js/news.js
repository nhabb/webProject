window.onload = () => {
  const photo = document.getElementById("photo");
  const video = document.getElementById("video");

  // Show the photo first
  photo.classList.remove("hidden");

  // Wait for 5 seconds, then show the video
  setTimeout(() => {
      photo.classList.add("hidden"); // Hide the photo
      video.classList.remove("hidden"); // Show the video
      video.play(); // Ensure the video starts playing
  }, 5000); // 5000ms = 5 seconds
};

