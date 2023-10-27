const subscribeButton = document.getElementById("subscribeButton");
const unlockButton = document.getElementById("unlockButton");
const countdown = document.getElementById("countdown");

let remainingTime = 30;
let subscribed = false;

updateCountdown();

function updateCountdown() {
    countdown.textContent = remainingTime;
}

function startCountdown() {
    const countdownInterval = setInterval(() => {
        remainingTime--;
        updateCountdown();

        if (remainingTime <= 0 && subscribed) {
            clearInterval(countdownInterval);
            unlockButton.disabled = false;
        }
    }, 1000);
}

subscribeButton.addEventListener("click", () => {
    // Abre la página de suscripción de YouTube en una nueva pestaña
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran", "_blank");

    // Simula que el usuario se ha suscrito (puedes ajustar esto según tus necesidades)
    subscribed = true;

    const h1Element = document.querySelector("h1");
    h1Element.textContent = "1/1";
    h1Element.classList.add("completed"); // Agrega la clase "completed" al h1

    subscribeButton.style.display = "none"; // Oculta el botón "Subscribe to Unlock"

    // Inicia el contador
    startCountdown();
});

unlockButton.addEventListener("click", () => {
    
    window.open("https://www.mediafire.com/file/2lhk5zphyqcdjjo/FIFA+14.zip/file", "_blank");
});
