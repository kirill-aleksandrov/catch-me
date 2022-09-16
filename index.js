const button = document.getElementById('button');
const buttonHeight = 30;
const buttonWidth = 100;

button.addEventListener('mouseover', () => {
    button.style.top = Math.random() * (window.innerHeight - buttonHeight) + 'px';
    button.style.left = Math.random() * (window.innerWidth - buttonWidth) + 'px';
})
