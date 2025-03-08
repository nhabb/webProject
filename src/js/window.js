document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-video-btn");
    const closeBtn = document.getElementById("close-video-btn");
    const videoModal = document.getElementById("video-modal");
    const videoPlayer = document.getElementById("video-player");

    // Open Video Modal
    openBtn.addEventListener("click", () => {
        videoModal.style.display = "flex";
        videoPlayer.play();
    });

    // Close Video Modal and Redirect
    closeBtn.addEventListener("click", () => {
        videoModal.style.display = "none";
        videoPlayer.pause();
        // Redirect to new.html when the close button is clicked
        window.location.href = "../static/news.html"; // Adjust the path if necessary
    });

    // Close Modal if Clicked Outside Video
    videoModal.addEventListener("click", (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = "none";
            videoPlayer.pause();
        }
    });
});
