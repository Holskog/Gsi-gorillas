// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Game variables
    let score = 0;
    const gameBox = document.getElementById('gameBox');
    const scoreDisplay = document.getElementById('score');
    
    // Game functionality - Beat the Box
    if (gameBox) {
        gameBox.addEventListener('click', function() {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            
            // Change box color and position
            const colors = [
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
            ];
            
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            gameBox.style.background = randomColor;
            
            // Update text
            const messages = [
                'Great!',
                'Awesome!',
                'Keep going!',
                'You\'re on fire!',
                'Fantastic!',
                'Amazing!',
                'Click again!'
            ];
            
            gameBox.querySelector('p').textContent = messages[Math.floor(Math.random() * messages.length)];
            
            // Add celebration effect
            gameBox.style.transform = 'scale(1.2) rotate(360deg)';
            setTimeout(() => {
                gameBox.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Add scroll animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
