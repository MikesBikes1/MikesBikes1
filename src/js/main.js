document.addEventListener('DOMContentLoaded', function() {
    const timeSelect = document.getElementById('time');
    
    function populateTimeSlots() {
        timeSelect.innerHTML = '';
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                let nextHour = hour;
                let nextMinute = minute + 30;
                if (nextMinute === 60) {
                    nextMinute = 0;
                    nextHour = (nextHour + 1) % 24; // Reset hour after 23
                }
                
                const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                const nextTimeString = `${nextHour.toString().padStart(2, '0')}:${nextMinute.toString().padStart(2, '0')}`;
                const option = document.createElement('option');
                option.value = `${timeString}-${nextTimeString}`;
                option.textContent = `${timeString} - ${nextTimeString}`;
                timeSelect.appendChild(option);
            }
        }
    }

    const dateInput = document.getElementById('date');
    dateInput.addEventListener('change', populateTimeSlots);
});
