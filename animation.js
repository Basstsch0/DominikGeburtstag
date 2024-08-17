//jshint esversion:6
(() => {
    const button = document.querySelector("#openGiftButtonReal"), spotlight = document.querySelector("#spotlight");
    button.addEventListener("click", () => {
        spotlight.classList.add("open");
        button.remove();
    });
})();