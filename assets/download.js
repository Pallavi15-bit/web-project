document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.querySelector(".download-btn");

    downloadButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default <a> behavior

        alert("Your download is starting... 🚀");

        // Start the download
        window.location.href = "https://github.com/arpanghosal0160/miniprj/releases/download/v1.0/AAGNI-Setup.exe";

        // Optional: Log the download event
        console.log("User clicked on the download button.");
    });
});
