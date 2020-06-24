window.onscroll = function () {
    stickyScroll();
};

const menu = document.getElementById(['menu']);

export function stickyScroll() {
    if (window.pageYOffset > 100) {
        console.log(menu.offsetTop);
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
}
