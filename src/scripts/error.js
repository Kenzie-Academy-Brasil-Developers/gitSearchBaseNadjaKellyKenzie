const error = () => {
    const button = document.querySelector('.buttonError');
    button.addEventListener('click', () =>{
        window.location.replace('../../index.html');
    })
}

error();