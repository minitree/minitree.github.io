document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
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
        const numDiceLake  = enableExtraDiceLakeCheckbox.checked  ? 2 : 0;
        const numDiceRiver = enableExtraDiceRiverCheckbox.checked ? 2 : 0;
        const numDice = 4
        for (let i = 0; i < numDice; i++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const imagePath = `images/die${i + 1}-${randomNumber}.jpg`;
            dieImages[i].src = imagePath;
        }
        for (let j = 0; j < numDiceLake; j++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const imagePath = `images/lake${j + 1}-${randomNumber}.jpg`;
            dieImages[4+j].src = imagePath;
        }
        for (let k = 0; k < numDiceRiver; k++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const imagePath = `images/river${k + 1}-${randomNumber}.jpg`;
            dieImages[6+k].src = imagePath;
        }
    });
});
