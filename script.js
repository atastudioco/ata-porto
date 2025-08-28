let section = document.querySelectorAll('section');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight - 150;

        if (top >= offset &&  top < offset + height) {
            sec.classList.add('show-motion');
        }
        
        else {
            sec.classList.remove('show-motion');
        }
    })
}