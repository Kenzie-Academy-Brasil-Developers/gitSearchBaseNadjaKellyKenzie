export const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

export const repositorio = async () => {
    try{
        const allRepositorio = await fetch(`https://api.github.com/users/${user.login}/repos`, {
            method:'GET', 
            headers: { 
                "Content-Type": "application/json"
            }
        })
    const response = await allRepositorio.json()
    return response
    } catch (error) {
        
    }
    
};

function renderHeader(){
    const header = document.querySelector('header');
    header.classList.add('header__div')

    const div = document.createElement('div');
    div.classList.add('user__pag-conect');

    const img = document.createElement('img');
    img.src = user.avatar_url;

    const name = document.createElement('h1');
    name.innerText = user.name;

    const divButton = document.createElement('div');
    divButton.classList.add('user__pag-button');

    const buttonHeader = document.createElement('button');
    buttonHeader.innerText = 'Trocar de usuário'
    buttonHeader.classList.add('user__button-header');
    buttonHeader.addEventListener('click', () => {
        window.location.replace('../../index.html');
    });

    divButton.appendChild(buttonHeader);
    div.append(img,name);
    header.append(div,divButton);
}

renderHeader();



async function renderProject(){
    const data = await repositorio();


    const ul = document.querySelector('.render');
    data.forEach(element => {
        
        const li = document.createElement('li');
        li.classList.add('list');

        const nameProject = document.createElement('h3');
        nameProject.innerText = element.name;

        const descriptionProject = document.createElement('p');
        descriptionProject.classList.add('pLimit');
        descriptionProject.innerText = element.description;

        const ancoraRep = document.createElement('a');
        ancoraRep.href = element.url;
        ancoraRep.target = '_blank';
        ancoraRep.innerText = 'Repositório';

        li.append(nameProject,descriptionProject,ancoraRep);
        ul.append(li)

    });
    
}

renderProject ();
