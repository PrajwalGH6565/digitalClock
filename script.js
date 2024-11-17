let is24HourFormat = true; // Default to 24-hour format

function updateClock() {
    const now = new Date();

    // Format time
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    if (!is24HourFormat) {
        const amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        document.getElementById('time').innerText = `${hours}:${minutes}:${seconds} ${amPm}`;
    } else {
        document.getElementById('time').innerText = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    }

    // Format date
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = now.getFullYear();
    document.getElementById('date').innerText = `${day}-${month}-${year}`;
}

// Toggle between 12-hour and 24-hour format
function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock(); // Update the clock immediately when format changes
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately
