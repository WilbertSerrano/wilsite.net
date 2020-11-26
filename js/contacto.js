let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let nombreEmpresa = document.getElementById('nombreEmpresa');
let descripcion = document.getElementById('descripcion');

emailjs.send("service_ff5436h", "template_m0ias2f",{
    nombre: nombre,
    correo: correo,
    nombreEmpresa: nombreEmpresa,
    descripcion: descripcion,
});