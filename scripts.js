function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'green';
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}

function updateH1FromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');

    const h1Element = document.querySelector('h1');

    if (utmTerm) {
        h1Element.textContent = utmTerm;
    }
}

function logCurrentTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
}