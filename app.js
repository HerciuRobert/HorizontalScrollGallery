// Documentation:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft

const slider = document.querySelector(".container");
let isDown = false;

let startX;
let scrollToLeft;

slider.addEventListener("mousedown", function(e) {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollToLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", function() {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseleave", function() {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", function(e) {
    if(!isDown) return;
    e.preventDefault();

    const distanceX = e.pageX - slider.offsetLeft;
    const drag = distanceX - startX;
    slider.scrollLeft = scrollToLeft - drag;
});