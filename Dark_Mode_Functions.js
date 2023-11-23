document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('Dark-mode');
    });
});