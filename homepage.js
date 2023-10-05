const logoBlocks = document.querySelectorAll('.logo-block');
const logoDiv = document.querySelector('.logo-div');

function initLogo() {
    logoBlocks.forEach((block, index) => {
        setTimeout(() => {
            block.style.filter = "opacity(1)";

            if(index == 0) {
                block.style.transform = "rotate(30deg)";
            } else if (index == 1) {
                block.style.transform = "rotate(-30deg)";
            } else if (index == 2) {
                block.style.transform = "rotate(30deg)";
            } else if (index == 3) {
                block.style.transform = "rotate(-30deg)";

                setTimeout(() => {
                    logoDiv.style.animation = "lightbulb 2s";

                    setTimeout(() => {
                        logoDiv.style.filter = "brightness(1)";
                        logoDiv.style.animation = "none";
                    }, 2000);
                }, 1000);

            }

        }, 1000 * index)
    });
}

initLogo();