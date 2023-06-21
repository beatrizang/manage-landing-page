
let button = document.getElementById('form__button');
let error = document.getElementById('form__error');
let btnMenu = document.getElementById('btn__menu');
let btnClose = document.getElementById('btn__close');
let backMenu = document.getElementById("back_menu");
let nav = document.getElementById('nav');
let show = false;

button.addEventListener('click',verificarEmail);

btnMenu.addEventListener('click',()=>{
    if(!show){
        showMenu();
    }
    else{
        hideMenu();
    }
});

backMenu.addEventListener('click', ()=>{
        hideMenu();
})

function hideMenu(){
    nav.style.display = "none";
    backMenu.style.display = "none";
    btnMenu.style.display = "block";
    btnClose.style.display = "none";
    show = false;
}

function showMenu(){
    nav.style.display = "block";
    backMenu.style.display = "block";
    btnMenu.style.display = "none";
    btnClose.style.display = "block";
    show= true;
}


function isEmpty(cadena){
    return (cadena.length == 0 || cadena == ' ')?true : false;
}

function esEmail(cadena){
    let regex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');
    return regex.test(cadena);
}

function verificarEmail(){
    let errorEmail = 'Please enter a valid email';
    let emailVacio = 'The email is empty';

    let email = document.getElementById('form__email').value;

    if(isEmpty(email)){
        error.innerHTML = emailVacio;
    }
    else if(!esEmail(email)){
        error.innerHTML = errorEmail;
    }
    else{
        error.innerHTML = '';
    }
}
