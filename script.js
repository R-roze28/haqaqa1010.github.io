// Toggle Navbar
document.getElementById("menuBtn").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show");
});

// Scroll animation untuk about section
window.addEventListener("scroll", () => {
    const about = document.querySelector(".about");
    const pos = about.getBoundingClientRect().top;
    const win = window.innerHeight;

    if (pos < win - 150) {
        about.classList.add("show");
    }
});
