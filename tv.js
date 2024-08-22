document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    let currentIndex = 0;

    function showNextMessage() {
        messages.forEach((message, index) => {
            if (index === currentIndex) {
                message.style.opacity = 1;
            } else {
                message.style.opacity = 0;
            }
        });

        currentIndex = (currentIndex + 1) % messages.length;
    }

    setInterval(showNextMessage, 5000); // Change message every 5 seconds
    showNextMessage(); // Show the first message initially
});


