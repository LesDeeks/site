// main.js

document.getElementById('1').style.borderRadius = '30% 70% 70% 30%/ 30% 58% 42% 70%';
document.getElementById('2').style.borderRadius = '38% 62% 25% 75% / 65% 45% 55% 35%';
document.getElementById('3').style.borderRadius = '80% 20% 75% 25% / 44% 34% 66% 56%';
document.getElementById('4').style.borderRadius = '50% 50% 24% 76% / 38% 55% 45% 62%';
document.getElementById('5').style.borderRadius = '25% 75% 42% 58% / 41% 63% 37% 59%';
document.getElementById('6').style.borderRadius = '79% 21% 42% 58% / 63% 35% 65% 37%';

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function toggleMode() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');

    body.classList.toggle('night-mode');
    body.classList.toggle('day-mode');

    if (body.classList.contains('night-mode')) {
        icon.textContent = '🌙';
        setCookie('mode', 'night', 7);
    } else {
        icon.textContent = '☀️';
        setCookie('mode', 'day', 7);
    }
}

function checkLink(url) {
    window.location.href = url;
}

window.onload = function() {
    const mode = getCookie('mode');
    const body = document.body;
    const icon = document.getElementById('mode-icon');

    if (mode === 'night') {
        body.classList.add('night-mode');
        body.classList.remove('day-mode');
        icon.textContent = '🌙';
    } else {
        body.classList.add('day-mode');
        body.classList.remove('night-mode');
        icon.textContent = '☀️';
    }
}
