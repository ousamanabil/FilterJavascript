let switcherLis = document.querySelectorAll(".switcher li");

let imgs = Array.from(document.images);

//Remove Active Class From All lis And Add To Current
switcherLis.forEach((li) => {

    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    });
}
//Manage Img
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}
