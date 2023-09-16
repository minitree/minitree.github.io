document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    const resultElement = document.getElementById("result");
    const enableExtraDiceLakeCheckbox = document.getElementById("enableExtraDiceLakes");
    const enableExtraDiceRiverCheckbox = document.getElementById("enableExtraDiceRivers");
    const dieImages = [
        document.getElementById("dieImage1"),
        document.getElementById("dieImage2"),
        document.getElementById("dieImage3"),
        document.getElementById("dieImage4"),
        document.getElementById("dieImage5"),
        document.getElementById("dieImage6"),
        document.getElementById("dieImage7"),
        document.getElementById("dieImage8"),
    ];

    rollButton.addEventListener("click", function () {
        const BothChecked = enableExtraDiceLakeCheckbox.checked & enableExtraDiceRiverCheckbox.checked ? 8 : 4
        const numDiceLake = enableExtraDiceLakeCheckbox.checked ? 6 : 4;
        const numDiceRiver = enableExtraDiceRiverCheckbox.checked ? 6 : 4;
        const numDice = Math.max(BothChecked, numDiceLake, numDiceRiver)
        const rollResults = [];
        for (let i = 0; i < numDice; i++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const imagePath = `images/die${i + 1}-${randomNumber}.jpg`;
            dieImages[i].src = imagePath;
            rollResults.push(randomNumber);
        }
        const total = rollResults.reduce((a, b) => a + b, 0);
    });
});
