/* Bottom to top btn js */
document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollTopBtn");

    // Show button when user scrolls down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Scroll to top smoothly when clicked
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/* Fade in out on scroll */
document.addEventListener("scroll", function () {
    const pageTop = window.scrollY;
    const pageBottom = pageTop + window.innerHeight;
    const tags = document.querySelectorAll(".fadein");

    tags.forEach(tag => {
        if (tag.getBoundingClientRect().top < window.innerHeight) {
            tag.classList.add("visible");
        } else {
            tag.classList.remove("visible");
        }
    });
});
