// Płynne pojawianie się elementów podczas przewijania

const elements = document.querySelectorAll(
    "section, .card, .price-card, .image-box, .contact-info, .cta"
);

elements.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});