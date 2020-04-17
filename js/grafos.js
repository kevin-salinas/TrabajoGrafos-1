const vertices = document.querySelector("#numVertices");
const btnListo = document.querySelector("#Listo").addEventListener('click',paresOrdernados);

const btnAdd = document.querySelector("#btnAdd");

function paresOrdernados(e){
    e.preventDefault();
    const col = document.querySelector('#lista');
    const li = document.createElement('li');
    const input = document.createElement('input');
    const add = document.createElement('button');
    const quit = document.createElement('button');

    li.className = 'row my-2';
    li.style.listStyle='none';
    input.className = 'form-control col-3';
    input.setAttribute('placeholder',"4,2");
    add.className = 'btn btn-primary mx-2';
    add.innerText = '+';
    add.id='btnAdd';
    quit.className = 'btn btn-danger mx-2';
    quit.innerText = '-';
    quit.id='btnQuit';

    li.appendChild(input);
    li.appendChild(add);
    li.appendChild(quit);

    col.appendChild(li);
    btnListo.disabled=true;
}



