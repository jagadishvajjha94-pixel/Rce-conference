lucide.createIcons();
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
const brandText = document.getElementById("brand-text");
const brandLogo = document.getElementById("brand-logo");
const menuIcon = document.getElementById("menu-icon");

function setIcon(name) {
    menuIcon.innerHTML = `<i data-lucide="${name}" class="w-8 h-8"></i>`;
    lucide.createIcons();
}

setIcon("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");

    if (window.innerWidth < 1024) {
        const isOpening = brandText.classList.contains("hidden");

        brandText.classList.toggle("hidden");
        brandText.classList.toggle("flex");

        brandLogo.classList.toggle("hidden", isOpening);

        setIcon(isOpening ? "x" : "menu");
    }
});

const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-md", "bg-white/95");
        navbar.classList.remove("bg-transparent");
    } else {
        navbar.classList.remove("shadow-md");
    }

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
});
