// SLICE de img
let arrayImagenes = ['./img/slice-01.webp', './img/slice-02.webp', './img/slice-03.webp', './img/slice-04.webp', './img/slice-05.webp']

let posicion = 0;

let isApagado = false;

function handleEvent () 
{
    
     // Abre y cierra menu Diseño
     let botonDiseno = document.getElementById ('botonDiseno');
     botonDiseno.addEventListener('click', apareceYDesapareceSubMenu);

     // Abre y cierra menu Foto
     let botonFoto = document.getElementById ('botonFoto');
     botonFoto.addEventListener('click', apareceYDesapareceSubMenu2);

     // Cambia el menu de barra a x y muestra menu 
     let botonMenu = document.getElementById ('barra__menu');
     botonMenu.addEventListener('click', muestraMenu);


     // Aparece busqueda
     let botonLupa = document.getElementById ('boton__lupa');
     botonLupa.addEventListener('mouseenter', muestraBusqueda);

     let botonLupaNo = document.getElementById ('cuadro__buscar');
     botonLupaNo.addEventListener('mouseleave', desapareceBusqueda);


     //MAIN
     //Slice
    let botonAdelante = document.getElementById('imagenAdelante');
    botonAdelante.addEventListener('click', pasaImagen);

    let botonAtras = document.getElementById('imagenAtras');
    botonAtras.addEventListener('click', atrasImagen);
}

// HEADER

// Abre y cierra menu Diseño
function apareceYDesapareceSubMenu()
{
    let submenu = document.getElementById('sublistaDiseno');
    submenu.classList.toggle('nuevosubmenu');
}

// Abre y cierra menu Foto
function apareceYDesapareceSubMenu2()
{
    let submenu = document.getElementById('sublistaFoto');
    submenu.classList.toggle('nuevosubmenu');
}

// Despliega menu
function muestraSubMenu2() 
{
    let submenu = document.getElementsByClassName('navegador__sublistaFoto');

    for (let i = 0; i < submenu.length; i++)
    {
        submenu[i].style.maxHeight = '0';
    }

    submenu[0].style.maxHeight = '11rem';
}

// Despliega submenu
function ocultarSubMenu2() 
{
    let submenu = document.getElementsByClassName('navegador__sublistaFoto');

    for (let i = 0; i < submenu.length; i++)
    {
        submenu[i].style.maxHeight = '0';
    }
}

// Cambia el menu de barra a x y muestra menu
function muestraMenu () 
{
    let lista = document.getElementById('listaCompleta');

    lista.classList.toggle('muestrate');

    if (lista.classList.contains('muestrate') == true) 
    {
        let boton = document.getElementById('barra__menu');

        boton.innerHTML = '<i class="fa-solid fa-x boton__responsive"></i>';
    }

    else 
    {
        let boton = document.getElementById('barra__menu');
        boton.innerHTML = '<i class="fa-solid fa-bars boton__responsive"></i>';
    }
}

// Abre buscador
function muestraBusqueda () 
{
    let lupa = document.getElementById('buscar');

    lupa.style.display = 'block';
}

// Desaparece buscador
function desapareceBusqueda () 
{
    let lupa = document.getElementById('buscar');

    lupa.style.display = 'none';
}







//MAIN
//Slice

function pasaImagen()
{
    let imagen = document.getElementById('imagen');

    posicion = posicion + 1;

    if (posicion == 5)
    {
        posicion = 0
    }
    
    imagen.src = arrayImagenes[posicion];
}


let intervalo = setInterval(pasaImagen,2000);
window.onload = handleEvent;


// Animacion de secciones

let boxes = document.querySelectorAll ('section');

checkBoxes();

function checkBoxes ()
{
    let triggerBotton = window.innerHeight / 5 * 4;

    boxes.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBotton)
        {
            section.classList.add('show')
        }
        else
        {
            section.classList.remove('show')
        }
    });
}

window.addEventListener('scroll', checkBoxes)