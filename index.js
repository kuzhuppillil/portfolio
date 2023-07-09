const backToTop = document.querySelector(".back-to-top");

const observerTarget = document.querySelector("Header");

const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry)=>{
        if (!entry.isIntersecting) {
            backToTop.classList.add("shown")
        } else {
            backToTop.classList.remove("shown")
        }
    });
});

observer.observe(observerTarget);