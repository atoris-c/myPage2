// Simple navigation functionality for portfolio pages
document.addEventListener('DOMContentLoaded', function() {
    // Find menu buttons using various selectors used across pages
    const menuButtons = document.querySelectorAll('.menu, .menu-button, button[aria-label*="navigation"], button[aria-label*="menu"]');
    
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Navigate to overlay page when menu is clicked
            window.location.href = 'overlay.html';
        });
    });
});