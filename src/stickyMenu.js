window.onscroll = function () {
    stickyScroll();
};

const menu = document.getElementById(['menu']);

const sticky = menu.offsetTop;

export function stickyScroll() {
    if (window.pageYOffset > sticky) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
}
