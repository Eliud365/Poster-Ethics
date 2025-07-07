// Particles.js config for hero
particlesJS("particles-js", {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Scroll fade-in for tips
const tips = document.querySelectorAll('.tip');
window.addEventListener('scroll', () => {
    tips.forEach(tip => {
        const rect = tip.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            tip.classList.add('show');
        }
    });
});
