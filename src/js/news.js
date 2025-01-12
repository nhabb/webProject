window.onload = () => {
  const photo = document.getElementById("photo");
  const video = document.getElementById("video");

  photo.classList.remove("hidden");

  setTimeout(() => {
      photo.classList.add("hidden");
      video.classList.remove("hidden");
      video.play();
  }, 5000);
};

