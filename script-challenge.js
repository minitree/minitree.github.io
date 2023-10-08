document.addEventListener("DOMContentLoaded", function () {

    const rollButton = document.getElementById("rollButton2");

    const enableExtraDiceForestCheckbox = document.getElementById("enableExtraDiceForests2");
    const enableExtraDiceTrailCheckbox = document.getElementById("enableExtraDiceTrails2");
    const enableExtraDiceDesertCheckbox = document.getElementById("enableExtraDiceDesert2");
    const enableExtraDiceCanyonCheckbox = document.getElementById("enableExtraDiceCanyon2");

    const dieImages = [
        document.getElementById("die2Image1"),
        document.getElementById("die2Image2"),
        document.getElementById("die2Image3"),
        document.getElementById("die2Image4"),
        document.getElementById("die2Image5"),
        document.getElementById("die2Image6"),
        document.getElementById("die2Image7"),
        document.getElementById("die2Image8"),
        document.getElementById("die2Image9"),
        document.getElementById("die2Image10"),
        document.getElementById("die2Image11"),
        document.getElementById("die2Image12"),
        document.getElementById("die2Image13"),
        document.getElementById("die2Image14"),
        document.getElementById("die2Image15"),
        document.getElementById("die2Image16"),
    ];

    for (let i = 4; i < dieImages.length; i++) {
        dieImages[i].style.display = "none";
    }

    enableExtraDiceForestCheckbox.addEventListener("change", function () {
        if (this.checked) {
            dieImages[8].style.display = "inline-block";
            dieImages[9].style.display = "inline-block";
        } else {
            dieImages[8].style.display = "none";
            dieImages[9].style.display = "none";
        }
    });
    enableExtraDiceTrailCheckbox.addEventListener("change", function () {
        if (this.checked) {
            dieImages[10].style.display = "inline-block";
            dieImages[11].style.display = "inline-block";
        } else {
            dieImages[10].style.display = "none";
            dieImages[11].style.display = "none";
        }
    });
    enableExtraDiceDesertCheckbox.addEventListener("change", function () {
        if (this.checked) {
            dieImages[12].style.display = "inline-block";
            dieImages[13].style.display = "inline-block";
        } else {
            dieImages[12].style.display = "none";
            dieImages[13].style.display = "none";
        }
    });
    enableExtraDiceCanyonCheckbox.addEventListener("change", function () {
        if (this.checked) {
            dieImages[14].style.display = "inline-block";
            dieImages[15].style.display = "inline-block";
        } else {
            dieImages[14].style.display = "none";
            dieImages[15].style.display = "none";
        }
    });

    rollButton.addEventListener("click", function () {

        dieImages.forEach((image) => {
            image.classList.remove("selected");
        });

        const numDiceForest = enableExtraDiceForestCheckbox.checked ? 2 : 0;
        const numDiceTrail = enableExtraDiceTrailCheckbox.checked ? 2 : 0;
        const numDiceDesert = enableExtraDiceDesertCheckbox.checked ? 2 : 0;
        const numDiceCanyon = enableExtraDiceCanyonCheckbox.checked ? 2 : 0;
        const numDice = 4
        for (let i = 0; i < numDice; i++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const imagePath = `images-challenge/die${i + 1}-${randomNumber}.jpg`;
            dieImages[i].src = imagePath;
        }
        for (let l = 0; l < numDiceForest; l++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const imagePath = `images-challenge/forest${l + 1}-${randomNumber}.png`;
            dieImages[8+l].src = imagePath;
            dieImages[8+l].style.display = "inline-block";
        }
        for (let m = 0; m < numDiceTrail; m++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const imagePath = `images-challenge/trail${l + 1}-${randomNumber}.png`;
            dieImages[10+m].src = imagePath;
            dieImages[10+m].style.display = "inline-block";
        }
    });

    dieImages.forEach((image) => {
        image.addEventListener("click", function () {
            image.classList.toggle("selected");
        });
    });
});
