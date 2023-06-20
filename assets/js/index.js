
let button = document.getElementById('form__button');
let error = document.getElementById('form__error');

button.addEventListener('click',verificarEmail);


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
