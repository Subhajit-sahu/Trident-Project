// about.js
document.addEventListener("DOMContentLoaded", () => {
    const aboutContent = document.querySelector(".about-content");
    const aboutImage = document.querySelector(".about-image img");

    function applyHoverEffect(element) {
        element.addEventListener("mouseenter", () => {
            element.style.transform = "scale(1.05)";
            element.style.transition = "transform 0.3s ease-in-out";
        });
        element.addEventListener("mouseleave", () => {
            element.style.transform = "scale(1)";
        });
    }

    applyHoverEffect(aboutContent);
    applyHoverEffect(aboutImage);

    window.addEventListener("scroll", () => {
        let contentPosition = aboutContent.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (contentPosition < screenPosition) {
            aboutContent.style.opacity = "1";
            aboutContent.style.transform = "translateY(0)";
            aboutContent.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        }
    });
});
