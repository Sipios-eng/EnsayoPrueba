var nombre = document.getElementById('nombre');
var celular = document.getElementById('celular');
var mail = document.getElementById('mail');
var pais = document.getElementById('pais');
var ciudad = document.getElementById('ciudad');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('error');
error.style.color = 'red';


function enviarFormulario(){
    console.log('Enviand formulario...');

    var mensajesError = [];
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('ingresa tu nombre');
    }
    if(celular.value === null || celular.value === ''){
        mensajesError.push('ingresa tu celular');
    }
    if(mail.value === null || mail.value === ''){
        mensajesError.push('ingresa tu mail');
    }
    if(pais.value === null || pais.value === ''){
        mensajesError.push('ingresa tu pais');
    }
    if(ciudad.value === null || ciudad.value === ''){
        mensajesError.push('ingresa tu ciudad');
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('Ingresa un mensaje');
    }
    error.innerHTML = mensajesError.join(', ');
        
    

    return false;
}