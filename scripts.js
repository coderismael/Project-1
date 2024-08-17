document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // GSAP animations
    gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".hero p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });
    gsap.from(".hero button", { duration: 2, scale: 0.5, opacity: 0, delay: 1 });

    gsap.from("nav ul li", {
        duration: 1,
        opacity: 0,
        y: -30,
        stagger: 0.2,
        delay: 0.5
    });

    gsap.from(".logo", { duration: 1, opacity: 0, scale: 0.5, delay: 0.2 });
});

function bookNow() {
    window.location.href = 'booking.html';
}
