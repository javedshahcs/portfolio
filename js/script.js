// Typing Effect
const words = ["Flutter Developer", "Software Engineer", "Eager to Learn AI", "Web Developer (Basic)"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingSpeed = 100;
const target = document.getElementById("typing-text");

function type() {
    currentWord = words[i];
    if (isDeleting) {
        target.textContent = currentWord.substring(0, j - 1);
        j--;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    } else {
        target.textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
        }
    }
    setTimeout(type, isDeleting ? 50 : typingSpeed);
}
type();

// Scroll Reveal
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// Navbar interaction
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'bg-surface/95');
        nav.classList.remove('py-4');
    } else {
        nav.classList.add('py-4');
        nav.classList.remove('py-2', 'bg-surface/95');
    }
    // Read More / Read Less toggle
document.querySelectorAll('.read-more-btn').forEach(btn => {
    const textEl = btn.previousElementSibling;
    btn.addEventListener('click', () => {
        const isExpanded = textEl.classList.toggle('expanded');
        btn.textContent = isExpanded ? 'Read Less' : 'Read More';
    });
});
});

// Video Demo Modal
document.querySelectorAll('[data-open-video]').forEach(btn => {
    btn.addEventListener('click', () => {
        const dialogId = btn.getAttribute('data-open-video');
        document.getElementById(dialogId).showModal();
    });
});

document.querySelectorAll('[data-close-video]').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('dialog').close();
    });
});

// Pause video when modal closes
document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('close', () => {
        const video = dialog.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
});