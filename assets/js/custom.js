/* loader event hide after loading */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loaderContainer = document.querySelector('.load-container');
        loaderContainer.style.display = 'none';
    },1000)
})
/* end of loader event */