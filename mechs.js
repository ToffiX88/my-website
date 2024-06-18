document.addEventListener('DOMContentLoaded', function() {
    const regLink = document.querySelector(".regLink");
    const logLink = document.querySelector(".logLink");
    const regContNone = document.querySelector(".regContNone");
    const logCont = document.querySelector(".logCont");

    const showRegCont = () => {
        logCont.classList.remove('logCont');
        logCont.classList.add('logContNone');
        regContNone.classList.remove('regContNone');
        regContNone.classList.add('regCont');
    }

    const showLogForm = () => {
        const regCont = document.querySelector(".regCont");
        const logContNone = document.querySelector(".logContNone");
        regCont.classList.remove('regCont');
        regCont.classList.add('regContNone');
        logContNone.classList.remove('logContNone');
        logContNone.classList.add('logCont');
    }


});
