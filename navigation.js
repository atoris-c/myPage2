// Simple navigation functionality for portfolio pages
document.addEventListener('DOMContentLoaded', function() {
    // Preloader functionality
    const preloader = document.getElementById('preloader');
    const desktop = document.querySelector('.desktop');
    
    if (preloader && desktop) {
        // Show main content with entrance animation after 2.5 seconds
        setTimeout(() => {
            // Start fade out preloader
            preloader.classList.add('fade-out');
            
            // Show main content with entrance effect
            setTimeout(() => {
                desktop.classList.add('loaded');
                // Remove preloader from DOM after transition
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }, 200);
        }, 2500);
    } else if (desktop) {
        // If there's no preloader, show content immediately
        desktop.classList.add('loaded');
    }
    
    // Find menu buttons using various selectors used across pages
    const menuButtons = document.querySelectorAll('.menu, .menu-button, button[aria-label*="navigation"], button[aria-label*="menu"]');
    
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Navigate to overlay page when menu is clicked
            window.location.href = 'overlay.html';
        });
    });
});