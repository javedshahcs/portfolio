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

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });
}


// Contact Form Submission (Netlify Forms via AJAX)
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Hide any previous messages
        formSuccess.classList.add('hidden');
        formError.classList.add('hidden');

        const formData = new FormData(contactForm);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then((response) => {
            if (response.ok) {
                contactForm.reset();
                formSuccess.classList.remove('hidden');
                setTimeout(() => formSuccess.classList.add('hidden'), 6000);
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(() => {
            formError.classList.remove('hidden');
            setTimeout(() => formError.classList.add('hidden'), 6000);
        });
    });
}

// Automatic color assignment based on percentage (direct color, no Tailwind class conflicts)
function getSkillColor(percent) {
    if (percent >= 80) return '#4ade80';   // green-400
    if (percent >= 60) return '#60a5fa';   // blue-400
    if (percent >= 40) return '#facc15';   // yellow-400
    return '#f87171';                       // red-400
}

// Apply colors immediately based on data-percent
document.querySelectorAll('.skill-bar').forEach(bar => {
    const percent = parseInt(bar.getAttribute('data-percent'), 10);
    bar.style.backgroundColor = getSkillColor(percent);
});

document.querySelectorAll('.skill-percent-label').forEach(label => {
    const percent = parseInt(label.getAttribute('data-percent'), 10);
    label.style.color = getSkillColor(percent);
});

// Animate bars when About section comes into view
const skillBars = document.querySelectorAll('.skill-bar');
if (skillBars.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 100);
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => skillObserver.observe(bar));
}