let changeText = document.getElementById('greeting');
let button = document.getElementById('btn');

button.addEventListener('click',() => {
    changeText.textContent = 'Hello JavaScript InnerHTML';
});