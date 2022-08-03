/* loader event hide after loading */
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.load-container').style.display = 'none'
    })
},1000)
/* end of loader event */