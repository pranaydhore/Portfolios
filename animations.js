// Wait for GSAP to load
document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        // Initialize all animations
        initFloatingCircles();
        initScrollAnimations();
    } else {
        console.warn('GSAP is not loaded. Please check if the script is properly included.');
    }
});

// Initialize floating circles animation
const initFloatingCircles = () => {
    const circles = document.querySelectorAll('.circle');
    
    if (circles.length === 0) {
        console.warn('No circle elements found');
        return;
    }

    circles.forEach((circle, index) => {
        try {
            gsap.to(circle, {
                x: gsap.utils.random(-20, 20, 5),
                y: gsap.utils.random(-20, 20, 5),
                duration: gsap.utils.random(3, 6),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.2
            });
        } catch (error) {
            console.error('Error animating circle:', error);
        }
    });
};

// Scroll animations for cards
const initScrollAnimations = () => {
    try {
        // Check for IntersectionObserver support
        if (!('IntersectionObserver' in window)) {
            console.warn('IntersectionObserver not supported');
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    try {
                        gsap.to(entry.target, {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power3.out",
                            clearProps: "all" // Clean up after animation
                        });
                    } catch (error) {
                        console.error('Error animating element:', error);
                    }
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: "50px"
        });

        // Observe project and skill cards
        const elements = document.querySelectorAll('.project-card, .skill-card');
        
        if (elements.length === 0) {
            console.warn('No project or skill cards found');
            return;
        }

        elements.forEach(el => {
            // Set initial state
            gsap.set(el, {
                y: 50,
                opacity: 0
            });
            observer.observe(el);
        });

    } catch (error) {
        console.error('Error initializing scroll animations:', error);
    }
};

// Add additional animation features
const initAdditionalAnimations = () => {
    // Skill bars animation
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        if (skillBars.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const level = bar.getAttribute('data-level') || "0";
                    
                    gsap.to(bar, {
                        width: `${level}%`,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    };

    // Timeline items animation
    const animateTimeline = () => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        if (timelineItems.length === 0) return;

        timelineItems.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    };

    // Hero section animation
    const animateHero = () => {
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .social-links');
        
        if (heroElements.length === 0) return;

        gsap.from(heroElements, {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    };

    // Initialize all additional animations
    try {
        animateSkillBars();
        animateTimeline();
        animateHero();
    } catch (error) {
        console.error('Error initializing additional animations:', error);
    }
};

// Smooth scroll functionality
const initSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 70
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        // Register ScrollTrigger plugin if available
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
        
        initFloatingCircles();
        initScrollAnimations();
        initAdditionalAnimations();
        initSmoothScroll();
    } else {
        console.warn('GSAP is required for animations. Please include the GSAP library.');
    }
});