import '../css/components.css';
import logoweb from '../assets/img/logo-gfx.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} eres  Omar`;
    document.body.append(h1);


    const img = document.createElement('img');
    img.src = logoweb;
    document.body.append(img);



}