document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    const resultElement = document.getElementById("result");
    const dieImages = [
        document.getElementById("dieImage1"),
        document.getElementById("dieImage2"),
        document.getElementById("dieImage3"),
        document.getElementById("dieImage4"), // Add the fourth image element
    ];

    rollButton.addEventListener("click", function () {
        const rollResults = [];
        for (let i = 0; i < 4; i++) { // Change to 4 for the fourth type of dice
            const randomNumber = Math.floor(Math.random() * 6) + 1; // Adjust to your new dice type
            const imagePath = `images/die${i + 1}-${randomNumber}.jpg`; // Adjust the image name pattern
            dieImages[i].src = imagePath;
            rollResults.push(randomNumber);
        }
        const total = rollResults.reduce((a, b) => a + b, 0);
    });
});
