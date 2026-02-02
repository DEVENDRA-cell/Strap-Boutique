/* ========== Strap Boutique - WhatsApp Integration ========== */

// CONSTANT: WhatsApp phone number (replace with actual number)
const WHATSAPP_NUMBER = '91XXXXXXXXXX';

/**
 * Opens WhatsApp with a prefilled message
 * @param {string} message - The message to send
 */
function openWhatsApp(message) {
    // Encode the message for URL compatibility
    const encodedMessage = encodeURIComponent(message);
    
    // Build the WhatsApp click-to-chat URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.location.href = whatsappURL;
}

/**
 * Initialize WhatsApp buttons and smooth scroll for internal links
 */
document.addEventListener('DOMContentLoaded', function() {
    // Handle WhatsApp CTA buttons
    const whatsappButtons = document.querySelectorAll('[data-message]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            openWhatsApp(message);
        });
    });
    
    // Handle smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Highlight active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Call once on load
});
