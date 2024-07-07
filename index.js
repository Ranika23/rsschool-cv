const modalAbout = document.querySelector(".modal-background")
function openModal() {
    modalAbout.classList.add("open");
    modalAbout.classList.remove("close");
};
function closeModal() {
    modalAbout.classList.add("close");
    modalAbout.classList.remove("open");
};

document.querySelector(".about__button").addEventListener("click", openModal);
document.querySelector("#link1").addEventListener("click", openModal);
document.querySelector(".modal-about").addEventListener("click", event => {
    event._isClickModal = true;
});

modalAbout.addEventListener("click", event => {
    if (event._isClickModal) return;
    closeModal();
});
