// Function to initialize clock format toggle
function initClockFormatToggle() {
    const toggleButton = document.getElementById('clock-format-toggle');
    toggleButton.addEventListener('click', function() {
        const is24Hour = toggleButton.classList.toggle('active');
        updateClockDisplay(is24Hour);
    });
}

// Function to update clock display based on format
function updateClockDisplay(is24Hour) {
    const currentTime = new Date();
    let hours = currentTime.getUTCHours();
    const minutes = String(currentTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getUTCSeconds()).padStart(2, '0');

    if (!is24Hour) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;  // Convert 0 to 12
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${period}`;
    } else {
        document.getElementById('clock').textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    }
}

// Function to handle manual UTC/GMT offset
function setTimezoneOffset() {
    const offsetInput = document.getElementById('timezone-offset');
    offsetInput.addEventListener('change', function() {
        const offset = parseInt(offsetInput.value, 10);
        const currentTime = new Date();
        const utcTime = currentTime.getTime() + (offset * 3600 * 1000);
        const localTime = new Date(utcTime);
        updateClockDisplay(localTime);
    });
}

// Initialize the clock and controls
initClockFormatToggle();
setTimezoneOffset();