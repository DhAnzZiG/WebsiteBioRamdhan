document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
    const calendarElement = document.getElementById('calendar');

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        timeElement.textContent = timeString;
    }

    function updateCalendar() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('id-ID', options);
        calendarElement.textContent = dateString;
    }

    setInterval(updateTime, 1000);
    updateCalendar();
    updateTime();

    // Toggle details functionality
    const toggleButtons = document.querySelectorAll('.toggle-details');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            if (details.style.display === "none") {
                details.style.display = "block";
                button.textContent = "Close";
            } else {
                details.style.display = "none";
                button.textContent = "Try it";
            }
        });
    });
});