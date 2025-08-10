// script.js
document.addEventListener('DOMContentLoaded', function() {
    const entryOverlay = document.getElementById('entry-overlay');
    const enterButton = document.getElementById('enter-button');
    const mainContent = document.querySelector('.main-content');
    const slideshowImg = document.getElementById('slideshow-img');

    // Slideshow images (replace with your actual wedding photos)
    const images = [
        'https://i.imgur.com/WNXWuf6.jpeg',
        'https://i.imgur.com/mehFjlj.jpeg',
        'https://i.imgur.com/vBrTHuw.jpeg'
    ];
    let currentImageIndex = 0;

    function startSlideshow() {
        // Ensure slideshowImg exists before trying to manipulate it
        if (slideshowImg) {
            setInterval(() => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                slideshowImg.style.opacity = 0; // Fade out
                setTimeout(() => {
                    slideshowImg.src = images[currentImageIndex];
                    slideshowImg.style.opacity = 1; // Fade in
                }, 1000); // Match CSS transition duration
            }, 5000); // Change image every 5 seconds
        }
    }

    // Handle entry button click
    enterButton.addEventListener('click', function() {
        entryOverlay.classList.add('hidden'); // Hide overlay
        mainContent.classList.add('visible'); // Show main content

        // Start slideshow only after entering
        startSlideshow();
    });

    // Optional: Hide overlay immediately if it's already visited (for development or specific user experience)
    // If you uncomment this, the slideshow will start immediately on subsequent visits.
    // if (sessionStorage.getItem('visited')) {
    //     entryOverlay.classList.add('hidden');
    //     mainContent.classList.add('visible');
    //     startSlideshow(); // Start slideshow immediately
    // } else {
    //     sessionStorage.setItem('visited', 'true');
    // }

    // --- COUNTDOWN TIMER SCRIPT ---
    // Set the date we're counting down to
    // IMPORTANT: This date is now set to October 11, 2025, 2:00 PM (14:00:00) in Yerevan's time zone (GMT+0400).
    const countdownDate = new Date("Oct 11, 2025 14:00:00 GMT+0400").getTime();

    // Update the countdown every 1 second
    let countdownInterval = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the countdown date
        let distance = countdownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements, adding leading zeros if needed
        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        if (daysElement && hoursElement && minutesElement && secondsElement) { // Ensure elements exist
            daysElement.innerHTML = String(days).padStart(2, '0');
            hoursElement.innerHTML = String(hours).padStart(2, '0');
            minutesElement.innerHTML = String(minutes).padStart(2, '0');
            secondsElement.innerHTML = String(seconds).padStart(2, '0');
        }


        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownInterval); // Stop the countdown
            // Update the display to show a message instead of zeros
            const countdownContainer = document.querySelector("#important-dates .flex.justify-center");
            if (countdownContainer) { // Check if the container exists before modifying
                countdownContainer.innerHTML = "<p class='text-4xl font-heading text-primary text-center w-full'>The Celebration Has Begun!</p>";
            }
        }
    }, 1000); // Update every 1000ms (1 second)
});
