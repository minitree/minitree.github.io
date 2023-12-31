document.addEventListener("DOMContentLoaded", function () {

    const rollButton = document.getElementById("rollButton");

    const enableExtraDiceLakeCheckbox = document.getElementById("enableExtraDiceLakes");
    const enableExtraDiceRiverCheckbox = document.getElementById("enableExtraDiceRivers");
    const enableExtraDiceLavaCheckbox = document.getElementById("enableExtraDiceLava");
    const enableExtraDiceMeteorCheckbox = document.getElementById("enableExtraDiceMeteors");

    const dieImages = [
        document.getElementById("dieImage1"),
        document.getElementById("dieImage2"),
        document.getElementById("dieImage3"),
        document.getElementById("dieImage4"),
        document.getElementById("dieImage5"),
        document.getElementById("dieImage6"),
        document.getElementById("dieImage7"),
        document.getElementById("dieImage8"),
        document.getElementById("dieImage9"),
        document.getElementById("dieImage10"),
        document.getElementById("dieImage11"),
        document.getElementById("dieImage12"),
    ];

    for (let i = 4; i < dieImages.length; i++) {
        dieImages[i].style.display = "none";
    }

    enableExtraDiceLakeCheckbox.addEventListener("change", function () {
        if (this.checked) {
            dieImages[4].style.display = "inline-block";
            dieImages[5].style.display = "inline-block";
        } else {
            dieImages[4].style.display = "none";
            dieImages[5].style.display = "none";
        }
    });

    enableExtraDiceRiverCheckbox.addEventListener("change", function () {
        if (this.checked) {
            dieImages[6].style.display = "inline-block";
            dieImages[7].style.display = "inline-block";
        } else {
            dieImages[6].style.display = "none";
            dieImages[7].style.display = "none";
        }
    });

    enableExtraDiceLavaCheckbox.addEventListener("change", function () {
        if (this.checked) {
            dieImages[8].style.display = "inline-block";
            dieImages[9].style.display = "inline-block";
        } else {
            dieImages[8].style.display = "none";
            dieImages[9].style.display = "none";
        }
    });

    enableExtraDiceMeteorCheckbox.addEventListener("change", function () {
        if (this.checked) {
            dieImages[10].style.display = "inline-block";
            dieImages[11].style.display = "inline-block";
        } else {
            dieImages[10].style.display = "none";
            dieImages[11].style.display = "none";
        }
    });

    rollButton.addEventListener("click", function () {

        dieImages.forEach((image) => {
            image.classList.remove("selected");
        });

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
            dieImages[4+j].style.display = "inline-block";
        }
        for (let k = 0; k < numDiceRiver; k++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const imagePath = `images/river${k + 1}-${randomNumber}.jpg`;
            dieImages[6+k].src = imagePath;
            dieImages[6+k].style.display = "inline-block";
        }
    });

    dieImages.forEach((image) => {
        image.addEventListener("click", function () {
            image.classList.toggle("selected");
        });
    });
});
