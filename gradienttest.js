var btn = document.querySelector('button');

btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === 'you live') {
        btn.textContent = 'empowered ruptures';
    } else if (btn.textContent === 'empowered ruptures') {
       btn.textContent = 'the stamens remembered'; 
    } else if (btn.textContent === 'the stamens remembered'){
        btn.textContent = 'by the Autumn dawn';
    } else if (btn.textContent === 'by the Autumn dawn'){
        btn.textContent = 'as you walk with me';
    } else if (btn.textContent === 'as you walk with me') {
        btn.textContent = 'home';
    } else if (btn.textContent === 'home'){
        btn.textContent = 'you live';
    }
}