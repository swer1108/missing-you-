
/* ===== A LITTLE MAGIC FOR MAMMA ===== */

// Find the message area on our webpage.
const messageElement = document.getElementById("message");

// The words we want to share with mamma.
const message = "If my missing you could become an ocean, mamma, the world would never find its shore. 💜";

// Start with an empty message.
messageElement.textContent = "";

// Reveal the message one character at a time.
let letterIndex = 0;

function revealMessage() {
    if (letterIndex < message.length) {
        messageElement.textContent += message.charAt(letterIndex);
        letterIndex++;

        setTimeout(revealMessage, 65);
    }
}

// Wait a little before the words begin to appear.
setTimeout(revealMessage, 1800);


// ===== SHOOTING STAR =====

function createShootingStar() {
    const sky = document.querySelector(".sky");
    const shootingStar = document.createElement("div");

    shootingStar.style.position = "absolute";
    shootingStar.style.top = Math.random() * 55 + "%";
    shootingStar.style.left = Math.random() * 75 + "%";
    shootingStar.style.width = "3px";
    shootingStar.style.height = "3px";
    shootingStar.style.borderRadius = "50%";
    shootingStar.style.background = "#ffffff";
    shootingStar.style.boxShadow = "0 0 10px 3px #f5ddff";
    shootingStar.style.pointerEvents = "none";
    shootingStar.style.zIndex = "1";

    sky.appendChild(shootingStar);

    shootingStar.animate(
        [
            {
                transform: "translate(0, 0)",
                opacity: 0
            },
            {
                transform: "translate(-45px, 35px)",
                opacity: 1
            },
            {
                transform: "translate(-150px, 110px)",
                opacity: 0
            }
        ],
        {
            duration: 1200,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        shootingStar.remove();
    }, 1300);
}

// A shooting star appears occasionally.
setInterval(createShootingStar, 4500);
