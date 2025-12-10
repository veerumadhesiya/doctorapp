// Header scroll effect
// window.addEventListener("scroll", () => {
//     const header = document.getElementById("header");
//     if(window.scrollY > 50){
//         header.classList.add("scrolled");
//     } else {
//         header.classList.remove("scrolled");
//     }
// });
// testimonal=======
const slider = document.getElementById("slider");
let count = 0;

const autoSlide = () => {
    count++;
    if (count > slider.children.length - 6) {
        count = 0;
    }
    slider.style.transform = `translateX(-${count * 260}px)`;
};

let slideInterval = setInterval(autoSlide, 2000);

// Pause on Hover
slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
slider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(autoSlide, 2000);
});
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent other events
        
        const faq = toggle.parentElement;
        const answer = faq.querySelector(".faq-answer");
        const isOpen = answer.style.display === "block";

        // Close all others before opening new
        document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
        document.querySelectorAll(".faq-toggle").forEach(t => t.textContent = "+");

        if (!isOpen) {
            answer.style.display = "block";
            toggle.textContent = "−";
        }
    });
});

